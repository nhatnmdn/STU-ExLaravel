@extends('layouts.master')
@section('title', 'Create Product')
@section('content')
    <div class="mt-5 ml-5">
        <a href="{{route('product.index')}}">
            <button class="btn btn-primary">Index</button>
        </a>
    </div>
    <div class="test">
    </div>
    <form action="#" method="post" class="form mt-5" role="form">
        <h1 style="text-align: center">Create Product</h1>
        <div class="form-group row ">
            <div class="col-xs-3 col-md-3">
                <label for="" class="float-md-right mt-2">Title: </label>
            </div>
            <div class="col-xs-7 col-md-7">
                <input type="text" class="form-control" name="title" value="">
                <i class="title-messages"></i>
            </div>
        </div>
        <div class="form-group row ">
            <div class="col-xs-3 col-md-3">
                <label for="" class="float-md-right mt-2">Description: </label>
            </div>
            <div class="col-xs-7 col-md-7">
                <input type="text" class="form-control" name="description" value="">
                <i class="description-messages"></i>
            </div>
        </div>
        <div class="form-group row ">
            <div class="col-xs-3 col-md-3">
                <label for="" class="float-md-right mt-2">Price: </label>
            </div>
            <div class="col-xs-7 col-md-7">
                <input type="text" class="form-control" name="price" value="">
                <i class="price-messages"></i>
            </div>
        </div>
        <button type="button" class="btn btn-lg btn-success btn-block col-md-3 container btn-submit" data-csrf-token="{{csrf_token()}}" value="">Create</button>
    </form>
    <script src="{{mix('js/products/store.js')}}"></script>
@endsection
