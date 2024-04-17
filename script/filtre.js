const section = document.querySelector(".articles");

const createCard = () => {
  for (let i = 0; i < restaurants.length; i++) {
    const article = document.createElement("article");
    article.classList.add("article");
    console.log(article);

    const cardArticle = `
<img
  class="img"
  src=${restaurants[i].image}
  alt="logo du restaurant l'abstrait"
/>
<div class="description">
  <h2 class="nom-restaurant">${restaurants[i].nomResto}</h2>
  <p class="text-description">${restaurants[i].description}</p>
  <p class="lien-site"
    ><a href=${restaurants[i].lienWeb}>Cliquez</a> pour visiter le site !</p
  >
  <div class="propriete-notation">
    <ul class="propriete">
      <li>${restaurants[i].propriete1}</li>
      <li>${restaurants[i].propriete2}</li>
      <li>${restaurants[i].propriete3}</li>
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
    console.log(cardArticle);
    article.innerHTML = cardArticle;
    section.appendChild(article);
  }
};
createCard();
