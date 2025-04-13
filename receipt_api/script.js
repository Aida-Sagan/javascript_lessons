const randomRecipeBtn = document.getElementById('randomRecipeBtn')
const ingredientInput = document.getElementById('ingredientInput')
const searchRecipeBtn = document.getElementById('searchRecipeBtn')
const recipeContainer = document.getElementById('recipeContainer')
const recipeTitle = document.getElementById('recipeTitle')
const recipeInstructions = document.getElementById('recipeInstructions')
const recipeIngredients = document.getElementById('recipeIngredients')
const recipeImage = document.getElementById('recipeImage')


const API_URL = "https://www.themealdb.com/api/json/v1/1/";

async function getRandomRecipe() {
    try {
        const response = await fetch(`${API_URL}random.php`);
        const data = await response.json();
        console.log('DATA = ', data);
        displayRecipe(data.meals[0])
    } catch (error) {
        console.error('ошибка при получении рецепта', error);
    }
}


// функция поиска рецептов по ингредиенту
async function searchRecipeByIngredient() {
    const ingredient = ingredientInput.value.trim();
    try {
        const response = await fetch(`${API_URL}filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log("data from searchRecipeByIngredient", data);

        const recipeId = data.meals[0].idMeal;
        const recipeResponse = await fetch(`${API_URL}lookup.php?i=${recipeId}`);
        const recipeData = await recipeResponse.json();
        displayRecipe(recipeData.meals[0]);
    } catch (error) {
        console.error(error)
    }
}

async function searchRecipeByCategory() {
    const category = ingredientInput.value.trim();
    try {
        const response = await fetch(`${API_URL}filter.php?c=${category}`);
        const data = await response.json();
        console.log("data from searchRecipeByCategory", data);

        const recipeId = data.meals[0].idMeal;
        const recipeResponse = await fetch(`${API_URL}lookup.php?i=${recipeId}`);
        const recipeData = await recipeResponse.json();
        displayRecipe(recipeData.meals[0]);
    }
    catch (error) {
        console.error(error)
    }
}

function displayRecipe(meal) {
    recipeTitle.textContent = meal.strMeal;
    recipeInstructions.textContent = meal.strInstructions;
    recipeImage.src = meal.strMealThumb;
    recipeContainer.classList.remove('hidden');
}

randomRecipeBtn.addEventListener('click',getRandomRecipe );
searchRecipeBtn.addEventListener('click', searchRecipeByIngredient)
searchRecipeBtn.addEventListener('click', searchRecipeByCategory)

