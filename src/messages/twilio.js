import twilio from "twilio";
import { envConfig } from "../config/envConfig.js";


const accountId = envConfig.ADMIN_ACCOUNTID;
const authtoken = envConfig.ADMIN_TOKEN;
export const twilioPhone = envConfig.ADMIN_PHONE_NUMBER;
export const twilioWapp = envConfig.TWILIO_WHATSAPP;
export const adminWapp = envConfig.ADMIN_WHATSAPP
export const twilioCliente = twilio(accountId,authtoken);