<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ItemResource;
use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ItemController extends Controller
{
    protected $dynamicParam = [
        'name' => 'item'
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

        $query = Item::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }


        $recivedItem = $query->where("school_id", $this->school_id)->orderBy($sortField, $sortDirection)->paginate(50)
            ->onEachSide(1);
        $route = $this->success_rep . '/Index';
        return inertia($route,
            [
                'receivedItem' => ItemResource::collection($recivedItem),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
            ]
        );

    }

    public function create()
    {
        $route = $this->success_rep . '/Create';
        $category = Category::where('school_id', $this->school_id)->get(['id', 'name']);
        return inertia($route,
            [
                'dynamicParam' => $this->dynamicParam,
                'categories' => $category
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'serial_number' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500', // Validate image type and size

        ], $this->imageError);


        $data = $request->all();
        $data['category_id'] = $data['category'];
        unset($data['category']);
        $data['school_id'] = $this->school_id;
        $image = $data['image'] ?? null;
        if ($image) {
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();

            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        Item::create($data);

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(Item $item)
    {

        $get_item = new ItemResource($item);
        $data = $get_item->toArray(request());
        $category = Category::where('school_id', $this->school_id)->get(['id', 'name']);
        $route = $this->success_rep . '/Edit';

        return inertia($route, [
                'item' => $data,
                'dynamicParam' => $this->dynamicParam,
                'categories' => $category
            ]
        );
    }

    public function update(Request $request, Item $item)
    {
        $request->validate([
            'name' => 'required',
            'serial_number' => 'required',
            'category_id' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500'

        ], $this->imageError);
        $data = $request->all();

        $image = $data['image'] ?? null;
        if ($image) {
            if ($item->image) {
                Storage::disk('public')->delete($item->image);
            }
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();
            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        $item->update($data);
        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }

    public function destroy(Item $item)
    {
        if ($item->image) {
            Storage::disk('public')->delete($item->image);
        }
        $item->delete();
        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }

    public function show(Item $item)
    {
        $data = new ItemResource($item);
        $route = $this->success_rep . '/Show';
        return inertia($route, [
            'item' => $data,
            'dynamicParam' => $this->dynamicParam
        ]);
    }


    public function Categories(){
        $query = Category::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }


        $recivedItem = $query->where("school_id", $this->school_id)->where("module_type", 1)->orderBy($sortField, $sortDirection)->paginate(50)
            ->onEachSide(1);
        $route = $this->success_rep . '/Category';
        return inertia($route,
            [
                'receivedItem' => CategoryResource::collection($recivedItem),
                'dynamicParam' => $this->dynamicParam,
                'queryParams' => request()->query() ?: null,
                'success' => session('success'),
            ]
        );
    }

}
