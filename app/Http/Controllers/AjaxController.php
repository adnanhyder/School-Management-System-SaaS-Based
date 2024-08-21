<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Student;
use Illuminate\Http\Request;

class AjaxController extends Controller
{
    public function getItemsBySerialNumber(Request $request)
    {
        $schoolId = $request->query('school_id' );
        $searchValue = $request->query('serial_number');

        $items = Item::where('school_id', $schoolId)
            ->where(function($query) use ($searchValue) {
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
        $schoolId = $request->query('school_id' );
        $searchValue = $request->query('name');

        $items = Student::where(school_prefix().'students.school_id', $schoolId)
            ->where(function($query) use ($searchValue) {
                $query->where(school_prefix().'students.name', 'LIKE', '%' . $searchValue . '%')
                    ->orWhere('roll_number', 'LIKE', '%' . $searchValue . '%')
                    ->orWhere('student_id', 'LIKE', '%' . $searchValue . '%')
                    ->orWhere('phone', 'LIKE', '%' . $searchValue . '%');
            })
            ->join(school_prefix().'classes', school_prefix().'students.class_id', '=', school_prefix().'classes.id')
            ->select(
                school_prefix().'students.*',
                school_prefix().'classes.name as class_name',
                school_prefix().'classes.section as section'
            )
            ->orderBy(school_prefix().'students.roll_number', 'asc')
            ->get();
        return response()->json($items);
    }
}
