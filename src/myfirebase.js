import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import config from "./config/firebaseConfig.json";

initializeApp(config);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
