import logger from "../logs/logger.js";

export const getHomeController = async (req, res)=>{
        try{
            let user;
            if(req.isAuthenticated()){
                user=req.session.username
            } else {
                user = "Visita"
            }
            return res.redirect('api/productos')
            }
        catch(error){
            logger.error("error en la pagina principal "+ error)
            res.status(500).send('Error en el servidor')
        }
    }