//declaring all global variables
var generateButton = document.getElementById("generate");
var drinkRecipeContainer = document.getElementById("drink-recipe");
var foodRecipeContainer = document.getElementById("food-recipe");
var SiteOpenerDesc = document.getElementById("content-container-right");
var leftSideContent = document.getElementById("content-container-left");
var description = document.getElementById("description");
var dinnerServed = document.getElementById("dinner-served");
var recipeContainer = document.getElementById("button-container");

//hiding elements so they do not display when the page loads
dinnerServed.style.display = "none";
recipeContainer.style.display = "none";

//function for creating a variable and saving the generated drink's name, photo, and recipe to local storage
function saveDrinkDataToLocalStorage(drinkName, drinkPhoto, drinkRecipe) {
  var drinkData = {
    drink: {
      name: drinkName,
      photo: drinkPhoto,
      recipe: drinkRecipe,
    },
  };
  localStorage.setItem("DrinkRecipeData", JSON.stringify(drinkData));
}

//function for creating a variable and saving the generated meal's name, photo, and recipe to local storage
function saveFoodDataToLocalStorage(mealName, mealPhoto, mealRecipe) {
  var foodData = {
    meal: {
      name: mealName,
      photo: mealPhoto,
      recipe: mealRecipe,
    },
  };
  localStorage.setItem("MealRecipeData", JSON.stringify(foodData));
}

//a function for calling the drink API, selecting what we want to display and saving the name, photo, and recipe to local storage. Also console logging if there is an error
function generateDrink() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var drink = data.drinks[0];
      var recipe = `
        <h2>${drink.strDrink}</h2>
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
      `;
      drinkRecipeContainer.innerHTML = recipe;
      saveDrinkDataToLocalStorage(
        drink.strDrink,
        drink.strDrinkThumb,
        drink.strInstructions
      );
    })
    .catch(function (error) {
      console.error("Error fetching cocktail recipe:", error);
    });
}

//a function for calling the meal API, selecting what we want to display and saving the name, photo, and recipe to local storage. Also console logging if there is an error
function generateFood() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("food", data);
      var meal = data.meals[0];
      var foodRecipe = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      `;
      foodRecipeContainer.innerHTML = foodRecipe;
      saveFoodDataToLocalStorage(
        meal.strMeal,
        meal.strMealThumb,
        meal.strInstructions
      );
    })
    .catch(function (error) {
      console.error("Error fetching food recipe:", error);
    });
}


//event listener for the 'generate' button that will invoke both generating functions, hide certain elements, display certain elements, create two new buttons for regenrating a recipe for either the drink or the meal, and having that new recipe overwrite the old ones in local storage
generateButton.addEventListener("click", function () {
  generateDrink();
  generateFood();
  generateButton.style.display = "none";
  description.style.display = "none";
  dinnerServed.style.display = "block";
  recipeContainer.style.display = "flex";
  var tryAgainFood = document.createElement("button");
  tryAgainFood.textContent = "Generate New Food Recipe";

  var imgElement = leftSideContent.querySelector("img");
  var h1Element = leftSideContent.querySelector("h1");
  var bElement = leftSideContent.querySelector("button");
  leftSideContent.insertBefore(tryAgainFood, bElement.nextSibling);

  var tryAgainDrink = document.createElement("button");
  tryAgainDrink.textContent = "Generate New Cocktail Recipe";

  var imgElement = leftSideContent.querySelector("img");
  var h1Element = leftSideContent.querySelector("h1");
  var bElement = leftSideContent.querySelector("button");
  leftSideContent.insertBefore(tryAgainDrink, bElement.nextSibling);

  tryAgainDrink.addEventListener("click", function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var drink = data.drinks[0];
        var recipe = `
        <h2>${drink.strDrink}</h2>
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
      `;
        drinkRecipeContainer.innerHTML = recipe;
        saveDrinkDataToLocalStorage(
          drink.strDrink,
          drink.strDrinkThumb,
          drink.strInstructions
        );
      });
  });

  tryAgainFood.addEventListener("click", function () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("food", data);
        var meal = data.meals[0];
        var foodReciple = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    `;
        foodRecipeContainer.innerHTML = foodReciple;
        saveFoodDataToLocalStorage(
          meal.strMeal,
          meal.strMealThumb,
          meal.strInstructions
        );
      });
  });
});
