const form = document.getElementById('auth-form');
const toggleForm = document.getElementById('toggle-form');
const title = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const togglePass = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const forgotPass = document.getElementById('forgot-password');

let isLogin = true;

toggleForm.onclick = () => {
  isLogin = !isLogin;
  title.innerText = isLogin ? "Login" : "Register";
  submitBtn.innerText = isLogin ? "Login" : "Register";
  toggleForm.innerText = isLogin ? "Register" : "Login";
};

togglePass.onclick = () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
};

form.onsubmit = async (e) => {
  e.preventDefault();
  const mobile = document.getElementById('mobile').value + "@phk36.com";
  const password = document.getElementById('password').value;

  try {
    if (isLogin) {
      await firebase.auth().signInWithEmailAndPassword(mobile, password);
      alert("Logged in successfully");
      window.location.href = "home.html"; // Replace with your game dashboard
    } else {
      await firebase.auth().createUserWithEmailAndPassword(mobile, password);
      alert("Registered successfully");
    }
  } catch (error) {
    alert(error.message);
  }
};

forgotPass.onclick = () => {
  const mobile = document.getElementById('mobile').value + "@phk36.com";
  firebase.auth().sendPasswordResetEmail(mobile)
    .then(() => alert("Reset email sent"))
    .catch(err => alert(err.message));
};