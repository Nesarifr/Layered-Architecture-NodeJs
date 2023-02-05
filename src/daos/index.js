import { connection } from "../daos/configDB/MongoDB/mongooseConnection.Config.js";
import { envConfig } from "../config/envConfig.js";

let ContenedorDaoProductos;
let ContenedorDaoCarritos;

//identificador
let databaseType = "mongo";

switch(databaseType){
    // case "archivos":
    //     const {ProductsDaoArchivos} = await import("./productos/productDaoArchivo.js");
    //     const {CartsDaoArchivos} = await import("./carritos/carritoDaoArchivo.js");
    //     ContenedorDaoProductos = new ProductsDaoArchivos("productos");
    //     ContenedorDaoCarritos = new CartsDaoArchivos("carrito");
    //     break;
    // case "sql":
    //     const {ProductsDaoSql} = await import("./productos/productDaoSql.js");
    //     const {CarritoDaoSql} = await import("./carritos/carritoDaoSql.js");
    //     ContenedorDaoProductos = new ProductsDaoSql(optionsSqliteDB, "productos");
    //     ContenedorDaoCarritos = new CarritoDaoSql(optionsSqliteDB,"carrito");
        // break;
    case "mongo":
        const {ProductsDaoMongo} = await import("./repository/productos/productDaoMongo.js");
        const {CarritoDaoMongo} = await import("./repository/carrito/carritoDaoMongo.js");
        const {ProductModel} = await import( "./configDB/MongoDB/model/products.models.js")
        const {carritoModel}= await import( "./configDB/MongoDB/model/carritos.models.js")

        await connection(envConfig.MONGOURLBD)
        ContenedorDaoProductos = new ProductsDaoMongo(ProductModel);
        ContenedorDaoCarritos = new CarritoDaoMongo(carritoModel);
        break;
    // case "firebase":
    //     const {ProductsDaoFirebase} = await import("./productos/productDaoFirebase.js");
    //     const {CarritoDaoFirebase} = await import("./carritos/carritoDaoFirebase.js");
    //     ContenedorDaoProductos = new ProductsDaoFirebase("productos");
    //     ContenedorDaoCarritos = new CarritoDaoFirebase("carritos");
    //     break;
}

export {ContenedorDaoProductos,ContenedorDaoCarritos}