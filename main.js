let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");

let userData = [];

if (localStorage.getItem("userData") == null) {
  urlList = [];
} else {
  userData = JSON.parse(localStorage.getItem("userData"));
}

function userSignup() {
  let alertMessage = document.querySelector(".alert-msg");
  if (validate()) {
    let user = {
      userName: signupName.value,
      userEmail: signupEmail.value,
      userPassword: signupPassword.value,
    };
    userData.push(user);
    localStorage.setItem("userData", JSON.stringify(userData));
    clearForm();
  } else {
    alertMessage.classList.replace("d-none", "d-block");
  }
}

let button = document.querySelector(".btn.btn-outline-info");

button.addEventListener("click", userSignup);
button.addEventListener("click", redirect);

function clearForm() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
}

function redirect() {
  location.href = "/signin.html";
}

function validate() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(signupEmail.value);
}
