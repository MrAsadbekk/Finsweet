const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".header__box");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const cardBox = document.querySelector(".card__box");

// const options = {
//   method: "GET",
//   params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
//   headers: {
//     "x-api-key": "shQU-ZiR9BPT5ulj4c48SmRjxNh9-P7jCf2cYOxzxRE",
//   },
// };

// fetch("https://api.newscatcherapi.com/v2/search?q=Business", options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.articles.slice(0, 3));

//     response.articles.slice(1, 4).map((card) => {
//       console.log(card);

//       const miniBox = document.createElement("div");
//       miniBox.classList.add("card__minibox");

//       const cardImg = document.createElement("img");
//       cardImg.classList.add("card__img");
//       cardImg.src = card.media;

//       const cardTime = document.createElement("p");
//       cardTime.classList.add("card__text-time");
//       cardTime.textContent = `By John Doe   l   Aug 23, 2021 `;

//       const cardTitle = document.createElement("h4");
//       cardTitle.classList.add("card__box-title");
//       cardTitle.textContent = card.title;

//       const cardText = document.createElement("p");
//       cardText.classList.add("card__box-text");
//       cardText.textContent = card.summary;

//       miniBox.appendChild(cardImg);
//       miniBox.appendChild(cardTime);
//       miniBox.appendChild(cardTitle);
//       miniBox.appendChild(cardText);
//       cardBox.appendChild(miniBox);
//     });
//   })
//   .catch((err) => console.error(err));
