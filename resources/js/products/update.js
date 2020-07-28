class Update {
    constructor() {
        let thisClass = this
        $(document).ready(function () {
            thisClass.config()
            thisClass.listen()
        })
    }

    config() {
        this.elements = {
            inputTitle         : $("input:text[name=title]"),
            inputDescription   : $("input:text[name=description]"),
            inputPrice         : $("input:text[name=price]"),
            btnSubmit          : $(".btn-submit"),
            titleMessages      : $('.title-messages'),
            descriptionMessages: $('.description-messages'),
            priceMessages      : $('.price-messages')
        }
    }

    listen() {
        this.handleUpdateProduct()
    }

    handleUpdateProduct() {
        let title               = this.elements.inputTitle
        let description         = this.elements.inputDescription
        let price               = this.elements.inputPrice
        let btnSubmit           = this.elements.btnSubmit
        let titleMessages       = this.elements.titleMessages
        let descriptionMessages = this.elements.descriptionMessages
        let priceMessages       = this.elements.priceMessages

        btnSubmit.click(function () {
            let productId = $(this).data('productId')
            let url       = `/api/update/${productId}`
            let csrfToken = btnSubmit.data('csrfToken')

            titleMessages.text('')
            descriptionMessages.text('')
            priceMessages.text('')

            $.ajax({
                type: 'PUT',
                url : url,
                data: {
                    '_token'     : csrfToken,
                    'title'      : title.val(),
                    'description': description.val(),
                    'price'      : price.val()
                }
            }).then(function (res) {
                if (res[0] != 0) {
                    alert(res[1])
                    location.href = '/'
                } else {
                    _.forEach(res[1], function (value, key) {
                        if (key == 'title') {
                            titleMessages.text(value).css('color', 'red')
                        }
                        if (key == 'description') {
                            descriptionMessages.text(value).css('color', 'red')
                        }
                        if (key == 'price') {
                            priceMessages.text(value).css('color', 'red')
                        }
                    })
                }
            })
        })
    }
}

export default new Update()

