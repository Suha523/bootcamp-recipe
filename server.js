const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/sanity", function (request, response) {
  response.send("OK");
});

app.get("/recipes/:ingredient", function (request, response) {
  let ingredient = request.params.ingredient;
  axios({
    method: "get",
    url: `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,
  }).then(function (resp) {
    let recipes = resp.data.results;
    recipes = recipes.map((r) => {
      return {
        ingredients: r.ingredients,
        title: r.title,
        thumbnail: r.thumbnail,
        href: r.href,
      };
    });
    response.send(recipes);
  });
});

app.listen(port, function () {
  console.log(`the server is listning on port: ${port}`);
});
