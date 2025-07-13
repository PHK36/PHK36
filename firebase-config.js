// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8Y4Qem3HHW-MFOhV-ev1A3787-nRygpk",
  authDomain: "phk36-6cbf9.firebaseapp.com",
  projectId: "phk36-6cbf9",
  storageBucket: "phk36-6cbf9.appspot.com",
  messagingSenderId: "538514333070",
  appId: "1:538514333070:web:1c3c4fbcfb8f5cd6bf98df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
