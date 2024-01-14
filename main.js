import { userData } from "/signup/signup.js";

let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");

if (localStorage.getItem("userData") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userData"));
}

let loginEmail = signinEmail.value;
let loginPassword = signinPassword.value;

let loginButton = document.querySelector(".login-btn");
loginButton.addEventListener("click", function () {
  for (let i = 0; i < userData.length; i++) {
    if (
      userData[i].userEmail === loginEmail &&
      userData[i].userPassword === loginPassword
    ) {
      localStorage.setItem("sessionName", JSON.stringify(userData[i].userName));
      redirectToHome();
    } else {
      document.getElementById("incorrect").innerHTML =
        '<span class="p-2 text-danger">incorrect email or password</span>';
    }
  }
  function redirectToHome() {
    window.location = "/home/index.html";
  }
});
