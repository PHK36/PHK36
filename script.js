import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA8Y4Qem3HHW-MFOhV-ev1A3787-nRygpk",
  authDomain: "phk36-6cbf9.firebaseapp.com",
  projectId: "phk36-6cbf9",
  storageBucket: "phk36-6cbf9.appspot.com",
  messagingSenderId: "538514333070",
  appId: "1:538514333070:web:1c3c4fbcfb8f5cd6bf98df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Registration logic
window.registerUser = function () {
  const phone = document.getElementById("regPhone").value;
  const password = document.getElementById("regPassword").value;

  const email = `${phone}@phk36.com`; // Use phone as email

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
      await setDoc(doc(db, "users", uid), {
        phone: phone,
        balance: 0,
        uid: uid
      });
      alert("Registration successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Login logic
window.loginUser = function () {
  const phone = document.getElementById("loginPhone").value;
  const password = document.getElementById("loginPassword").value;

  const email = `${phone}@phk36.com`;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Invalid phone or password");
    });
};
