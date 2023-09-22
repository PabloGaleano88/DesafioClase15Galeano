import { Router } from "express";
import ProductManager from '../dao/MongoDB/ProductManager.js'
const productManager = new ProductManager()

const rtRouter = Router()


rtRouter.get('/', async (req, res) => {
    const products = await productManager.getAll()
    res.render('home',{products,style:'home.css'})
})

rtRouter.get('/realtimeproducts', async (req, res) => {
    res.render('realTimeProducts',{style:'realTimeProducts.css'})})
    
rtRouter.get('/chat',(req,res)=>{
    res.render('chat',{style:'chat.css'})
})



    export default rtRouter