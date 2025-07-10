// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8Y4Qem3HHW-MFOhV-ev1A3787-nRygpk",
  authDomain: "phk36-6cbf9.firebaseapp.com",
  projectId: "phk36-6cbf9",
  storageBucket: "phk36-6cbf9.appspot.com",
  messagingSenderId: "538514333070",
  appId: "1:538514333070:web:ad59927d9a1db39abf98df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
