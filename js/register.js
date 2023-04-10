const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".header__box");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const form = document.querySelector(".register__form");
const fname = document.querySelector(".register__fname");
const lname = document.querySelector(".register__lname");
const uname = document.querySelector(".register__uname");
const password = document.querySelector(".register__password");
const cpassword = document.querySelector(".register__cpassword");
const formBtn = document.querySelector(".register__btn");
const formSpan = document.querySelectorAll(".register__span");

// console.log(formSpan);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!fname.value) {
    formSpan[0].textContent = "!Enter information";
  } else if (fname.value.length < 5) {
    formSpan[0].textContent = "!Firstname must be more than 5 characters long";
  } else {
    formSpan[0].textContent = "";
  }

  if (!lname.value) {
    formSpan[1].textContent = "!Enter information";
  } else if (lname.value.length < 5) {
    formSpan[1].textContent = "!Lastname must be more than 5 characters long";
  } else {
    formSpan[1].textContent = "";
  }

  if (!uname.value) {
    formSpan[2].textContent = "!Enter information";
  } else {
    formSpan[2].textContent = "";
  }

  if (!password.value) {
    formSpan[3].textContent = "!Enter information";
  } else if (password.value.length < 8) {
    formSpan[3].textContent = "!minimum password length should be 8 characters";
  } else {
    formSpan[3].textContent = "";
  }

  if (!cpassword.value) {
    formSpan[4].textContent = "!Enter information";
  } else if (password.value !== cpassword.value) {
    formSpan[4].textContent = "!Password not confirmed";
  } else {
    formSpan[4].textContent = "";
  }

  console.log(formSpan[0]);
});
