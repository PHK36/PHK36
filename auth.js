import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  doc, setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function registerUser(email, password) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", res.user.uid), {
      email: email,
      balance: 20,
      uid: res.user.uid,
      createdAt: new Date()
    });
    alert("Registration successful! ₹20 bonus added.");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert("Registration failed: " + err.message);
  }
}

export async function loginUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (err) {
    alert("Login failed: " + err.message);
  }
}
