<?php

namespace App\Http\Controllers;

use App\Http\Resources\sessionsResource;
use App\Models\Sessions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class SessionsController extends Controller
{
    protected $dynamicParam = [
        'name' => 'sessions'
    ];
    protected $success_rep;
    protected $index_route;

    protected $school_id;

    protected $imageError;

    public function __construct()
    {
        $this->success_rep = ucfirst($this->dynamicParam['name']);
        $this->index_route = $this->dynamicParam['name'] . '.index';
        $this->school_id = Auth::user()->getDefault()->id;
        $this->imageError = [
            'image.dimensions' => 'The image dimensions exceeds by 500x500 pixels.',
            'image.max' => 'Please upload image that has size under 300 KB.',
            'image.mimes' => 'Please upload jpg, jpeg, png.',
        ];
    }

    public function index()
    {

        $query = Sessions::query();
        $recivedSessions = $query->where("school_id", $this->school_id)->paginate(50)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';
        return inertia($route,
            [
                'receivedItem' => SessionsResource::collection($recivedSessions),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
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
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500', // Validate image type and size

        ], $this->imageError);


        $data = $request->all();
        $data['school_id'] = $this->school_id;
        $image = $data['image'] ?? null;
        if ($image) {
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();

            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        Sessions::create($data);

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(Sessions $session)
    {

        $get_Sessions = new SessionsResource($session);
        $data = $get_Sessions->toArray(request());
        $route = $this->success_rep . '/Edit';

        return inertia($route, [
                'item' => $data,
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function update(Request $request, Sessions $session)
    {
        $request->validate([
            'name' => 'required',
            'start_date' => 'sometimes|required|date',
            'end_date' => 'sometimes|required|date|after_or_equal:start_date',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500'

        ], $this->imageError);
        $data = $request->all();

        $image = $data['image'] ?? null;
        if ($image) {
            if ($session->image) {
                Storage::disk('public')->delete($session->image);
            }
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();
            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        $session->update($data);
        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }

    public function destroy(Sessions $session)
    {
        if ($session->image) {
            Storage::disk('public')->delete($session->image);
        }
        $session->delete();
        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }

    public function show(Sessions  $session)
    {
        $data = new SessionsResource($session);
        $route = $this->success_rep . '/Show';
        return inertia($route, [
            'item' => $data,
            'dynamicParam' => $this->dynamicParam
        ]);
    }
}
