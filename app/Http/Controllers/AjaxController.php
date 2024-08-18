<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class AjaxController extends Controller
{
    public function getItemsBySerialNumber(Request $request)
    {
        $searchValue = $request->query('serial_number');
        $items = Item::where('serial_number', 'LIKE', '%' . $searchValue . '%')
            ->orWhere('name', 'LIKE', '%' . $searchValue . '%')
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
}
