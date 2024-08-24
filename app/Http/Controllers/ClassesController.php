<?php

namespace App\Http\Controllers;


use App\Http\Resources\ClassesResource;
use App\Http\Resources\StudentResource;
use App\Models\Classes;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClassesController extends Controller
{
    protected $dynamicParam = [
        'name' => 'class'
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
        $query = Classes::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("section")) {
            $query->where("section", "like", "%" . request("section") . "%");
        }

        $recivedItem = $query->where("school_id", $this->school_id)->orderBy($sortField, $sortDirection)->paginate(10)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';
        return inertia($route,
            [
                'receivedItem' => ClassesResource::collection($recivedItem),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
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

        ], $this->imageError);


        $data = $request->all();
        $data['school_id'] = $this->school_id;


        Classes::create($data);

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(Classes $class)
    {


        $get_item = new ClassesResource($class);
        $data = $get_item->toArray(request());

        $route = $this->success_rep . '/Edit';

        return inertia($route, [
                'item' => $data,
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function update(Request $request, Classes $class)
    {
        $request->validate([
            'name' => 'required',
        ], $this->imageError);
        $data = $request->all();
        $class->update($data);
        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }

    public function destroy(Classes $class)
    {

        $class->delete();
        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }

    public function show(Classes $class)
    {
        $data = new ClassesResource($class);
        $route = $this->success_rep . '/Show';
        return inertia($route, [
            'item' => $data,
            'dynamicParam' => $this->dynamicParam
        ]);
    }

    public function assign()
    {
        $query = Student::query();
        $students = $query->where("school_id", $this->school_id)->get();
        $data_students = StudentResource::collection($students);
        $query = Classes::query();
        $classes = $query->where("school_id", $this->school_id)->get();
        $data_classes = ClassesResource::collection($classes);
        $route = $this->success_rep . '/assign';
        return inertia($route, [
            'students' => $data_students,
            'classes' => $data_classes,
            'dynamicParam' => $this->dynamicParam
        ]);
    }



}
