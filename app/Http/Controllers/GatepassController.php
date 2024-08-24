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
        'name' => 'gatepass',
        'cant' => 'not allowed please delete instead of edit.'
    ];
    protected $success_rep;
    protected $index_route;

    protected $school_id;

    protected $imageError;
    protected $cant_edit;

    public function __construct()
    {
        $this->success_rep = ucfirst($this->dynamicParam['name']);
        $this->cant_edit = ucfirst($this->dynamicParam['cant']);
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
        $school = $this->school_id;
        return inertia($route,
            [
                'dynamicParam' => $this->dynamicParam,
                'school' => $school,

            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required',
            'item_id' => 'required',
            'serial_number' => 'required',
            'quantity' => 'required',
        ], $this->imageError);


        $data = $request->all();
        $data['school_id'] = $this->school_id;
        $item_id = $data['item_id'];
        $qty = $data['quantity'];
        $items = Item::where('id', $item_id)->first();
        $total_qty = $items->quantity;

        if ($qty > $total_qty) {
            return redirect()->back()->withErrors(['quantity' => 'The quantity should not exceed the available items in stock.']);
        }

        unset($data['serial_number']);
        Gatepass::create($data);
        $new_qty = $total_qty - $qty;

        // Update the item's quantity in the database
        $items->quantity = $new_qty;
        $items->save();

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(Gatepass $gatepass)
    {
        return to_route($this->index_route)->with('success', $this->cant_edit);

    }

    public function update(Request $request, Gatepass $gatepass)
    {
        return to_route($this->index_route)->with('success', $this->cant_edit);
    }

    public function destroy(Gatepass $gatepass)
    {
        $item_id = $gatepass->item_id;
        $qty = $gatepass->quantity;
        $items = Item::where('id', $item_id)->first();
        $total_qty = $items->quantity;
        $new_qty = $total_qty + $qty;
        $items->quantity = $new_qty;
        $items->save();
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
