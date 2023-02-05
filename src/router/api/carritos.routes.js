import Express, { json }  from "express";
import logger from "../../logs/logger.js";
import { checkLogin } from "../middleware/checkLogin.js";
import { checkAdminRole } from "../middleware/checkRole.js";
import * as CarritoController from "../../controller/carritos.controller.js"


/* ------------------------ configuracion del routerCarrito ------------------------ */
export const routerCarrito = Express.Router();


routerCarrito.use(Express.json());
routerCarrito.use(Express.urlencoded({extended: true}))

/* ------------------------------ GET: '/' ------------------------------ */
// Me permite listar todos los carritos disponibles
/* -------------- (disponible para usuarios y administradores) -------------- */
routerCarrito.get('/', checkLogin, checkAdminRole , CarritoController.getCarritosController )

/* ------------------------------ GET: '/:id?' ------------------------------ */
// Me permite listar todos los carritos disponibles ó un carrito por su id 
/* -------------- (disponible para usuarios y administradores) -------------- */
routerCarrito.get('/:id',checkLogin, checkAdminRole, CarritoController.getCarritosControllerID)

/* -------------------------------- POST: '/' ------------------------------- */
/* ------------------ Para incorporar carritos al listado ------------------ */
/* --------------------  ------------------- */
routerCarrito.post('/', CarritoController.postCarritosController)

/* -------------------------------- POST: '/comprar' ------------------------------- */
/* ------------------ Para incorporar carritos al listado ------------------ */
/* --------------------  ------------------- */
routerCarrito.post('/comprar', CarritoController.postCarritosControllerComprar)

/* ----------------------------- DELETE: '/:id' ----------------------------- */
/* ----------------------- Borra un carrito por su id ---------------------- */
/* -------------------- (disponible para administradores) ------------------- */
routerCarrito.delete('/:id', CarritoController.deleteCarritosController )
