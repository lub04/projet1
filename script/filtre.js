const section = document.querySelector(".articles");

const createCard = () => {
  for (let i = 0; i < restaurants.length; i++) {
    const article = document.createElement("article");
    article.classList.add("article");
    article.id = restaurants[i].idResto
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
    <button
      class="star star5"
      title="Donner 5 étoiles"
      onclick="manageStars(5, ${restaurants[i].idResto})"
      >☆</button
    >
    <button
      class="star star4"
      title="Donner 4 étoiles"
      onclick="manageStars(4, ${restaurants[i].idResto})"
      >☆</button
    >
    <button
      class="star star3"
      title="Donner 3 étoiles"
      onclick="manageStars(3, ${restaurants[i].idResto})"
      >☆</button
    >
    <button
      class="star star2"
      title="Donner 2 étoiles"
      onclick="manageStars(2, ${restaurants[i].idResto})"
      >☆</button
    >
    <button class="star star1" title="Donner 1 étoile" onclick="manageStars(1, ${restaurants[i].idResto})"
      >☆</button
    >
  </div>
  <div class="buton" id="compteur_id_du_resto">
    <button id="note_btn_${restaurants[i].idResto}" class="note-button" onclick="manageCompteur(${restaurants[i].idResto})">Noter !</button>
    <p id="note_article_${restaurants[i].idResto}"class="note" > </p>
    <small id="nb_avis_article_${restaurants[i].idResto}" class="compteur"></small>
  </div>
</div>`;
    
    article.innerHTML = cardArticle;
    section.appendChild(article);
  }
};
createCard();

