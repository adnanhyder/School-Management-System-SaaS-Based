<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateSchoolRequest;
use App\Http\Resources\SchoolResource;
use App\Models\School;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    protected $dynamicParam = [
        'name' => 'school'
    ];
    protected $sucess_rep;
    public function __construct()
    {
        $this->sucess_rep = ucfirst($this->dynamicParam['name']);
    }

    public function index()
    {
        $schools = School::query()->paginate(10)
            ->onEachSide(1);;

        return inertia('School/Index',
            [
                'receivedItem' => SchoolResource::collection($schools),
                'dynamicParam' => $this->dynamicParam,
                'success' => session('success'),
            ]
        );

    }

    public function create()
    {

        return inertia('School/Create',
            [
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'nullable',
            'phone' => 'numeric',
        ]);
        $data = $request->all();
        $data['created_by'] = auth()->id();

        School::create($data);

        $sucess = " $this->sucess_rep  was created";
        return to_route('school.index')->with('success', $sucess);
    }

    public function edit(School $school)
    {
        $getschool = new SchoolResource($school);
        $data = $getschool->toArray(request());
        return inertia('School/Edit', [
                'school' => $school,
                'item' => $data,
                'dynamicParam' => $this->dynamicParam
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

        $school->update($request->all());
        $sucess = " $this->sucess_rep  was updated";
        return to_route('school.index')->with('success', $sucess);
    }

    public function destroy(School $school)
    {
        $school->delete();
        $sucess = " $this->sucess_rep  was Deleted";
        return to_route('school.index')->with('success', $sucess);
    }

    public function show(School $school)
    {
        $data = new SchoolResource($school);
        return inertia('School/Show', [
            'item' => $data,
            'dynamicParam' => $this->dynamicParam
        ]);
    }
}
