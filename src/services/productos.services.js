import { ContenedorDaoProductos } from "../daos/index.js";
import logger from "../logs/logger.js";


export const getProductos = async()=>{
    logger.info("Se pide lista completa de productos")
    return ContenedorDaoProductos.getAll()
}

export const getProductosID = async(id)=>{
    const existeProducto = await ContenedorDaoProductos.getById(id)
        if(existeProducto.length){
            logger.info("Se busca el producto por ID: " +id)
            return existeProducto
        } else return res.json({error: 'No existe el producto solicitado'})
}

export const addNewProduct = async(producto)=>{
    const nuevoId = await ContenedorDaoProductos.save(producto)
        logger.info(`Se crea un nuevo producto con id: ${nuevoId} llamado: ${producto.title}`);
        return res.json({
            id: nuevoId,
            nuevoProducto: loadProduct
        })
}

export const updateNewProduct = async(producto, id)=>{
    const actualizacion = await ContenedorDaoProductos.updateById( producto, parseInt(id))
        if(actualizacion){
            logger.info(`Se actualizo el elemento: ` + await ContenedorDaoProductos.getById(id));
            return ({message: "Se actualizo el elemento solicitado con id:"+id})
        } else return ({error: "No se pudo actualizar el producto solicitado"})
}

export const deleteProduct = async(id)=>{
    const productoID=await ContenedorDaoProductos.getById(id)
        if(productoID.length){ //getById devuelve null en caso de que no exita el elemento con ID
            await ContenedorDaoProductos.deletedById(parseInt(id))
            logger.info(`Se borra el elemento con id : ${id}`);
            return ({message: "Producto eliminado"})
        } else {
            return ({error: "El producto no existe"})
        }
}