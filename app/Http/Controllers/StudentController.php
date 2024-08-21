<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Models\Classes;
use App\Models\Sessions;
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

    protected $school_id;

    protected $imageError;

    public function __construct()
    {
        $this->success_rep = ucfirst($this->dynamicParam['name']);
        $this->index_route = $this->dynamicParam['name'] . '.index';
        $this->school_id = Auth::user()->getDefaultSchool()->id;
        $this->imageError = [
            'image.dimensions' => 'The image dimensions exceeds by 500x500 pixels.',
            'image.max' => 'Please upload image that has size under 300 KB.',
            'image.mimes' => 'Please upload jpg, jpeg, png.',
        ];
    }

    public function index()
    {
        $query = Student::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("phone")) {
            $query->where("phone", "like", "%" . request("phone") . "%");
        }
        if (request("roll_number")) {
            $query->where("roll_number", "like", "%" . request("roll_number") . "%");
        }

        $student = $query->where("school_id", $this->school_id)->orderBy($sortField, $sortDirection)->paginate(10)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';
        return inertia($route,
            [
                'receivedItem' => StudentResource::collection($student),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
            ]
        );

    }

    public function create()
    {
        $route = $this->success_rep . '/Create';
        $classes = Classes::where('school_id', $this->school_id)->get();
        $sessions = Sessions::where('school_id', $this->school_id)->get();
        return inertia($route,
            [
                'dynamicParam' => $this->dynamicParam,
                'classes' => $classes,
                'sessions' => $sessions
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'numeric|required',
            'class_id' => 'numeric|required',
            'session_id' => 'numeric |required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500', // Validate image type and size
        ], $this->imageError);


        $data = $request->all();
        $data['school_id'] = $this->school_id;
        $image = $data['image'] ?? null;

        if ($image) {
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();

            $data['profile_picture'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }

        Student::create($data);

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(Student $student)
    {

        $get_item = new StudentResource($student);
        $data = $get_item->toArray(request());
        $classes = Classes::where('school_id', $this->school_id)->get();
        $sessions = Sessions::where('school_id', $this->school_id)->get();
        $route = $this->success_rep . '/Edit';
        return inertia($route, [
                'item' => $data,
                'dynamicParam' => $this->dynamicParam,
                'classes' => $classes,
                'sessions' => $sessions
            ]
        );
    }

    public function update(Request $request, Student $student)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'numeric|required',
            'class_id' => 'numeric|required',
            'session_id' => 'numeric |required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500'
        ], $this->imageError);
        $data = $request->all();
        $image = $data['image'] ?? null;
        if ($image) {
            if ($student->profile_picture) {
                Storage::disk('public')->delete($student->profile_picture);
            }
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();
            $data['profile_picture'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
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
