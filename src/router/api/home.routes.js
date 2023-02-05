import Express  from "express";

import * as HomeController from '../../controller/home.controller.js'
import logger from "../../logs/logger.js";
/* ------------------------ configuracion del routerProducts ------------------------ */
export const routerHome = Express.Router();

routerHome.use(Express.json());
routerHome.use(Express.urlencoded({extended: true}))


/* ------------------------------ GET: '/' ------------------------------ */
// Me permite listar todos los productos disponibles
/* -------------- (disponible para usuarios y administradores) -------------- */
routerHome.get('/', HomeController.getHomeController)