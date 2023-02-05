import {createTransport} from "nodemailer";
import { envConfig } from "../config/envConfig.js";

//Credenciales
export const emailAdmin = envConfig.ADMIN_EMAIL
const emailAdminPass = envConfig.ADMIN_EMAIL_PASS

// Config nodemailer
export const transporterEmail = createTransport({
    host:"smtp.gmail.com",
    puerto: 587,
    auth:{
        type: "register",
        user:emailAdmin,
        pass:emailAdminPass
    },
    secure: false, //cambiar a true en deploy
    tls:{
        rejectUnauthorized:false
    }
})