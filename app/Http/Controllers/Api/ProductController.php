<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ProductController extends Controller
{
    public function getList()
    {
        $products = Product::all();

        return response()->json(view('products', compact('products'))->render());
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'required|unique:products',
            'price'       => 'required|numeric',
            'description' => 'required',
        ]);

        if ($validator->passes()) {
            $params = $request->except('_token');

            Product::create($params);

            return response()->json([true, 'Added new records.']);
        }

        $messagesBag = $validator->getMessageBag()->toArray();

        return response()->json([false, $messagesBag]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title'       => ['required', Rule::unique('products')->ignore($id)],
            'price'       => 'required|numeric',
            'description' => 'required',
        ]);

        if ($validator->passes()) {
            $params = $request->except('_token');

            Product::find($id)->update($params);

            return response()->json([true, 'Update success.']);
        }

        $messagesBag = $validator->getMessageBag()->toArray();

        return response()->json([false, $messagesBag]);

    }

    public function delete($id)
    {
        Product::find($id)->delete();

        return response()->json('Delete success');
    }
}
