@foreach($products as $key => $item)
    <tr>
        <td>{{$item->id}}</td>
        <td>{{$item->title}}</td>
        <td>{{$item->descripttion}}</td>
        <td>{{$item->price}}</td>
        <td>{{$item->created_at}}</td>
        <td><a class="btn btn-primary" href="{{route('product.show', $item->id)}}">Detail</a></td>
        <td><a class="btn btn-success" href="{{route('product.edit', $item->id)}}">Edit</a></td>
        <td>
            <button class="btn btn-danger btn-submit" data-product-id="{{$item->id}}" data-csrf-token="{{csrf_token()}}">Delete</button>
        </td>
    </tr>
@endforeach

<script src="{{mix('js/products/delete.js')}}"></script>

