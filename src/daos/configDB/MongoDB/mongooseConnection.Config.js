import mongoose from "mongoose";
import { envConfig } from "../../../config/envConfig.js";
import logger from "../../../logs/logger.js";

mongoose.set('strictQuery', false);

//conectamos a la base de datos
const connection= async function(URL){
    try {
        mongoose.connect(URL, {useNewUrlParser: true,useUnifiedTopology: true}, 
            error=>{
                if(error) throw new Error(`Conexion fallida ${error}`);
                logger.info("Conexion base de datos exitosa!")
            })
    } catch (error) {
        logger.error("Sucedio un errror al intentar conectar con la base de datos de Mongo: " + error)
    }
}



export {connection}