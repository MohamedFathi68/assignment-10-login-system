// ==================== user sign up section ====================
let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");

let userData = [];

function userSignup() {
  if (isEmpty()) {
    document.getElementById("exist").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
  } else {
    if (isEmailExist()) {
      document.getElementById("exist").innerHTML =
        '<span class="text-danger m-3">Email address already exists</span>';
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
        document.getElementById("exist").innerHTML =
          '<span class="text-danger m-3">Enter a valid email address</span>';
      }
    }
  }
}

let signupButton = document.querySelector(".signup-btn");

function redirectTologin() {
  location.href = "../index.html";
}

function validate() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(signupEmail.value);
}

function isEmpty() {
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}

function isEmailExist() {
  for (var i = 0; i < userData.length; i++) {
    if (
      userData[i].userEmail.toLowerCase() === signupEmail.value.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}

// ==================== user log in section ====================

let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");

if (localStorage.getItem("userData") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userData"));
}

let sessionName = [];

function login() {
  if (isLoginEmpty()) {
    document.getElementById("incorrect").innerHTML =
      '<span class="text-danger m-3">All inputs are required</span>';
  } else {
    let foundUser = null;

    for (let i = 0; i < userData.length; i++) {
      let user = userData[i];
      if (
        user.userEmail === signinEmail.value &&
        user.userPassword === signinPassword.value
      ) {
        foundUser = true;
        localStorage.setItem(
          "sessionName",
          JSON.stringify(userData[i].userName)
        );
        break; // Exit the loop once a match is found
      } else {
        foundUser = false;
      }
    }
    console.log(foundUser);
    if (foundUser == true) {
      redirectToHome();
    } else {
      document.getElementById("incorrect").innerText =
        "Incorrect email or password";
    }
  }
}

function isLoginEmpty() {
  if (signinEmail.value == "" || signinPassword.value == "") {
    return true;
  } else {
    return false;
  }
}

function redirectToHome() {
  location.href = "./home/index.html";
}

let sessionUser = JSON.parse(localStorage.getItem("sessionName"));
document.getElementById("name").innerHTML += sessionUser;

function logout() {
  localStorage.removeItem("sessionName");
  location.href = "../index.html";
}
