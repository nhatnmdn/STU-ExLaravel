import GetProduct from './get_product'

class Delete {
    constructor() {
        let thisClass = this
        $(document).ready(function () {
            thisClass.config()
            thisClass.listen()
        })
    }

    config() {
        this.elements = {
            btnSubmit: $(".btn-submit"),
            tableBody: $('.table-body')
        }
    }

    listen() {
        this.handleDeleteProduct()
    }

    handleDeleteProduct() {
        let btnSubmit = this.elements.btnSubmit

        btnSubmit.click(function () {
            if (confirm("Do you really want to Delete?")) {
                let productId = $(this).data('productId')
                let url       = `/api/delete/${productId}`
                let csrfToken = btnSubmit.data('csrfToken')

                $.ajax({
                    type: 'DELETE',
                    url : url,
                    data: {
                        '_token': csrfToken
                    }
                }).then(function (res) {
                    alert(res)
                    $('.table-body').html("")
                    GetProduct.handleShowListProducts()
                })
            }
        })
    }
}

export default new Delete()
