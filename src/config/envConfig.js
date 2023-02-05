import * as dotenv from "dotenv";
dotenv.config()

export const envConfig = {
    NODE_ENV:process.env.NODE_ENV || "dev",
    MONGOURLBD: process.env.MONGOURLBD,
    MONGOURLBD_PRODUCTS:process.env.MONGOURLBD_PRODUCTS,
    MONGOURLBD_CARRITOS:process.env.MONGOURLBD_CARRITOS,
    MONGOURLBD_AUTH:process.env.MONGOURLBD_AUTH,
    MONGOURL_SESSION: process.env.MONGOURL_SESSION,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_EMAIL_PASS: process.env.ADMIN_EMAIL_PASS,
    ADMIN_WHATSAPP: process.env.ADMIN_WHATSAPP,
    ADMIN_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
    ADMIN_ACCOUNTID: process.env.ADMIN_TWILIO_ACCOUNTID,
    ADMIN_TOKEN: process.env.ADMIN_TWILIO_AUTHTOKEN,
    TWILIO_WHATSAPP: process.env.TWILIO_WHATSAPP
};