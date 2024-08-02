<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    protected $dynamicParam = [
        'name' => 'student'
    ];
    protected $success_rep;
    protected $index_route;

    public function __construct()
    {
        $this->success_rep = ucfirst($this->dynamicParam['name']);
        $this->index_route = $this->dynamicParam['name'].'.index';
    }

    public function index()
    {
        $schools = Student::query()->paginate(10)
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
        $data['school_id'] = 2;

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

        $student->update($request->all());
        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }

    public function destroy(Student $student)
    {
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
