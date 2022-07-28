const SEARCH_BTN = $("#search-btn");
const SEARCH_INPUT = $("#search-input");


SEARCH_BTN.on("click", function(){
    let ingredient = SEARCH_INPUT.val()
    $.get(`/recipes/${ingredient}`, function(response){
        console.log(response);
    })
})