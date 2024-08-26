<?php

namespace App\Http\Controllers;

use App\Models\FeeCategory;
use App\Models\Item;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;

class AjaxController extends Controller
{
    public function getItemsBySerialNumber(Request $request)
    {
        $schoolId = $request->query('school_id');
        $searchValue = $request->query('serial_number');

        $items = Item::where('school_id', $schoolId)
            ->where(function ($query) use ($searchValue) {
                $query->where('serial_number', 'LIKE', '%' . $searchValue . '%')
                    ->orWhere('name', 'LIKE', '%' . $searchValue . '%');
            })
            ->get();
        return response()->json($items);
    }

    public function getItemsById($id)
    {

        $item = Item::find($id);

        // Check if the item exists
        if ($item) {
            return response()->json(['name' => $item->name], 200);
        } else {
            return response()->json(['error' => 'Item not found'], 404);
        }
    }

    public function getStudentByName(Request $request)
    {
        $schoolId = $request->query('school_id');
        $searchValue = $request->query('name');

        $items = Student::where(school_prefix() . 'students.school_id', $schoolId)
            ->where(function ($query) use ($searchValue) {
                $query->where(school_prefix() . 'students.name', 'LIKE', '%' . $searchValue . '%')
                    ->orWhere('roll_number', 'LIKE', '%' . $searchValue . '%')
                    ->orWhere('student_id', 'LIKE', '%' . $searchValue . '%')
                    ->orWhere('phone', 'LIKE', '%' . $searchValue . '%');
            })
            ->join(school_prefix() . 'classes', school_prefix() . 'students.class_id', '=', school_prefix() . 'classes.id')
            ->select(
                school_prefix() . 'students.*',
                school_prefix() . 'classes.name as class_name',
                school_prefix() . 'classes.section as section'
            )
            ->orderBy(school_prefix() . 'students.roll_number', 'asc')
            ->get();
        $feeCategories = FeeCategory::where('school_id', $schoolId)->get();
        return response()->json([
            'students' => $items,
            'fee_categories' => $feeCategories
        ]);
    }

    public function getStudentAttandnace(Request $request)
    {
        $students = Student::where('session_id', $request->session_id)
            ->where('class_id', $request->class_id)
            ->get(['id', 'name', 'roll_number']);

        if ($students->isEmpty()) {
            $students[]= [
                'id' => 0,
                'name' => 'No Student Found',
                'roll_number' => 0,
            ];
        }
        return response()->json(['students' => $students]);
    }

    public function getTeacherAttandnace(Request $request)
    {
        $teachers = Teacher::where('session_id', $request->session_id)
            ->get(['id', 'name', 'phone' , 'email']);

        if ($teachers->isEmpty()) {
            $teachers[]= [
                'id' => 0,
                'name' => 'No Record Found',
                'phone' => 0,
                'email' => 0,
            ];
        }
        return response()->json(['teachers' => $teachers]);
    }
}
