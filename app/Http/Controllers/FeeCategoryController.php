<?php

namespace App\Http\Controllers;


use App\Http\Resources\FeeCategoryResource;
use App\Models\FeeCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FeeCategoryController extends Controller
{
    protected $dynamicParam = [
        'name' => 'feeCategory'
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
        $query = FeeCategory::query();

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
                'receivedItem' => FeeCategoryResource::collection($recivedItem),
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
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500', // Validate image type and size

        ], $this->imageError);


        $data = $request->all();

        $data['school_id'] = $this->school_id;
        $image = $data['image'] ?? null;
        if ($image) {
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();

            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        FeeCategory::create($data);

        $success = " $this->success_rep  was created";

        return to_route($this->index_route)->with('success', $success);
    }

    public function edit(FeeCategory $feeCategory)
    {
        $category = $feeCategory;
        $get_item = new FeeCategoryResource($category);
        $data = $get_item->toArray(request());
        $route = $this->success_rep . '/Edit';

        return inertia($route, [
                'item' => $data,
                'dynamicParam' => $this->dynamicParam
            ]
        );
    }

    public function update(Request $request, FeeCategory $feeCategory)
    {
        $category = $feeCategory;
        $request->validate([
            'name' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:300|dimensions:max_width=500,max_height=500'

        ], $this->imageError);
        $data = $request->all();

        $image = $data['image'] ?? null;
        if ($image) {
            if ($category->image) {
                Storage::disk('public')->delete($category->image);
            }
            $filename = Str::random() . '.' . $image->getClientOriginalExtension();
            $data['image'] = $image->storeAs($this->dynamicParam['name'], $filename, 'public');
        }
        $category->update($data);
        $success = " $this->success_rep  was updated";
        return to_route($this->index_route)->with('success', $success);
    }

    public function destroy(FeeCategory $feeCategory)
    {
        $category = $feeCategory;
        if ($category->image) {
            Storage::disk('public')->delete($category->image);
        }
        $category->delete();
        $success = " $this->success_rep  was Deleted";
        return to_route($this->index_route)->with('success', $success);
    }

    public function show(FeeCategory $feeCategory)
    {
        $data = new FeeCategoryResource($feeCategory);
        $route = $this->success_rep . '/Show';
        return inertia($route, [
            'item' => $data,
            'dynamicParam' => $this->dynamicParam
        ]);
    }
}
