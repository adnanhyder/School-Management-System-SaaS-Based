<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateSchoolRequest;
use App\Http\Resources\SchoolResource;
use App\Models\School;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class SchoolController extends Controller
{
    protected $dynamicParam = [
        'name' => 'school'
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
        $schools = School::query()->paginate(10)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';
        return inertia($route,
            [
                'receivedItem' => SchoolResource::collection($schools),
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
                'dynamicParam' => $this->dynamicParam,
                'users' => User::all(),
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'nullable',
            'phone' => 'numeric',
            'assignedUser' => 'required|exists:users,id',
        ]);
        $data = $request->all();

        $data['created_by'] = auth()->id();
        $user_id = $data['assignedUser'] ;

        $school_id = School::create($data);
        $this->assignSchool( $user_id ,$school_id );


        $success = " $this->success_rep  was created";
        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(School $school)
    {
        $getschool = new SchoolResource($school);
        $data = $getschool->toArray(request());
        $id_of_school = $getschool->users;
        $pivot_data = $id_of_school->map(function ($data) {
            return  User::findOrFail($data->pivot->user_id)->name;
        })->implode(',');

        $route = $this->success_rep . '/Edit';
        return inertia($route, [
                'item' => $data,
                'dynamicParam' => $this->dynamicParam,
                'users' => User::all(),
                'selectedUser' => $pivot_data,
            ]
        );
    }

    public function update(Request $request, School $school)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'nullable',
            'phone' => 'nullable',
        ]);
        $data = $request->only(['name', 'address', 'phone']);
        $school->update($data);
        $user_id = $request->input('assignedUser');
        if($user_id) {
            $existingAssociation = DB::table(school_prefix().'school_user')->where('school_id', $school->id)->first();

            if ($existingAssociation) {
                // Update the existing record if found
                DB::table(school_prefix().'school_user')->where('school_id', $school->id)->update(['user_id' => $user_id]);
            } else {
                // Create a new record if not found
                DB::table(school_prefix().'school_user')->insert(['school_id' => $school->id, 'user_id' => $user_id]);
            }
        }

        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }

    public function destroy(School $school)
    {
        $school->delete();
        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }

    public function show(School $school)
    {
        $data = new SchoolResource($school);
        $route = $this->success_rep . '/Show';
        return inertia($route, [
            'item' => $data,
            'dynamicParam' => $this->dynamicParam
        ]);
    }

    public function assignSchool( $user_id ,$school ){
        $user = User::findOrFail($user_id);
        $school = School::findOrFail($school->id);
        $user->schools()->attach($school);
        return 1 ;
    }


    public function selectSchool(Request $request, School $school)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'nullable',
            'phone' => 'nullable',
        ]);
        dd($request->all());
        $school->update($data);
        $user_id = $request->input('assignedUser');
        if($user_id) {
            $existingAssociation = DB::table(school_prefix().'school_user')->where('school_id', $school->id)->first();

            if ($existingAssociation) {
                // Update the existing record if found
                DB::table(school_prefix().'school_user')->where('school_id', $school->id)->update(['user_id' => $user_id]);
            } else {
                // Create a new record if not found
                DB::table(school_prefix().'school_user')->insert(['school_id' => $school->id, 'user_id' => $user_id]);
            }
        }

        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }
}
