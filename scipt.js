var generateButton = document.getElementById('generate');
var drinkRecipeContainer = document.getElementById('drink-recipe');
var foodRecipeContainer = document.getElementById('food-recipe')

generateButton.addEventListener('click', function () {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data)
      var drink = data.drinks[0];
      var recipe = `
        <h2>${drink.strDrink}</h2>
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
        <p>${drink.strInstructions}</p>
      `;
      drinkRecipeContainer.innerHTML = recipe;
    })
});

generateButton.addEventListener('click', function (){
  fetch('http://www.themealdb.com/api/json/v1/1/random.php')
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    console.log('food', data)
    var meal = data.meals[0];
    var foodReciple = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    <p>${meal.strInstructions}</p>
    `;
    foodRecipeContainer.innerHTML = foodReciple
  })
})