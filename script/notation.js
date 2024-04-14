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
  }
  //Fonction : calcul de la note moyenne du restaurant sans les décimaux (toFixed)
  const calculNote = () => {
    totalNote.push(note)
    some = totalNote.reduce((acc, currentValue) => acc + currentValue)
    notation = some / totalNote.length
    noteFinale.innerHTML=`${notation.toFixed(0)}/5`
    note = 0
  }
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
  