<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\School;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{


    public function index()
    {
        $user = auth()->user();
        $totalPendingTasks = Task::query()
            ->where('status', 'pending')
            ->count();
        $myPendingTasks = Task::query()
            ->where('status', 'pending')
            ->where('assigned_user_id', $user->id)
            ->count();


        $totalProgressTasks = Task::query()
            ->where('status', 'in_progress')
            ->count();
        $myProgressTasks = Task::query()
            ->where('status', 'in_progress')
            ->where('assigned_user_id', $user->id)
            ->count();


        $totalCompletedTasks = Task::query()
            ->where('status', 'completed')
            ->count();
        $myCompletedTasks = Task::query()
            ->where('status', 'completed')
            ->where('assigned_user_id', $user->id)
            ->count();

        $activeTasks = Task::query()
            ->whereIn('status', ['pending', 'in_progress'])
            ->where('assigned_user_id', $user->id)
            ->limit(10)
            ->get();
        $activeTasks = TaskResource::collection($activeTasks);
        return inertia(
            'Dashboard',
            compact(
                'totalPendingTasks',
                'myPendingTasks',
                'totalProgressTasks',
                'myProgressTasks',
                'totalCompletedTasks',
                'myCompletedTasks',
                'activeTasks'
            )
        );
    }

    public function admin()
    {

        return inertia('DashboardAdmin',
            [
            ]
        );
    }

    public function School()
    {
        $dynamicParam = [
            'name' => 'school'
        ];
        $user = Auth::user();

        $defaultSchool = $user->getDefault();

        $today = Carbon::today(); // Get today's date
        $sevenDaysAgo = $today->copy()->subDays(7);
        $paymentsReceivedToday = DB::table('sch_fees')
            ->where('status', 'paid')
            ->whereBetween('created_at', [$sevenDaysAgo, $today])
            ->get();

        return inertia('DashboardSchool',
            [
                'dynamicParam' => $dynamicParam,
                'item' => $defaultSchool,
                'success' => session('success'),
                'totalPayment' => $paymentsReceivedToday
            ]
        );
    }
}
