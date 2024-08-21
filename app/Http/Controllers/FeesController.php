<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeesResource;
use App\Models\Fees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FeesController extends Controller
{
    //
    protected $dynamicParam = [
        'name' => 'fee'
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
        $query = Fees::query();

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

        $fee = $query->where("school_id", $this->school_id)->orderBy($sortField, $sortDirection)->paginate(10)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';
        return inertia($route,
            [
                'receivedItem' => FeesResource::collection($fee),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
            ]
        );

    }

    public function generateByClass()
    {
        $query = Fees::query();
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
        $fee = $query->where("school_id", $this->school_id)->orderBy($sortField, $sortDirection)->paginate(10)
            ->onEachSide(1);
        $route = $this->success_rep . '/Byclass';
        return inertia($route,
            [
                'receivedItem' => FeesResource::collection($fee),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
                'categories' => session('success'),
            ]
        );

    }

    public function generateByStudent()
    {
        $school = $this->school_id;
        $route = $this->success_rep . '/Bystudent';
        return inertia($route,
            [
                'dynamicParam' => $this->dynamicParam,
                'school' => $school,
            ]
        );

    }

    public function generateFeeByClass($classId, $amount, $dueDate)
    {
        $students = Student::where('class_id', $classId)->get();

        foreach ($students as $student) {
            Fee::create([
                'student_id' => $student->id,
                'school_id' => $student->school_id,
                'class_id' => $student->class_id,
                'session_id' => $student->session_id,
                'amount' => $amount,
                'due_date' => $dueDate,
            ]);
        }
    }

    public function generateFeeByStudent($studentId, $amount, $dueDate)
    {
        $student = Student::find($studentId);

        if ($student) {
            Fee::create([
                'student_id' => $student->id,
                'school_id' => $student->school_id,
                'class_id' => $student->class_id,
                'academic_session_id' => $student->academic_session_id,
                'amount' => $amount,
                'due_date' => $dueDate,
            ]);
        }
    }

    public function create()
    {

    }

    public function store(Request $request)
    {

    }

    public function edit()
    {
    }

    public function update()
    {

    }

    public function destroy()
    {

    }
}
