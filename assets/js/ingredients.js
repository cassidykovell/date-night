//declaring all local variables 
var drinkContainer = document.getElementById("drink-container");
var mealContainer = document.getElementById("meal-container");

//function for the dislaying the drink that was saved in local storage in the HTML
function displayDrink() {
  var drinkVariable = localStorage.getItem("DrinkRecipeData");
  var drinkData = JSON.parse(drinkVariable);
  drinkContainer.innerHTML = `
        <h2>${drinkData.drink.name}</h2>
        <img src="${drinkData.drink.photo}" alt="photo" />
        <p>${drinkData.drink.recipe}</p>
    `;
}

//function for displaying the meal that was saved in local stored to the HTML
function displayMeal() {
  var mealVariable = localStorage.getItem("MealRecipeData");
  var mealData = JSON.parse(mealVariable);
  mealContainer.innerHTML = `
        <h2>${mealData.meal.name}</h2>
        <img src="${mealData.meal.photo}" alt="photo" />
        <p>${mealData.meal.recipe}</p>
    `;
}


//calling both functions
displayDrink();
displayMeal();
