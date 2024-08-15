<?php

namespace App\Http\Controllers;

use App\Http\Resources\GatepassResource;
use App\Models\Gatepass;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class GatepassController extends Controller
{
    protected $dynamicParam = [
        'name' => 'gatepass'
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

        $query = Gatepass::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }


        $recivedItem = $query->where("school_id", $this->school_id)->orderBy($sortField, $sortDirection)->paginate(10)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';
        return inertia($route,
            [
                'receivedItem' => GatepassResource::collection($recivedItem),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
            ]
        );

    }

    public function create()
    {
        $route = $this->success_rep . '/Create';
        $items = Item::where('school_id', $this->school_id)->get(['id', 'name']);
        return inertia($route,
            [
                'dynamicParam' => $this->dynamicParam,
                'items' => $items,

            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required',
            'item_id' => 'required',
            'quantity' => 'required',
        ], $this->imageError);


        $data = $request->all();

        $data['school_id'] = $this->school_id;
        $image = $data['image'] ?? null;
        if ($image) {
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();

            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        Gatepass::create($data);

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(Gatepass $gatepass)
    {

        $get_item = new GatepassResource($gatepass);
        $data = $get_item->toArray(request());
        $route = $this->success_rep . '/Edit';

        return inertia($route, [
                'item' => $data,
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function update(Request $request, Gatepass $gatepass)
    {
        $request->validate([
            'description' => 'required',
            'item_id' => 'required',
            'quantity' => 'required',

        ], $this->imageError);
        $data = $request->all();

        $image = $data['image'] ?? null;
        if ($image) {
            if ($gatepass->image) {
                Storage::disk('public')->delete($gatepass->image);
            }
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();
            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        $gatepass->update($data);
        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }

    public function destroy(Gatepass $gatepass)
    {
        if ($gatepass->image) {
            Storage::disk('public')->delete($gatepass->image);
        }
        $gatepass->delete();
        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }

    public function show(Gatepass $gatepass)
    {
        $data = new GatepassResource($gatepass);
        $route = $this->success_rep . '/Show';
        return inertia($route, [
            'item' => $data,
            'dynamicParam' => $this->dynamicParam
        ]);
    }
}
