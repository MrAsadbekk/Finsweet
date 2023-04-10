const searchBox = document.querySelector(".search__box");
const searchForm = document.querySelector(".search__form");
const search = document.querySelector(".search__input");
const pagenationBox = document.querySelector(".search__pagenation");
let page = 1;
let url = `https://newsapi.org/v2/everything?q=Apple&apiKey=e6721b7844fa4e1db86df00f773e0381&page=${page}`;
let searchQuary = "Apple";
const searchUrl = `https://newsapi.org/v2/everything?q=${searchQuary}&apiKey=e6721b7844fa4e1db86df00f773e0381`;

async function fetchData() {
  const searchTerm = search.value;

  if (searchTerm) {
    searchQuary = searchTerm;
    url = `https://newsapi.org/v2/everything?q=${searchQuary}&apiKey=e6721b7844fa4e1db86df00f773e0381&page=${page}`;
  } else {
    url = `https://newsapi.org/v2/everything?q=Apple&apiKey=e6721b7844fa4e1db86df00f773e0381&page=${page}`;
  }

  // console.log(url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.articles);

    searchBox.innerHTML = "";

    if (data.articles.length === 0) {
      const notFound = document.createElement("p");
      notFound.classList.add("search__notFound");
      notFound.textContent = "!Nothing found";

      searchBox.appendChild(notFound);
    } else {
      const newData = data.articles.slice(6, 12);

      newData.map((data) => {
        const minibox = document.createElement("div");
        minibox.classList.add("search__minibox");

        const searchImg = document.createElement("img");
        searchImg.classList.add("search__img");
        searchImg.src = data.urlToImage;

        const textBox = document.createElement("div");

        const searchTitle = document.createElement("h3");
        searchTitle.classList.add("search__title");
        searchTitle.textContent = data.title;

        const searchTextTwo = document.createElement("p");
        searchTextTwo.classList.add("search__text-two");
        searchTextTwo.textContent = data.content;

        textBox.appendChild(searchTitle);
        textBox.appendChild(searchTextTwo);
        minibox.appendChild(searchImg);
        minibox.appendChild(textBox);
        searchBox.appendChild(minibox);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetchData();
});

fetchData();
