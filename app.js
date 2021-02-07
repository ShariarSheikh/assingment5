// selectors
const searchInput = document.getElementById("searchInput");
//search item
const searchBtn = () => {
  callApi(searchInput.value);
  searchInput.value = "";
};
// get api
const callApi = (itemName) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`)
    .then((response) => response.json())
    .then((json) => displayItem(json.meals))
    .catch((error) => {
      console.log("Error:", errorAlert());
    });
};
// display item
const displayItem = (item) => {
  item.forEach((element) => {
    const info = `
    <article class="items-div" data-id="${element.idMeal}" onclick="itemInfoShow('${element.idMeal}')">
    <img class="item-pic" src="${element.strMealThumb}" alt="item picture">
    <h2 class="item-title">${element.strMeal}</h2>
  </article>
    `;
    const div = document.createElement("div");
    div.innerHTML = info;
    document.getElementById("itemContainer").appendChild(div);
  });
};
// item info show function
const itemInfoShow = (itemId) => {
  document.querySelector(".search-div").style.display = "none";
  document.getElementById("allItem").style.display = "none";
  document.getElementById("itemInfoContainer").style.display = "block";
  const id = itemId;
  callApiId(id);
};

// item info hide function
const itemInfoHide = () => {
  document.querySelector(".search-div").style.display = "block";
  document.getElementById("allItem").style.display = "block";
  document.getElementById("itemInfoContainer").style.display = "none";
};

// const get meals info
const callApiId = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => showItemInfo(data.meals[0]));
};

const showItemInfo = (info) => {
  // forEach(info => ())

  const itemInfo = `
  <article class="itemInfo">
  <img id="itemImg" src="${info.strMealThumb}"item picture">
  <h1 class="info-title">${info.strMeal}</h1>
  <h5 class="info-ingredients">Ingredients</h5>
  <ul>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient1}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient2}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient3}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient4}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient5}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient6}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient7}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient8}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient9}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient10}</li>
    <li class="ingredients-li"><span class="iconBg">✔</span>${info.strIngredient11}</li>
  </ul>
  <button class="goHome" onclick="itemInfoHide()">Back</button>
</article>
  `;

  document.getElementById("itemInfoContainer").innerHTML = itemInfo;
};

// alert function
const errorAlert = () => {
  alert( `We don't have this item right now !  Type full name of item like? egg/beef or  you can write first word of meals name`)

};
