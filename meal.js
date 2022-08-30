const loadMeal = (serach) =>{
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serach}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
  }
  const displayMeal = meals => {
    const mealContainer =document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
      const divCol = document.createElement('div');
      divCol.classList.add('col');
      divCol.innerHTML = `
      <div onclick="loadMealDatil(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 180)}</p>
        </div>
      </div>`;
      
      mealContainer.appendChild(divCol);
    });
    
  }
  
  const searchFood = () =>{
    const foodField =document.getElementById('search-food-field');
    const foodFieldText = foodField.value;
    loadMeal(foodFieldText);
    foodField.value = '';
  }
  
  const loadMealDatil = (mealId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
  }
  
  const displayMealDetail = meal =>{
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const detailCol = document.createElement('div');
    detailCol.classList.add('card');
    detailCol.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <button class="btn btn-warning">Go to Somewhere</button>
        </div>`;
    detailContainer.appendChild(detailCol);
  }
  
  
  loadMeal('');