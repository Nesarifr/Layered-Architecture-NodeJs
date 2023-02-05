import { MongoContainer } from "../../manager/mongo.manager.js";
import logger from "../../../logs/logger.js";


//crear una subclases de productos que trabaje con el contendor Archivos
class CarritoDaoMongo extends MongoContainer{
    constructor(model){
        //ejecutamos el contructor de clase ContenedorArchivo
        super(model);
    
    }
    async save(element){
        try {
            if(element.userID){
                let result = await this.model.findOne({userID: element.userID})
                if(result){
                    await this.model.updateOne({userID: element.userID}, {productos: element.productos})
                }else {
                    await this.model.create(element)
                }
                return element.userID
            }
            
        } catch (error) {
            return {message: `Ocurrio un error al intentar guardar el nuevo objeto ${element.id}  : ` + error}
        }
    }

    async actualizaByID(userMail , actualizacion){
        try {
            let result = await  this.model.find({userID: userMail})
            if(result){
                let elementUpdated = await this.model.updateOne({userID: userMail}, actualizacion)
                return elementUpdated
            } else {
                await this.save(actualizacion)
            }
        } catch (error) {
            console.log(error);
            return {msj: error}
        }
    }

    async getById(userMail){
        try {
            let result = await  this.model.find({userID: userMail})
            if(result){
                return result
            } return null
        } catch (error) {
            console.log(error);
            return {msj: error}
        }
        
    }
        async deletedById(userMail){
        try {
            let result = await this.model.deleteMany({userID: userMail});
            return result
        } catch (error) {
            console.log(error);
            return {msj: error}
        }
    }

}

export {CarritoDaoMongo}