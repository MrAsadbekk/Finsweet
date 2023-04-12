const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".header__box");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const blog = document.querySelector(".blog__container");
const form = document.querySelector(".blog__form");
const fname = document.querySelector(".blog__name");
const blogStatus = document.querySelector(".blog__status");
const email = document.querySelector(".blog__email");
const phone = document.querySelector(".blog__tel");
const userText = document.querySelector(".blog__textarea");
const addImg = document.querySelector(".blog__img-add");
const blogSpan = document.querySelectorAll(".blog__span");
const id = document.querySelector(".blog__post-id");
const url = "https://reqres.in/api/users?page=1";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // if (!fname.value) {
  //   blogSpan[0].textContent = "!Enter infomation";
  // } else if (fname.value.length < 5) {
  //   blogSpan[0].textContent = "!let the number of characters be more than 5";
  // } else {
  //   blogSpan[0].textContent = "";
  // }

  // if (!blogStatus.value) {
  //   blogSpan[1].textContent = "!Enter infomation";
  // } else if (blogStatus.value.length < 5) {
  //   blogSpan[1].textContent = "!let the number of characters be more than 5";
  // } else {
  //   blogSpan[1] = "";
  // }

  // if (!email.value) {
  //   blogSpan[2].textContent = "!Enter information";
  // } else {
  //   blogSpan[2] = "";
  // }

  // if (!phone.value) {
  //   blogSpan[3].textContent = "!Enter information";
  // } else if (phone.value.length < 7) {
  //   blogSpan[3].textContent = "!let the number of characters be more than 7";
  // } else {
  //   blogSpan[3].textContent = "";
  // }

  // if (!userText.value) {
  //   blogSpan[4].textContent = "!Enter information";
  // } else if (userText.value.length < 30) {
  //   blogSpan[4].textContent = "!let the number of characters be more than 7";
  // } else {
  //   blogSpan[4] = "";
  // }

  // if (!addImg.value) {
  //   blogSpan[5].textContent = "!Enter information";
  // }

  const id = document.querySelector(".blog__post-id").value;
  const fname = document.querySelector(".blog__name").value;
  const blogStatus = document.querySelector(".blog__status").value;
  const email = document.querySelector(".blog__email").value;
  const phone = document.querySelector(".blog__tel").value;
  const userText = document.querySelector(".blog__textarea").value;
  const avatar = document.querySelector(".blog__img-add").files[0];

  const read = new FileReader();
  read.readAsDataURL(avatar);

  read.onload = () => {
    const avatarUrl = read.result;

    if (id) {
      updateUser = { fname, blogStatus, email, phone, userText };
      form.reset();
    } else {
      const formData = {
        fname: fname,
        blogStatus: blogStatus,
        email: email,
        phone: phone,
        userText: userText,
        avatar: avatar,
      };

      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          blog.innerHTML = `
            <div class='blog__box'>
              <img class='blog__avatar' src='${avatarUrl}'/>
              <div class='blog__minibox'>
                <h3 class='blog__add-name'>${fname}</h3>
                <div class='blog__minibox-two'>
                  <p class='blog__add-tel'>Tel: ${phone}</p>
                  <p class='blog__add-email'>Email: ${email}</p>
                </div>
              </div>
            </div>
            <p class='blog__add-status'>${blogStatus}</p>
            <p class='blog__add-text'>${userText}</p>
          `;
        })
        .catch((error) => console.log(error));
    }
  };
});
