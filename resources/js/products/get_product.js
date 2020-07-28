class GetProduct {
    handleShowListProducts() {
        let url = '/api/get-products'

        $.ajax({
            type: 'get',
            url : url,
            data: ''
        }).then(function (res) {
            $('.table-body').append(res)
        })
    }
}

export default new GetProduct()
