import { cartsModel } from '../models/cartsModel.js'

class CartManager {
    async addCart() {
        const cart = await cartsModel.create({
            products: []
        })
        return cart
    }

    async getCarts() {
        const carts = await cartsModel.find().lean()
        return carts
    }

    async findCartById(id) {
        const cart = await cartsModel.findById(id)
        return cart
    }

    async addProductsToCart(cartId, productId, quantity) {
        try {
            let cart = await this.findCartById(cartId)
            const productIndex = cart.products.findIndex((p) => p.productId === productId)
            if (productIndex !== -1) {
                cart.products[productIndex].quantity += 1
            }
            else {
                cart.products.push({ "productId": productId, "quantity": quantity })
            }
            await cart.save()
            return cart
        }
        catch (error) {
            return error
        }
    }
}

export default CartManager
