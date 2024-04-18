document.getElementById("email-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs.sendForm("service_ylfu404", "template_zqodrcr", event.target).then(
    (response) => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});

// Etape 1 récupérer le bouton d'envoi
// Etape 2, ajout d'un listener sur le bouton au click
// Etape 3, dans le fonction, récupérer la valeur de l'input
// Etape 4, lire la docs EmailJS et la suivre
