import { productsModel } from '../models/productsModel.js'

class ProductManager {

    async create(title, description, price, code, category, stock, thumbnail) {
        const producto = await productsModel.create({
            title,
            description,
            price,
            code,
            status: true,
            category,
            stock,
            thumbnail: [thumbnail],
        })
        return producto
    }


    async getAll(limit) {
        let products
        if (limit) {
            products = await productsModel.find().limit(limit).lean()
        }
        else {
            products = await productsModel.find().lean()
        }
        return products
    }

    async delete(id) {
        await productsModel.findByIdAndDelete(id)
        return this.getAll()
    }

    async findById(id) {
        try{
            const product = await productsModel.findById(id)
            return product
        }
        catch(error){
            return(`Producto con ID:${id} no encontrado`)
        }
    }

    async updateProduct(id, updateFields) {
        const fields = Object.keys(updateFields)
        fields.forEach(element => {
            if (element !== "title" && element !== "description" && element !== "price" && element !== "code" && element !== "category" && element !== "stock") {
                console.log(`${element} no es un campo valido por lo tanto no se actualizará`)
            }
        });
        try {
            await productsModel.findOneAndUpdate({ _id: id }, updateFields)

        }
        catch (error) {
            console.log(`se ha producido el siguiente error al intentar modificar el campo: ${error}`)
        }
        return this.findById(id)
    }
}
export default ProductManager
