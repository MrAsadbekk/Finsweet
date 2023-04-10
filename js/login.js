const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".header__box");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const loginForm = document.querySelector(".login__form");
const fname = document.querySelector(".login__name");
const password = document.querySelector(".login__password");
const loginSpan = document.querySelectorAll(".login__span");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!fname.value) {
    loginSpan[0].textContent = "!Enter information";
    loginSpan[0].classList.add("login__span");
  } else {
    loginSpan[0].textContent = "";
  }

  if (!password.value) {
    loginSpan[1].textContent = "!Enter information";
    loginSpan[0].classList.add("login__span");
  } else if (password.value.length < 8) {
    loginSpan[1].textContent =
      "!minimum password length should be 8 characters";
  } else {
    loginSpan[1].textContent = "";
  }

  loginForm.reset();
});
