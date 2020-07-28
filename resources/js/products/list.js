import GetProduct from './get_product'

class List {
    constructor() {
        let thisClass = this
        $(document).ready(function () {
            thisClass.listen()
        })
    }

    listen() {
        this.handleShowListProducts()
    }

    handleShowListProducts() {
        GetProduct.handleShowListProducts()
    }
}

export default new List()
