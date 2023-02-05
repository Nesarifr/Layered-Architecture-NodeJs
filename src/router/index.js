import express from "express"
import {routerProducts} from './api/productos.routes.js'
import {routerCarrito} from './api/carritos.routes.js'
import {routerLogin} from './api/login.routes.js'
import {routerRegister} from './api/register.routes.js'
import {routerHome} from './api/home.routes.js'
import logger from "../logs/logger.js"


const router = express.Router()

/* ------------------- rutas /api/productos ------------------- */
router.use('/', routerHome );
router.use('/api/productos', routerProducts );
router.use('/api/carrito', routerCarrito );
router.use('/api/login', routerLogin );
router.use('/api/register', routerRegister );

export {router as apiRouter}