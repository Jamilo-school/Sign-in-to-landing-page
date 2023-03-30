const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const validCredentials = [
  { username: "oduor", password: "01" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
  { username: "calvin@ictjamilo", password: "02" },
];

const loginForm = document.querySelector(".sign-in-form");
const usernameInput = loginForm.querySelector("input[type='text']");
const passwordInput = loginForm.querySelector("input[type='password']");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const isValidCredential = validCredentials.some(
    (credential) =>
      credential.username === username && credential.password === password
  );

  if (isValidCredential) {
    window.location.href = "https://jamilo-school.github.io/Academicsnew/";
  } else {
    alert("🎯Access denied you are trying to use anauthorized credentials.Please check and try again or contact the I.C.T department for validation");
  }
});
