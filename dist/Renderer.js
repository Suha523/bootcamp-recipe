class Renderer{
   constructor(){

   }

   render(recipes){
    const RECIPES_CONTAINER = $("#recipes-container");
    const RECIPES_SOURCE = $("#recipe-template");

    RECIPES_CONTAINER.empty();
    let source = RECIPES_SOURCE.html();
    let template = Handlebars.compile(source);
    let recipesHTML = template({ recipes });
    RECIPES_CONTAINER.append(recipesHTML);
   }
}

