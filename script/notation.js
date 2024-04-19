let memo = [];
const display = (resto) => {
  const noteFinale = document.getElementById(`note_article_${resto.idResto}`);
  const compteur = document.getElementById(`nb_avis_article_${resto.idResto}`);
  noteFinale.innerHTML = `${resto.notation.toFixed(1)}/5`;
  compteur.innerHTML = `${resto.compteur} avis`;
}
const takeStorage = () => {
  const storedMemo = JSON.parse(localStorage.getItem('memo'));
  if (storedMemo) {
    memo = storedMemo;
  }
}

takeStorage()

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
      display(memo[existingResto])
      memo[existingResto].idStar = 0
      localStorage.setItem('memo', JSON.stringify(memo));
    }else{
      alert("Vous devez choisir une note de 1 a 5 étoiles")
    }
  }else{
    alert("Vous devez choisir une note de 1 a 5 étoiles")
  }
}