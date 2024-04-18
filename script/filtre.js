
render();

const cityInput = document.querySelectorAll(".city input");
const foodInput = document.querySelectorAll(".foodtype input");
for (let i = 0; i < cityInput.length; i++) {
  cityInput[i].addEventListener("click", (event) => {
    city = event.target.value;
    render();
  });
}
for (let i = 0; i < foodInput.length; i++) {
  foodInput[i].addEventListener("click", (event) => {
    const selectedfoodtypes = [];
    for (let j = 0; j < foodInput.length; j++) {
      if (foodInput[j].checked) {
        selectedfoodtypes.push(foodInput[j].value);
      }
    }
    foodtype = selectedfoodtypes;
    render();
  });
}

