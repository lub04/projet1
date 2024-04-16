//Fonction notation article
const systemeNotationArticle = (article) => {
  // Déclaration des variables
  const stars = Array.from(document.querySelectorAll(".star")).reverse();
  let note = 0
  let totalNote = []
  const boutonNote = document.querySelector(".note-button")
  let noteFinale = document.querySelector(".note")
  let count = 0;
  const compteur = document.querySelector(".compteur")
  // récupération des étoiles dfans le tableau et attribution d'une note pour chacune d'entre elle
  for (let i=0 ; i<stars.length ; i++){
    stars[i].addEventListener("click", () => {
      note = i + 1
    })
  }
  //Fonction : compteur d'avis
  const nbAvis = () => {
    count++
    compteur.innerHTML = `${count} avis`
    //stockage du nombre d'avis dans le local storage
    localStorage.setItem('compteur_avis', count);
  }
  //Fonction : calcul de la note moyenne du restaurant sans les décimaux (toFixed)
  const calculNote = () => {
    totalNote.push(note)
    some = totalNote.reduce((acc, currentValue) => acc + currentValue)
    notation = some / totalNote.length
    noteFinale.innerHTML=`${notation.toFixed(0)}/5`
    note = 0
    //stockage des notes attribuées dans le local storage
    localStorage.setItem('note_moyenne', notation);
  }
  // A faire au chargement de la page
  window.onload = () => {
    // récupération des notes attribuées
    const noteMoyenne = localStorage.getItem('note_moyenne');
    //Si il y a des éléments dans le tableau note attribuées 
    if (noteMoyenne) {
      //transforme les donées en nombre
      const noteMoyenneNombre = parseFloat(noteMoyenne);
      //affiche la note moyenne définie dans le local storage
      noteFinale.innerHTML = `${noteMoyenneNombre.toFixed(0)}/5`;
    }
    // récupération du nombre d'avis
    const compteurAvis = localStorage.getItem('compteur_avis');
    //Si il y a des éléments dans le tableau nombre d'avis 
    if (compteurAvis) {
      //transforme les donées en nombre
      const compteurAvisNombre = parseInt(compteurAvis)
      //affiche le nombre d'avis défini dans le local storage
      compteur.innerHTML = `${compteurAvisNombre} avis`
      //ajoute la valeur à la variable count pour ne pas réinitialiser la note après une nouvelle notation
      count = compteurAvisNombre
    }
  };
  // Ce qu'il se passe quand on clique sur le bouton note
  boutonNote.addEventListener("click", () => {
    if (note !==0){
      calculNote()
      nbAvis() 
    } else {
      alert("Vous devez choisir une note de 1 a 5 étoiles")
    }
  })
}
// Attribution d'un système de notation spécifique à chaque article 
const articles = document.querySelectorAll(".article");
articles.forEach(article =>{
  systemeNotationArticle(article)
})


  