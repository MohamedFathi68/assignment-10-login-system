let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
const userData = [];
export { userData };

const signUpButton = document.getElementById("signUpBtn");

// signUpButton.addEventListener("click", function () {
//   let alertMessage = document.querySelector("#alert");
//   if (validate()) {
//     let user = {
//       userName: signupName.value,
//       userEmail: signupEmail.value,
//       userPassword: signupPassword.value,
//     };
//     userData.push(user);
//     localStorage.setItem("userData", JSON.stringify(userData));
//     clearForm();
//     redirectTologin();
//     console.log(5);
//   } else {
//     alertMessage.classList.replace("d-none", "d-block");
//     console.log(2);
//   }
// });

function clearForm() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
}

function redirectTologin() {
  window.location = "../index.html";
}

function validate() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(signupEmail.value);
}
