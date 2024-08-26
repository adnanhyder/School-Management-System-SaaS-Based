<?php

namespace App\Http\Controllers;

use App\Http\Resources\TattendanceResource;
use App\Models\Sessions;
use App\Models\Tattendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TattendanceController extends Controller
{
    protected $dynamicParam = [
        'name' => 'tattendance'
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
        $query = TAttendance::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }

        $query->with(['teacher', 'sessions']);
        $recivedItem = $query->where("school_id", $this->school_id)->orderBy($sortField, $sortDirection)->paginate(50)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';

        return inertia($route,
            [
                'receivedItem' => TattendanceResource::collection($recivedItem),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
            ]
        );

    }

    public function create()
    {
        $sessions = Sessions::where("school_id", $this->school_id)->get(['id', 'name']);

        $route = $this->success_rep . '/Create';
        return inertia($route,
            [
                'sessions' => $sessions,
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'session_id' => 'required|exists:sch_sessions,id',
            'date' => 'required|date',
            'attendance' => 'array',
        ]);

        foreach ($validatedData['attendance'] as $id => $attendanceData) {
            Tattendance::updateOrCreate(
                [
                    'school_id' => $this->school_id,
                    'session_id' => $validatedData['session_id'],
                    'date' => $validatedData['date'],
                    'teacher_id' => $id,
                ],
                [
                    'status' => $attendanceData,
                ]
            );
        }


        return to_route($this->index_route)->with('success', 'Attendance recorded successfully');
    }



    public function destroy(Tattendance $tattendance)
    {

        $tattendance->delete();
        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }


}
