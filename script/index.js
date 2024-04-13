const etoile0 = document.getElementById("star1")
const etoile1= document.getElementById("star2")
const etoile2 = document.getElementById("star3")
const etoile3 = document.getElementById("star4")
const etoile4 = document.getElementById("star5")
let note = 0
let totalNote = []
const boutonNote = document.getElementById("note-button")
let noteFinale = document.getElementById("note")
let count = 0;
const compteur = document.getElementById("compteur")

const moyenne = () =>{
  totalNote.push(note)
}
const nbAvis = () => {
  count++
  compteur.innerHTML = `${count} avis`
}

  etoile0.addEventListener("click", () => {
    note = 1
  })
  etoile1.addEventListener("click", () => {
    note = 2
  })
  etoile2.addEventListener("click", () => {
    note = 3
  })
  etoile3.addEventListener("click", () => {
    note = 4
  })
  etoile4.addEventListener("click", () => {
    note = 5
  })

// calcul de la note moyenne du restaurant
  boutonNote.addEventListener("click", (some, notation) => {
    if (note !==0){
      moyenne()
      some = totalNote.reduce((acc, currentValue) => acc + currentValue)
      notation = some / totalNote.length
      console.log(notation)
      noteFinale.innerHTML=`${notation.toFixed(1)}/5`
      note = 0
      nbAvis() 
    }
  })
