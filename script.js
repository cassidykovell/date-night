var generateButton = document.getElementById('generate');
var drinkRecipeContainer = document.getElementById('drink-recipe');
var foodRecipeContainer = document.getElementById('food-recipe');
var SiteOpenerDesc = document.getElementById('content-container-right');
var leftSideContent = document.getElementById('content-container-left');
var description = document.getElementById('description');
var dinnerServed = document.getElementById('dinner-served');

dinnerServed.style.display = "none";

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
      `;
      drinkRecipeContainer.innerHTML = recipe;
    })

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
    
    `;
    foodRecipeContainer.innerHTML = foodReciple
  })
})

generateButton.addEventListener('click', function() {
  generateButton.style.display = 'none';
  description.style.display = 'none';
  dinnerServed.style.display = 'block';
  var tryAgainDrink = document.createElement('button');
  tryAgainDrink.textContent = ('Generate New Cocktail Recipe');

  var imgElement = leftSideContent.querySelector('img');
  var h1Element = leftSideContent.querySelector('h1');
  var bElement = leftSideContent.querySelector('button');
  leftSideContent.insertBefore(tryAgainDrink, bElement.nextSibling);

  var tryAgainFood = document.createElement('button');
  tryAgainFood.textContent = ('Generate New Food Recipe');

  var imgElement = leftSideContent.querySelector('img');
  var h1Element = leftSideContent.querySelector('h1');
  var bElement = leftSideContent.querySelector('button');
  leftSideContent.insertBefore(tryAgainFood, bElement.nextSibling)

  tryAgainDrink.addEventListener('click', function(){
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
      
      `;
      drinkRecipeContainer.innerHTML = recipe;
    })
  })

  tryAgainFood.addEventListener('click', function(){
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
    
    `;
    foodRecipeContainer.innerHTML = foodReciple
  })
  })
})
