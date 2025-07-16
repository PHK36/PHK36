import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    document.getElementById("userUid").textContent = "UID: " + user.uid;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      document.getElementById("userBalance").textContent = "Balance: ₹" + (data.balance || 0);
    } else {
      document.getElementById("userBalance").textContent = "Balance: ₹0";
    }

  } else {
    window.location.href = "login.html";
  }
});

window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}