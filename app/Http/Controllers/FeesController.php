<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\FeesResource;
use App\Models\Category;
use App\Models\FeeCategory;
use App\Models\Fees;
use App\Models\Student;
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
            $query->whereHas('student', function($q) {
                $q->where('name', 'like', '%' . request("name") . '%');
            });
        }
        if (request("phone")) {
            $query->whereHas('student', function($q) {
                $q->where('phone', 'like', '%' . request("phone") . '%');
            });
        }
        if (request("roll_number")) {
            $query->whereHas('student', function($q) {
                $q->where('roll_number', 'like', '%' . request("roll_number") . '%');
            });
        }

        $fee = $query->with(['student', 'classes' , 'sessions'])
            ->where('school_id', $this->school_id)
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);
        $recivedItem = FeesResource::collection($fee);
        $route = $this->success_rep . '/Index';
        return inertia($route, [
            'receivedItem' => $recivedItem,
            'dynamicParam' => $this->dynamicParam,
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);

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
                'success' => session('success'),
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

    public function Categories(){

        $query = Category::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }


        $recivedItem = $query->where("school_id", $this->school_id)->where("module_type", 2)->orderBy($sortField, $sortDirection)->paginate(10)
            ->onEachSide(1);
        $route = $this->success_rep . '/Category';
        return inertia($route,
            [
                'receivedItem' => CategoryResource::collection($recivedItem),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
            ]
        );
    }

    public function generateVoucher(Request $request){
        $request->validate([
            'name' => 'required',

        ], $this->imageError);
        $data = $request->all();

    }
    public function store(Request $request){
        $request->validate([
            'name' => 'required',

        ], $this->imageError);
        $data = $request->all();
        $student_id = $data['student_id'];
        $feeCategories = $data['fee_categories'];
        $student = Student::with(['classes', 'session'])->where('id' , $student_id)->first();
        $categories = FeeCategory::whereIn('id', $feeCategories)->get();
        $fine = (int) $data['fine'];
        $discount = (int) $data['discount'];
        $month = (int) $data['month'];
        $total_amount = ($student->fee_amount + $fine) - $discount ;

        $data['school_id'] = $this->school_id;
        $data['student_id'] = $student->id;
        $data['class_id'] = $student->class_id;
        $data['session_id'] = $student->session_id;

        $data['month'] = $month;
        $additional=[];
        $totalCatAmount = 0;
        foreach ($categories as $single){
            $additional[] = [
                'id' => $single->id,
                'name' => $single->name,
            ];
            $totalCatAmount += $single->amount;
        }
        $total_amount = $totalCatAmount +  $total_amount;
        $data['amount'] = $total_amount;
        $data['additional'] = json_encode($additional);
        $existingFee = Fees::where('student_id', $data['student_id'])
            ->where('school_id', $data['school_id'])
            ->where('class_id', $data['class_id'])
            ->where('session_id', $data['session_id'])
            ->where('month', $data['month'])
            ->first();

        if ($existingFee) {
            // Handle the case where the fee already exists
            $success = " Voucher already created for this Month please delete that to generate again.";

            return back()->with('success', $success);
        }

        Fees::create($data);

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }


}
