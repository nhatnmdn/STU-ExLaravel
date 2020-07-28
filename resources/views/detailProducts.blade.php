@extends('layouts.master')
@section('title','Product Information')
@section('content')
<div class="mt-5 ml-5">
    <a href="{{route('product.index')}}">
        <button class="btn btn-primary">Index</button>
    </a>
</div>
<table class="table table-striped">
    <h1 style="text-align: center">Product Information</h1>
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Create_at</th>
    </tr>
    <tbody class="table-body">
    @if (isset($product))
            <tr>
                <td>{{$product->id}}</td>
                <td>{{$product->title}}</td>
                <td>{{$product->description}}</td>
                <td>{{$product->price}}</td>
                <td>{{$product->created_at}}</td>
            </tr>
    @endif
    </tbody>
</table>
@endsection
