const { default: axios } = require("axios");
const express = require("express")
const path = require("path")
const app = express()
const port = 8080;
app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))

app.get("/sanity", function(request, response){
    response.send("OK")
})

// app.get("https://recipes-goodness.herokuapp.com/recipes/:ingredient", function(request, response){
//    let recipes = request.params.results;
//    response.send(recipes)
// })


app.get("/recipes/:ingredient", function(request, response){
    let ingredient = request.params.ingredient;
    axios({
        method: "get",
        url: `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,
      }).then(function (resp) {
        let recipes = resp.data.results;
        response.send(recipes);
      });
   
})


app.listen(port, function(){
    console.log(`the server is listning on port: ${port}`);
})


