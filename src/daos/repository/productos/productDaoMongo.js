import { MongoContainer } from "../../manager/mongo.manager.js";

//crear una subclases de productos que trabaje con el contendor Archivos
class ProductsDaoMongo extends MongoContainer{
    
    constructor(model ){
        //ejecutamos el contructor de clase ContenedorArchivo
        super(model);
        
    }
}

export {ProductsDaoMongo}