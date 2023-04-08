const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".header__box");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const cardBox = document.querySelector(".card__box");

const myKey = "e6721b7844fa4e1db86df00f773e0381";
const url = "https://newsapi.org/v2/everything?q=Apple&apiKey=";

// fetch(`${url}${myKey}`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.articles);

//     const newData = data.articles.slice(0, 3);
//     console.log(newData);

//     newData.map((data) => {
//       console.log(data);

//       const miniBox = document.createElement("div");
//       miniBox.classList.add("card__minibox");

//       const cardImg = document.createElement("img");
//       cardImg.classList.add("card__img");
//       cardImg.src = data.urlToImage;

//       const textBox = document.createElement("div");

//       const cardTime = document.createElement("p");
//       cardTime.classList.add("card__text-time");
//       cardTime.textContent = data.publishedAt;

//       const cardTitle = document.createElement("h3");
//       cardTitle.classList.add("card__box-title");
//       cardTitle.textContent = data.title;

//       const cardText = document.createElement("p");
//       cardText.classList.add("card__box-text");
//       cardText.textContent = data.content;

//       textBox.appendChild(cardTime);
//       textBox.appendChild(cardTitle);
//       textBox.appendChild(cardText);
//       miniBox.appendChild(cardImg);
//       miniBox.appendChild(textBox);
//       cardBox.appendChild(miniBox);
//     });
//   })
//   .catch((error) => console.log(error));

const searchBox = document.querySelector(".search__box");

fetch(`${url}${myKey}`)
  .then((response) => response.json())
  .then((data) => {
    const newData = data.articles.slice(0, 4);

    newData.map((data) => {
      console.log(data);

      const minibox = document.createElement("div");
      minibox.classList.add("search__minibox");

      const searchImg = document.createElement("img");
      searchImg.classList.add("search__img");
      searchImg.src = data.urlToImage;

      const textBox = document.createElement("div");

      const searchTextOne = document.createElement("p");
      searchTextOne.classList.add("search__text-one");
      searchTextOne.textContent = "Business";

      const searchTitle = document.createElement("h3");
      searchTitle.classList.add("search__title");
      searchTitle.textContent = data.title;

      const searchTextTwo = document.createElement("p");
      searchTextTwo.classList.add("search__text-two");
      searchTextTwo.textContent = data.content;

      textBox.appendChild(searchTextOne);
      textBox.appendChild(searchTitle);
      textBox.appendChild(searchTextTwo);
      minibox.appendChild(searchImg);
      minibox.appendChild(textBox);
      searchBox.appendChild(minibox);
    });
  })
  .catch((error) => console.log(error));
