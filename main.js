// user sign up section
let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");

let userData = [];

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
    redirectTologin();
  } else {
    alertMessage.classList.replace("d-none", "d-block");
  }
}

let signupButton = document.querySelector(".signup-btn");

function clearForm() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
}

function redirectTologin() {
  location.href = "/index.html";
}

function validate() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(signupEmail.value);
}

// user log in section

let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");

if (localStorage.getItem("userData") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userData"));
}

let loginEmail = signinEmail.value;
let loginPassword = signinPassword.value;

let sessionName = [];

function login() {
  for (let i = 0; i < userData.length; i++) {
    if (
      userData[i].userEmail.match(loginEmail.toLowerCase()) &&
      userData[i].userPassword.match(loginPassword.toLowerCase())
    ) {
      localStorage.setItem("sessionName", JSON.stringify(userData[i].userName));
      
      redirectToHome();
    } else {
      document.getElementById("incorrect").innerHTML =
        '<span class="p-2 text-danger">incorrect email or password</span>';
    }
  }
  function redirectToHome() {
    location.href = "/home.html";
  }
}
let n = JSON.parse(localStorage.getItem("sessionName"))
console.log(n);
// document.querySelector(".session-name").innerHTML = ;

let loginButton = document.querySelector(".login-btn");
loginButton.addEventListener("click", login);

console.log(localStorage.getItem("sessionName"));
