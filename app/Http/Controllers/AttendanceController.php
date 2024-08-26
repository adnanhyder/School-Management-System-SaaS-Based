<?php

namespace App\Http\Controllers;

use App\Http\Resources\AttendanceResource;
use App\Models\Attendance;
use App\Models\Classes;
use App\Models\Sessions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AttendanceController extends Controller

{
    protected $dynamicParam = [
        'name' => 'attendance'
    ];
    protected $success_rep;
    protected $index_route;

    protected $school_id;

    protected $imageError;

    public function __construct()
    {
        $this->success_rep = ucfirst($this->dynamicParam['name']);
        $this->index_route = $this->dynamicParam['name'] . '.index';
        $this->school_id = Auth::user()->getDefault()->id;
        $this->imageError = [
            'image.dimensions' => 'The image dimensions exceeds by 500x500 pixels.',
            'image.max' => 'Please upload image that has size under 300 KB.',
            'image.mimes' => 'Please upload jpg, jpeg, png.',
        ];
    }

    public function index()
    {
        $query = Attendance::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }

        $query->with(['student', 'classes', 'sessions']);
        $recivedItem = $query->where("school_id", $this->school_id)->orderBy($sortField, $sortDirection)->paginate(50)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';

        return inertia($route,
            [
                'receivedItem' => AttendanceResource::collection($recivedItem),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
            ]
        );

    }

    public function create()
    {
        $sessions = Sessions::where("school_id", $this->school_id)->get(['id', 'name']);
        $classes = Classes::where("school_id", $this->school_id)->get();

        $route = $this->success_rep . '/Create';
        return inertia($route,
            [
                'sessions' => $sessions,
                'classes' => $classes,
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'session_id' => 'required|exists:sch_sessions,id',
            'class_id' => 'required|exists:sch_classes,id',
            'date' => 'required|date',
            'attendance' => 'array',
        ]);

        foreach ($validatedData['attendance'] as $id => $attendanceData) {
            Attendance::updateOrCreate(
                [
                    'school_id' => $this->school_id,
                    'session_id' => $validatedData['session_id'],
                    'class_id' => $validatedData['class_id'],
                    'date' => $validatedData['date'],
                    'student_id' => $id,
                ],
                [
                    'status' => $attendanceData,
                ]
            );
        }


        return to_route($this->index_route)->with('success', 'Attendance recorded successfully');
    }

    public function edit(Attendance $attendance)
    {


    }

    public function update(Request $request, Attendance $attendance)
    {


    }

    public function destroy(Attendance $attendance)
    {

        $attendance->delete();
        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }

    public function show(Attendance $attendance)
    {

    }

}
