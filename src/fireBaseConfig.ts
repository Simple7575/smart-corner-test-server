import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// prettier-ignore
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSEGING_SENDER_ID, APP_ID } from "./envConstants.js";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSEGING_SENDER_ID,
    appId: APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
