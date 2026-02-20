
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgVEa2VCS_SQFmeeB7fhGit4l76VQ3cFU",
  authDomain: "fundora-eb9cb.firebaseapp.com",
  projectId: "fundora-eb9cb",
  storageBucket: "fundora-eb9cb.firebasestorage.app",
  messagingSenderId: "713698735404",
  appId: "1:713698735404:web:f8852f6ca21f627ce56889"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
