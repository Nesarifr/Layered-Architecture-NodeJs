import * as ProductosService from '../services/productos.services.js'
import parsedArgs from "minimist";
import cluster from  "cluster"
import logger from "../logs/logger.js";

const numeroCPUs = 4 // pruebo con un maximo de 4 cpu
const modoCluster = process.argv[5] == "CLUSTER"


export const getAllProductos =  async (req, res)=>{
    try{
        let listProducts;
        logger.info("se llega al router")
        if(modoCluster){
            logger.info("Se hacen pruebas en modo cluster")
            if(cluster.isPrimary){
                // logger.info(" es primary")
                //crear los subproceso del cluster
                if(cluster.workers.length<=numeroCPUs){
                    cluster.fork()
                }
                listProducts = await ProductosService.getProductos()

                cluster.on("exit",(worker,error)=>{
                    //detectamos que algun subproceso falla
                    console.log(`El subproceso ${worker.process.pid} dejo de funcionar`);
                    cluster.fork();//creamos un nuevo subproceso que remplaza al que fallo
                });
            } else {
                listProducts = await ProductosService.getProductos()
            }
            return res.json(listProducts)
        } else {

            logger.info("Se pide lista completa de productos" )
            listProducts = await ProductosService.getProductos()
            // const listProducts = JSON.stringify(await ContenedorDaoProductos.getAll())
            // return res.render('home', {productos: JSON.parse(listProducts), user: "Visita"}) para handlebars
            return res.json(listProducts)
        }
    }
    catch(error){
        logger.error("error en productos get "+ error)
        res.status(500).send('Error en el servidor')
    }
}

export const getProductoID = async (req, res)=>{
    try{
        const {id} = req.params
        const producto = await ProductosService.getProductosID(id)
        return res.json(producto)
    }
    catch(error){
        logger.error("Error en productos get id "+ error)
        res.status(500).send('Error en el servidor')
    }
}

export const addNewProduct = async (req, res)=> {
    try{
        const loadProduct = req.body
        return await ProductosService.addNewProduct(loadProduct)
    }catch(error){
        logger.error("Error: " + error)
        res.status(500).send('Error en el servidor' + error)
    }    
}

export const updateProduct =  async (req, res)=>{
    try{
        const {id} = req.params
        const upDate = req.body
        return await ProductosService.updateNewProduct(upDate, id)
    }
    catch(error){
        logger.error("Error: " + error)
        res.status(500).send('Error en el servidor')
    }
}

export const deleteProduct = async (req, res)=>{
    try{
        const {id} = req.params
        return await ProductosService.deleteProduct(id)
    }
    catch(error){
        logger.error("Error: " + error)
        res.status(500).send('Error en el servidor')
    }
    
}