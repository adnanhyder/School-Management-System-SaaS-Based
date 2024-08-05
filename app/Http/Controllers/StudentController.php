<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class StudentController extends Controller
{
    protected $dynamicParam = [
        'name' => 'student'
    ];
    protected $success_rep;
    protected $index_route;

    protected $school_id ;

    public function __construct()
    {
        $this->success_rep = ucfirst($this->dynamicParam['name']);
        $this->index_route = $this->dynamicParam['name'].'.index';
        $this->school_id = Auth::user()->getDefaultSchool()->id;
    }

    public function index()
    {
        $schools = Student::query()->where("school_id",$this->school_id )->paginate(10)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';
        return inertia($route,
            [
                'receivedItem' => StudentResource::collection($schools),
                'dynamicParam' => $this->dynamicParam,
                'success' => session('success'),
            ]
        );

    }

    public function create()
    {
        $route = $this->success_rep . '/Create';
        return inertia($route,
            [
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'nullable',
            'phone' => 'numeric',
        ]);
        $data = $request->all();
        $data['school_id'] = $this->school_id;
        $image = $data['image'] ?? null;

        if ($image) {
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();
            $data['profile_picture'] = $image->storeAs($this->dynamicParam['name'],$filename, 'public');
        }

        Student::create($data);

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(Student $student)
    {
        $get_item = new StudentResource($student);
        $data = $get_item->toArray(request());
        $route = $this->success_rep . '/Edit';
        return inertia($route, [
                'item' => $data,
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function update(Request $request, Student $student)
    {

        $request->validate([
            'name' => 'required',
            'address' => 'nullable',
            'phone' => 'nullable',
        ]);
        $data =  $request->all();
        $image = $data['image'] ?? null;
        if ($image) {
            if ($student->profile_picture) {
                Storage::disk('public')->delete($student->profile_picture);
            }
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();
            $data['profile_picture'] = $image->storeAs($this->dynamicParam['name'],$filename, 'public');
        }
        $student->update($data);
        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }

    public function destroy(Student $student)
    {
        if ($student->profile_picture) {
            Storage::disk('public')->delete($student->profile_picture);
        }
        $student->delete();


        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }

    public function show(Student $student)
    {
        $data = new StudentResource($student);
        $route = $this->success_rep . '/Show';
        return inertia($route, [
            'item' => $data,
            'dynamicParam' => $this->dynamicParam
        ]);
    }
}
