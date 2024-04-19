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
    <button
      class="star star5"
      title="Donner 5 étoiles"
      onclick="manageStars(5, ${restaurant.idResto})"
      >☆</button
    >
    <button
      class="star star4"
      title="Donner 4 étoiles"
      onclick="manageStars(4, ${restaurant.idResto})"
      >☆</button
    >
    <button
      class="star star3"
      title="Donner 3 étoiles"
      onclick="manageStars(3, ${restaurant.idResto})"
      >☆</button
    >
    <button
      class="star star2"
      title="Donner 2 étoiles"
      onclick="manageStars(2, ${restaurant.idResto})"
      >☆</button
    >
    <button class="star star1" title="Donner 1 étoile" onclick="manageStars(1, ${restaurant.idResto})"
      >☆</button
    >
  </div>
  <div class="buton" id="compteurid_du_resto">
    <button id="note_btn_${restaurant.idResto}" class="note-button" onclick="manageCompteur(${restaurant.idResto})">Noter !</button>
    <p id="note_article_${restaurant.idResto}"class="note"> </p>
    <small id="nb_avis_article_${restaurant.idResto}" class="compteur"></small>
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
        const resto = memo.find(el => el.idResto === +restaurants[i].idResto);
        if (resto){
          display(resto)
        }
      }
    }
  }
};
