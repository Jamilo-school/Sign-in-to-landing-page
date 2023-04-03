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
  { username: "geofreyonyango167@gmail.com", password: "montanaio", name: "Mr Oduor", subjects: ["Mathematics", "Science"] },
  { username: "lencer07achieng@gmail.com", password: "233387882", name: "Madam Lencer Seje", subjects: ["English", "Mathematics"] },
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
    const currentDay = new Intl.DateTimeFormat('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}).format(currentDate);
    const currentTime = currentDate.toLocaleTimeString();
    const name = isValidCredential.name;
    const subjects = isValidCredential.subjects.join(", ");
    let location;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude.toFixed(2);
        const longitude = position.coords.longitude.toFixed(2);
        location = `Your current location is (${latitude}, ${longitude})`;
      });
    }

    const greeting = `${currentDay}, ${currentTime}. Welcome ${name}! Teacher of ${subjects}. ${location ? location : ''} Jamilo School`;

    alert(greeting);
    window.location.href = "https://jamilo-school.github.io/Academicsnew/";
  } else {
    alert("🎯 Access denied! You are trying to use unauthorized credentials. Please check and try again ");
  }
});
//end of javascript code//
// This is the source code js
