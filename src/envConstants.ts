import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const PROJECT_ID = process.env.PROJECT_ID;
const STORAGE_BUCKET = process.env.STORAGE_BUCKET;
const MESSEGING_SENDER_ID = process.env.MESSEGING_SENDER_ID;
const APP_ID = process.env.APP_ID;

export { PORT, API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSEGING_SENDER_ID, APP_ID };
