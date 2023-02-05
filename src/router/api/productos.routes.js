import Express  from "express";
import logger from "../../logs/logger.js";
import { faker } from '@faker-js/faker';
import * as ProductosController from '../../controller/productos.controller.js'

/* ------------------------ configuracion del routerProducts ------------------------ */
export const routerProducts = Express.Router();


faker.setLocale('es')
routerProducts.use(Express.json());
routerProducts.use(Express.urlencoded({extended: true}))

/* ------------------------------ GET: '/' ------------------------------ */
// Me permite listar todos los productos disponibles
/* -------------- (disponible para usuarios y administradores) -------------- */
routerProducts.get('/',ProductosController.getAllProductos)

/* ------------------------------ GET: '/:id?' ------------------------------ */
// Me permite listar todos los productos disponibles ó un producto por su id 
/* -------------- (disponible para usuarios y administradores) -------------- */
routerProducts.get('/:id',ProductosController.getProductoID)

/* -------------------------------- POST: '/' ------------------------------- */
/* ------------------ Para incorporar productos al listado ------------------ */
/* -------------------- (disponible para administradores) ------------------- */
routerProducts.post('/', ProductosController.addNewProduct )

/* ------------------------------- PUT: '/:id' ------------------------------ */
/* --------------------- Actualiza un producto por su id -------------------- */
/* -------------------- (disponible para administradores) ------------------- */
routerProducts.put('/:id', ProductosController.updateProduct)

/* ----------------------------- DELETE: '/:id' ----------------------------- */
/* ----------------------- Borra un producto por su id ---------------------- */
/* -------------------- (disponible para administradores) ------------------- */
routerProducts.delete('/:id',ProductosController.deleteProduct)