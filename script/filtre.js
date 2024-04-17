let city = "";
let foodtype = "";

const section = document.querySelector(".articles");

const createCard = (restaurant) => {
  const article = document.createElement("article");
  article.classList.add("article");

  const cardArticle = `
<img
  class="img"
  src=${restaurant.image}
  alt=${restaurant.alt}
/>
<div class="description">
  <h2 class="nom-restaurant">${restaurant.nomResto}</h2>
  <p class="text-description">${restaurant.description}</p>
  <p class="lien-site"
    ><a href=${restaurant.lienWeb}>Cliquez</a> pour visiter le site !</p
  >
  <div class="propriete-notation">
    <ul class="propriete">
      <li>${restaurant.propriete1}</li>
      <li>${restaurant.propriete2}</li>
      <li>${restaurant.propriete3}</li>
    </ul>
  </div>
  <div class="notation">
    <a
      id="star5"
      class="star star5"
      href="#5"
      title="Donner 5 étoiles"
      >☆</a
    >
    <a
      id="star4"
      class="star star4"
      href="#4"
      title="Donner 4 étoiles"
      >☆</a
    >
    <a
      id="star3"
      class="star star3"
      href="#3"
      title="Donner 3 étoiles"
      >☆</a
    >
    <a
      id="star2"
      class="star star2"
      href="#2"
      title="Donner 2 étoiles"
      >☆</a
    >
    <a id="star1" class="star star1" href="#1" title="Donner 1 étoile"
      >☆</a
    >
  </div>
  <div class="buton">
    <button class="note-button">Noter !</button>
    <p class="note"> </p>
    <small class="compteur"></small>
  </div>
</div>`;

  article.innerHTML = cardArticle;
  return article;
};

const render = () => {
  section.innerHTML = "";
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].propriete2 === city || city === "") {
      if (
        foodtype.length === 0 ||
        foodtype.includes(restaurants[i].propriete1)
      ) {
        const article = createCard(restaurants[i]);
        section.appendChild(article);
      }
    }
  }
};
render();

const cityInput = document.querySelectorAll(".city input");
const foodInput = document.querySelectorAll(".foodtype input");
for (let i = 0; i < cityInput.length; i++) {
  cityInput[i].addEventListener("click", (event) => {
    city = event.target.value;
    render();
  });
}
for (let i = 0; i < foodInput.length; i++) {
  foodInput[i].addEventListener("click", (event) => {
    const selectedfoodtypes = [];
    for (let j = 0; j < foodInput.length; j++) {
      if (foodInput[j].checked) {
        selectedfoodtypes.push(foodInput[j].value);
      }
    }
    foodtype = selectedfoodtypes;
    render();
  });
}
