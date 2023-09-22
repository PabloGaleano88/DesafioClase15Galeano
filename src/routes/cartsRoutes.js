import { Router } from "express";

import CartManager from '../dao/MongoDB/CartManager.js'
const cartManager = new CartManager('./src/carts.json')

const cartRouter = Router()

cartRouter.post('/',async (req,res) => {
    const result = await cartManager.addCart()
    res.status(200).send(result)
})

cartRouter.get('/:cid', async (req, res) => {
    const cid = req.params.cid
    const cartById = await cartManager.findCartById(cid)
    res.status(200).send(cartById)
})

cartRouter.post('/:cid/product/:pid',async (req,res) => {
    const cid = req.params.cid
    const pid = req.params.pid
    const result = await cartManager.addProductsToCart(cid,pid,1)
    res.status(200).send(result)
})

export default cartRouter