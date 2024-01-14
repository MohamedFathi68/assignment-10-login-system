import { userData } from "./signup/signup.js";

let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");


if (localStorage.getItem("userData") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("x"));
}

let loginEmail = signinEmail.value;
let loginPassword = signinPassword.value;

let loginButton = document.querySelector(".login-btn");
loginButton.addEventListener("click", function () {
for (let index = 0; index < userData.length; index++) {
  const element = array[index];
  
}


  /*for (let i = 0; i < x.length; i++) {
    console.log("s");
    if ( x[i].userEmail == loginEmail && x[i].userPassword == loginPassword) {
      localStorage.setItem("sessionName", JSON.stringify(x[i].userName));
      redirectToHome();
      console.log("t");
    } else {
      document.getElementById("incorrect").innerText = "incorrect email or password";
      console.log("f");
    }
  }*/

  function redirectToHome() {
    window.location = "/home/index.html";
  }
});
