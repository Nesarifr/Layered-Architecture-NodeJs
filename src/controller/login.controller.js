import logger from "../logs/logger.js";

export const logOut = async (req, res)=>{
    try{
        logger.info(req.sessionID)
        req.logout(err=>{
            if(err) return res.status(400).json({message:"hubo un error al cerrar sesion" + err})
        })

        return res.status(200).json({message:"Sesion cerrada!"})
    }
    catch(error){
        res.status(500).send('Error en el servidor')
    }
}