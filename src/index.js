fetch("http://localhost:3000/foods")
  .then((response) => response.json())
  .then((foods) => {
    console.log("FETCH 1")
    foods.forEach((food) => {
      addFoodImage(food);
    });
    // addFoodDetails(foods[0])
  });

  fetch("http://localhost:3000/foods/5")
  .then(response => response.json())
  .then(food => {
    console.log("FETCH 2")
    addFoodDetails(food)
  })

  console.log("NOT A FETCH")

function addFoodImage(food) {
  const restaurantMenu = document.getElementById("restaurant-menu");
  const foodImage = document.createElement("img");
  foodImage.src = food.image;
  foodImage.addEventListener("click", () => {
    addFoodDetails(food);
  });
  restaurantMenu.appendChild(foodImage);
}

function addFoodDetails(food) {
  const foodImage = document.querySelector(".detail-image");
  foodImage.src = food.image;
  const foodName = document.querySelector(".name");
  foodName.textContent = food.name;
  const foodDescription = document.querySelector("#description-display");
  foodDescription.textContent = food.description;
}
