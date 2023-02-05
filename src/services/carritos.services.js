import {ContenedorDaoCarritos} from "../daos/index.js"
import logger from "../logs/logger.js";

export const getCarritoId = async (id)=> {
    try {
        const existeCarrito = await ContenedorDaoCarritos.getById(id)
        if(existeCarrito.length){
            logger.info("Se busca el carrito por ID: " +id)
            return existeCarrito
        } else {
            return {message: `No se encontro el objeto con el id : ${id} : ` + error}
        }
    } 
    catch (error) { 
        return {message: `Ocurrio un error en la busqueda del objeto con id : ${id} : ` + error}
    }
}

export const getAllCarritos = async ()=>{
    try {
        const objects = await ContenedorDaoCarritos.getAll()
        return objects;
    } catch (error) {
        return {message: `Ocurrio un error en la busqueda de todos los  objetos  : ` + error}
    }
}

export const addProductos = async (element)=>{
    try {
        const nuevoId = await ContenedorDaoCarritos.save(element)
        logger.info(`Se crea un nuevo carrito con id: ${nuevoId}`);
        return ({
            id: nuevoId,
            nuevoProducto: loadCarrito
        })
    } catch (error) {
        return {message: `Ocurrio un error al intentar guardar el nuevo objeto ${element.id}  : ` + error}
    }
}
export const updateById = async (body, id)=>{
    try {
        let elementUpdated = await this.model.updateOne({id: id}, body)
        return elementUpdated
    } catch (error) {
        return {message: `Ocurrio un error en la actualizacion de objeto con id ${id}  : ` + error}
    }
    
}
export const borrarCarrito = async (id) =>{
    try {
        const carritoId=await ContenedorDaoCarritos.getById(id)
        if(carritoId.length){ //getById devuelve null en caso de que no exita el elemento con ID
            await ContenedorDaoCarritos.deletedById(parseInt(id))
            logger.info(`Se borra el elemento con id : ${id}`);
            return ({message: "Carrito eliminado"})
        } else
            return ({error: "El carrito no existe"})
        }
    catch (error) {
        return {message: `Ocurrio un error al intentar borrar el objeto con id : ${id}  : ` + error}
    }
}
