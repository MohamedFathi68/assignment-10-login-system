// user sign up section
let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");

let userData = [];

function userSignup() {
  if (isEmpty()) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
  } else {
    if (isEmailExist()) {
      document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    } else {
      if (validate()) {
        let user = {
          userName: signupName.value,
          userEmail: signupEmail.value,
          userPassword: signupPassword.value,
        };
        userData.push(user);
        localStorage.setItem("userData", JSON.stringify(userData));
        redirectTologin();
      } else {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">enter a valid email address</span>'
      }
    }
  }
}

let signupButton = document.querySelector(".signup-btn");

function redirectTologin() {
  location.href = "/index.html";
}

function validate() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(signupEmail.value);
}

function isEmpty() {
  if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
    return true;
  } else {
    return false;
  }
}

function isEmailExist() {
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].email == signupEmail.value) {
      return true;
    } else {
      return false;
    }
  }
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
    let email = userData[i].userEmail;
    let pass = userData[i].userPassword;
    console.log(email, pass);
    if (email === loginEmail && pass === loginPassword) {
      localStorage.setItem("sessionName", JSON.stringify(userData[i].userName));
      redirectToHome();
    } else {
      document.getElementById("incorrect").innerText =
        "incorrect email or password";
      console.log(i);
    }
  }
  function redirectToHome() {
    location.href = "/home/home.html";
  }
}
let loginButton = document.querySelector(".login-btn");
loginButton.addEventListener("click", login);

let sessionUser = JSON.parse(localStorage.getItem("sessionName"));
// document.querySelector(".session-name").innerHTML += sessionUser;
