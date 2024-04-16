const section = document.querySelector(".articles");

const createCard = () => {
  const article = document.createElement("article");
  article.classList.add("article");
  console.log(article);

  const cardArticle = `
<img
  class="img"
  src="assets/images/l'abstrait.jpg"
  alt="logo du restaurant l'abstrait"
/>
<div class="description">
  <h2 class="nom-restaurant">L'abstrait</h2>
  <p class="text-description">
    Restaurant bistronomique et cuisine au comptoir sont les deux
    concepts développés par Dorian Foulquier au 97 rue Victor-Hugo à
    L’Abstrait. Pour vous accueillir le personnel dynamique montre un
    haut niveau d'hospitalité dans ce restaurant.
  </p>
  <p class="lien-site"
    ><a href="">Cliquez</a> pour visiter le site !</p
  >
  <div class="propriete-notation">
    <ul class="propriete">
      <li>Bistronomique</li>
      <li>Sainte Foy La Grande</li>
      <li>Vegetarien</li>
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
};

createCard();
