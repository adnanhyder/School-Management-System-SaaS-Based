<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\FeeCategory;
use App\Models\Fees;
use App\Models\Item;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
        $key = base64_decode($request->key);
        $school_id = $key - 100;
        $students = Student::where('session_id', $request->session_id)
            ->where('class_id', $request->class_id)
            ->where('school_id', $school_id)
            ->get(['id', 'name', 'roll_number']);

        if ($students->isEmpty()) {
            $students[] = [
                'id' => 0,
                'name' => 'No Student Found',
                'roll_number' => 0,
            ];
        }
        return response()->json(['students' => $students]);
    }

    public function getTeacherAttandnace(Request $request)
    {
        $key = base64_decode($request->key);
        $school_id = $key - 100;
        $teachers = Teacher::where('session_id', $request->session_id)
            ->where('school_id', $school_id)
            ->get(['id', 'name', 'phone', 'email']);

        if ($teachers->isEmpty()) {
            $teachers[] = [
                'id' => 0,
                'name' => 'No Record Found',
                'phone' => 0,
                'email' => 0,
            ];
        }
        return response()->json(['teachers' => $teachers]);
    }

    public function feeFetch(Request $request)
    {
        $key = base64_decode($request->key);
        $school_id = $key - 100;

        $items = Student::leftJoin('sch_fees', function ($join) use ($request ,$school_id) {
            $join->on('sch_students.id', '=', 'sch_fees.student_id')
                ->where('sch_fees.session_id', $request->session_id)
                ->where('sch_fees.class_id', $request->class_id)
                ->where('sch_fees.month', $request->month)
            ->where('sch_fees.school_id', $school_id);
        })
            ->where('sch_students.school_id', $school_id)
            ->where('sch_students.session_id', $request->session_id)
            ->where('sch_students.class_id', $request->class_id)
            ->select(
                'sch_students.id as student_id',
                'sch_students.name',
                'sch_fees.id as fee_id',
                'sch_fees.tid',
                'sch_fees.amount', // Assuming you have an amount field in fees
                DB::raw('
            IF(sch_fees.id IS NULL,
               "Voucher Not Generated",
               IF(sch_fees.status = "pending",
                  "pending",
                  "Paid"
               )
            ) as _status'
                )
            )
            ->get();

        $totalFeeAmount = Student::where('session_id', $request->session_id)
            ->where('class_id', $request->class_id)
            ->where('school_id', $school_id)
            ->sum('fee_amount');

        $fees = Fees::where('session_id', $request->session_id)
            ->where('class_id', $request->class_id)
            ->where('school_id', $school_id)
            ->where('month', $request->month)
            ->where('status', 'paid')
            ->sum('amount');



        return response()->json([
            'items' => $items,
            'total_fee_amount' => $totalFeeAmount,
            'total_received_amount' => $fees,
            ]);
    }

    public function attendFetch(Request $request)
    {
        $key = base64_decode($request->key);
        $school_id = $key - 100;
        $date = $request->date;
        if($request->type === 'teacher'){
            $attendanceRecords = DB::table('sch_teachers')
                ->leftJoin('tattendances', function ($join) use ($date, $request, $school_id) {
                    $join->on('sch_teachers.id', '=', 'tattendances.id')
                        ->where('tattendances.session_id', $request->session_id)
                        ->where('tattendances.school_id', $school_id)
                        ->whereDate('tattendances.date', $date);
                })
                ->select(
                    'sch_teachers.id',
                    'sch_teachers.name',
                    DB::raw('CASE WHEN tattendances.id IS NOT NULL THEN "Present" ELSE "Absent" END as status')
                )
                ->where('sch_teachers.school_id', $school_id)
                ->get();
        }else{

        $attendanceRecords = DB::table('sch_students')
            ->leftJoin('attendances', function ($join) use ($date, $request, $school_id) {
                $join->on('sch_students.id', '=', 'attendances.student_id')
                    ->where('attendances.session_id', $request->session_id)
                    ->where('attendances.class_id', $request->class_id)
                    ->where('attendances.school_id', $school_id)
                    ->whereDate('attendances.date', $date);
            })
            ->select(
                'sch_students.id',
                'sch_students.name',
                'sch_students.roll_number',
                DB::raw('CASE WHEN attendances.id IS NOT NULL THEN "Present" ELSE "Absent" END as status')
            )
            ->where('sch_students.class_id', $request->class_id)
            ->where('sch_students.school_id', $school_id)
            ->get();

        }

        return response()->json([
            'items' => $attendanceRecords,
            ]);
    }
}
