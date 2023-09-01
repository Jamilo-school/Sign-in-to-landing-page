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
  { username: "lencer07achieng@gmail.com", password: "33387882", name: "Madam Lencer Seje", subjects: ["English", "Mathematics"] },
  { username: " tresa@jamiloschool", password: "ict692k", name: "David Smith", subjects: ["Mathematics", "Kiswahili"] },
  { username: "calvin@jamiloschool", password: "ict46892x", name: "Deputy Headteacher Calvin Ochieng", subjects: ["science", "music"] },
  { username: "jumba@jamiloschool", password: "s67299y", name: "Clarance Jumba", subjects: ["agriculture", "Art/craft"] },
  { username: "nancy@jamiloschool", password: "8299y", name: "Nancy Atieno", subjects: ["music", "Drama"] },
  { username: "director@jamiloschool", password: "G967785", name: "Director Lilian Omollo",subjects: [""] },
  { username: "director@jamiloschool", password: "G##56", name: "Director Gerald Omollo",subjects: [""]},
  { username: "caren@jamiloschool", password: "z299y", name: "Clarance Jumba", subjects: [" and trainer of Drama", "social culture"] },
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
    const name = isValidCredential.name;
    const subjects = isValidCredential.subjects.join(", ");
    
    const greeting = `🧑‍⚕️ Welcome ${name} ${subjects}. `;

    alert(greeting);
    window.location.href = "https://jamilo-school.github.io/landing-page/";
  } else {
    alert("🎯 Access denied! You are trying to use unauthorized credentials. Please check and try again ");
  }
});
//end of javascript code//
// This is the source code js
