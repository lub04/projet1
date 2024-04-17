//Fonction notation article
// const systemeNotationArticle = (article) => {
  // Déclaration des variables
  // const stars = Array.from(document.querySelectorAll(".star")).reverse();
  // let note = 0
  // let totalNote = []
  // const boutonNote = document.querySelector(".note-button")
  
  // let count = 0;
  
  // récupération des étoiles dfans le tableau et attribution d'une note pour chacune d'entre elle
  // for (let i=0 ; i<stars.length ; i++){
  //   stars[i].addEventListener("click", () => {
  //     note = i + 1
  //   })
  // }
  //Fonction : compteur d'avis
 
  //Fonction : calcul de la note moyenne du restaurant sans les décimaux (toFixed)

  // A faire au chargement de la page
  // window.onload = () => {
  //   // récupération des notes attribuées
  //   const recupMemo = localStorage.getItem('memo_current_resto');
  //   //Si il y a des éléments dans le tableau note attribuées 
  //   if (recupMemo) {
  //     //transforme les donées en nombre
  //     const recupMemoNombre = parseFloat(recupMemo);
  //     //affiche la note moyenne définie dans le local storage
  //     noteFinale.innerHTML = `${notation.toFixed(0)}/5`;
  //   }
  //   // récupération du nombre d'avis
  //   const compteurAvis = localStorage.getItem('compteur_avis');
  //   //Si il y a des éléments dans le tableau nombre d'avis 
  //   if (compteurAvis) {
  //     //transforme les donées en nombre
  //     const compteurAvisNombre = parseInt(compteurAvis)
  //     //affiche le nombre d'avis défini dans le local storage
  //     compteur.innerHTML = `${compteurAvisNombre} avis`
  //     //ajoute la valeur à la variable count pour ne pas réinitialiser la note après une nouvelle notation
  //     count = compteurAvisNombre
  //   }
  // };
 
 


const memo = [];
const manageStars = (idStar, idResto) => {
  const existingResto = memo.findIndex(item => item.idResto === idResto);
  if (existingResto !== -1) {
    memo[existingResto].idStar = idStar;
  } else {
    memo.push({ idStar, idResto, compteur: 0, note: [],notation: 0 });
  }

}



const manageCompteur = (idResto) => {
  const existingResto = memo.findIndex(item => item.idResto === idResto);
  if (memo[existingResto].idStar !== 0) {
    memo[existingResto].compteur += 1
    memo[existingResto].note.push(memo[existingResto].idStar)
    let some = memo[existingResto].note.reduce((acc, currentValue) => acc + currentValue)
    let notation = some / memo[existingResto].note.length
    memo[existingResto].notation = notation
    const noteFinale = document.getElementById(`note_article_${memo[existingResto].idResto}`)
    const compteur = document.getElementById(`nb_avis_article_${memo[existingResto].idResto}`)
    noteFinale.innerHTML=`${notation.toFixed(1)}/5`
    compteur.innerHTML = `${memo[existingResto].compteur} avis`
    memo[existingResto].idStar = 0

}else{
  alert("Vous devez choisir une note de 1 a 5 étoiles")
}
}


  
  
  const nbAvis = () => {
    count++
    compteur.innerHTML = `${count} avis`
    //stockage du nombre d'avis dans le local storage
    // 
    
  }
  const calculNote = () => {
    totalNote.push(note)
    some = totalNote.reduce((acc, currentValue) => acc + currentValue)
    notation = some / totalNote.length
    noteFinale.innerHTML=`${notation.toFixed(0)}/5`
    note = 0
    // //stockage des notes attribuées dans le local storage
    // localStorage.setItem('note_moyenne', notation);
  }
  const clickButton = (idButton) => {

    if (note !==0){
      calculNote()
      nbAvis() 
    } else {
      alert("Vous devez choisir une note de 1 a 5 étoiles")
    }
  }
// }
  // mise à jour d'une variale global de type array avec les datas
    // - vérifier si il y un objet avec l'id du resto dans le tableau (some ou find)
  // - cas 1: jamais eu de clic pour ce resto, alros j'ajoute à mon tableau un objet .push({ restoId: id_resto, stars: numero_stars})
  // - cas 2: il y a déjà eu un clic pour ce resto
    // - trouver l'index de l'object findIndex() puis modifier la valeur de stars dans l'objet (memo[i].stars)



  // Mise à jour dans le localstorage en stadn By
