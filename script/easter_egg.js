const easter = document.querySelector(".texte-footer2");
const dialog = document.querySelector("dialog");

easter.addEventListener("click", (event) => {
  dialog.showModal();
  const button = document.querySelector("dialog button");
  button.addEventListener("click", () => {
    dialog.close();
  });
});
