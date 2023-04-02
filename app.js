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
  { username: "oduor", password: "01", name: "John Oduor", subjects: ["Mathematics", "Science"] },
  { username: "user2", password: "password2", name: "Jane Doe", subjects: ["English", "History"] },
  { username: "user3", password: "password3", name: "David Smith", subjects: ["Geography", "Physics"] },
  { username: "calvin@ictjamilo", password: "02", name: "Calvin Muthoni", subjects: ["Biology", "Chemistry"] },
];

const loginForm = document.querySelector(".sign-in-form");
const usernameInput = loginForm.querySelector("input[type='text']");
const passwordInput = loginForm.querySelector("input[type='password']");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const isValidCredential = validCredentials.find(
    (credential) => credential.username === username && credential.password === password
  );

  if (isValidCredential) {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString();
    const currentTime = currentDate.toLocaleTimeString();
    const name = isValidCredential.name;
    const subjects = isValidCredential.subjects.join(", ");

    const greeting = `Date${currentDay},current time is ${currentTime}. User${name}! Teacher of ${subjects}.`;
    alert(greeting);

    window.location.href = "https://jamilo-school.github.io/Academicsnew/";
  } else {
    alert("🎯Access denied you are trying to use unauthorized credentials. Please check and try again or contact the I.C.T department for validation.");
  }
});
