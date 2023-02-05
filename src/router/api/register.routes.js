import Express  from "express";
import logger from "../../logs/logger.js";
import * as RegisterController from '../../controller/register.controller.js'

/* ------------------------ configuracion del routerProducts ------------------------ */
export const routerRegister = Express.Router();

routerRegister.use(Express.json());
routerRegister.use(Express.urlencoded({extended: true}))

routerRegister.post('/' , RegisterController.registrarUsuario)