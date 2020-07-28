@extends('layouts.master')
@section('title', 'List Product')
@section('content')
<a class="btn btn-primary mt-3 mb-3 ml-3 " href="{{route('product.create')}}">Create</a>
<table class="table table-striped">
    <h1 style="text-align: center">List Products</h1>
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Create_at</th>
        <th colspan="3" style="text-align: center">Action</th>
    </tr>
    <tbody class="table-body">
        <!--Data append here-->
    </tbody>
</table>

    <script src="{{mix('js/products/list.js')}}"></script>
@endsection
