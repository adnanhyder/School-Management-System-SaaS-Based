<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateSchoolRequest;
use App\Http\Resources\SchoolResource;
use App\Models\Role;
use App\Models\School;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SchoolController extends Controller
{
    protected $dynamicParam = [
        'name' => 'school'
    ];
    protected $success_rep;
    protected $index_route;
    protected $imageError;

    public function __construct()
    {
        $this->success_rep = ucfirst($this->dynamicParam['name']);
        $this->index_route = $this->dynamicParam['name'].'.index';
        $this->imageError = [
            'image.dimensions' => 'The image dimensions exceeds by 500x500 pixels.',
            'image.max' => 'Please upload image that has size under 300 KB.',
            'image.mimes' => 'Please upload jpg, jpeg, png.',
        ];
    }

    public function index()
    {
        $schools = School::query()->paginate(50)
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
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500', // Validate image type and size
        ], $this->imageError);

        $data = $request->all();

        $data['created_by'] = auth()->id();
        $user_id = $data['assignedUser'] ;
        $image = $data['image'] ?? null;
        if ($image) {
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();

            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        $school_id = School::create($data);
        $this->assignSchool( $user_id ,$school_id );
        $this->assignRole( $user_id );


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
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500', // Validate image type and size
        ], $this->imageError);
        $data = $request->only(['name', 'address', 'phone' , 'image']);

        $image = $data['image'] ?? null;
        if ($image) {
            if ($school->image) {
                Storage::disk('public')->delete($school->image);
            }
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();
            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }

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

    public function assignRole( $user_id ){
        $user = User::findOrFail($user_id);
        $schoolRole = Role::where('name', 'school')->firstOrFail();
        $user->roles()->attach($schoolRole->id);
        return 1 ;
    }



    public function selectSchool(Request $request)
    {

        $request->validate([
            'school_id' => 'numeric|required|exists:sch_schools,id',
        ]);

        $user = Auth::user();

        $school_id = $request->input('school_id');

        DB::table(school_prefix().'school_user')
            ->where('user_id', $user->id)
            ->update(['selected_school_id' => null]);

        DB::table(school_prefix().'school_user')
            ->where('user_id', $user->id)
            ->where('school_id', $school_id)
            ->update(['selected_school_id' => 1]);

        $defaultSchool = $user->getDefault();
        $success = " $this->success_rep  was updated";

        return to_route('dashboard.'.$this->dynamicParam['name'])->with('success', $success);
    }
}
