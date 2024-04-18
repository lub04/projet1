let memo = [];

window.onload = () => {
  const storedMemo = JSON.parse(localStorage.getItem('memo'));
  if (storedMemo) {
    memo = storedMemo;
    memo.forEach(resto => {
      const noteFinale = document.getElementById(`note_article_${resto.idResto}`);
      const compteur = document.getElementById(`nb_avis_article_${resto.idResto}`);
      noteFinale.innerHTML = `${resto.notation.toFixed(1)}/5`;
      compteur.innerHTML = `${resto.compteur} avis`;
    });
  }
}

const manageStars = (idStar, idResto) => {
  const existingResto = memo.findIndex(item => item.idResto === idResto);
  if (existingResto !== -1) {
    memo[existingResto].idStar = idStar;
  } else {
    memo.push({ idStar, idResto, compteur: 0, note: [],notation: 0 });
  }
  localStorage.setItem('memo', JSON.stringify(memo));
}

const manageCompteur = (idResto) => {
  const existingResto = memo.findIndex(item => item.idResto === idResto);
  if (existingResto !== -1) {
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
      localStorage.setItem('memo', JSON.stringify(memo));
    }else{
      alert("Vous devez choisir une note de 1 a 5 étoiles")
    }
  }else{
    alert("Vous devez choisir une note de 1 a 5 étoiles")
  }
  
}

  
  

  // Mise à jour dans le localstorage en stadn By

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
    // const nbAvis = () => {
  //   count++
  //   compteur.innerHTML = `${count} avis`
  //   //stockage du nombre d'avis dans le local storage
  //   // 
    
  // }
  // const calculNote = () => {
  //   totalNote.push(note)
  //   some = totalNote.reduce((acc, currentValue) => acc + currentValue)
  //   notation = some / totalNote.length
  //   noteFinale.innerHTML=`${notation.toFixed(0)}/5`
  //   note = 0
  //   // //stockage des notes attribuées dans le local storage
  //   // localStorage.setItem('note_moyenne', notation);
  // }
