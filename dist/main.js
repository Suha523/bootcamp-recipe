const SEARCH_BTN = $("#search-btn");
const SEARCH_INPUT = $("#search-input");
const RECIPES_CONTAINER = $("#recipes-container");

SEARCH_BTN.on("click", function () {
  let ingredient = SEARCH_INPUT.val();
  $.get(`/recipes/${ingredient}`, function (response) {
    let recipes = response;
    const renderer = new Renderer();
    renderer.render(recipes);
  });
});

$("#recipes-container").on("click", ".recipe img", function () {
  let recipeElem = $(this).closest(".recipe");
  let ingredients = recipeElem.find("ul li");
  let firstIngredient = ingredients.html();
  alert("the first ingredient in ingredients is " + firstIngredient);
});
