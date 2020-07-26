const api_url =
  "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=0491B65D014FAA237EA9C65D1387304D";

const request = require("request");
const express = require("express");

const api = express();

api.listen(3003, () => {
  console.log("running");
});

api.get("/", (req, res) => {
  console.log(req);
  request.get(api_url, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    const obj_response_heroes = JSON.parse(body);
    const arrayHeroes = obj_response_heroes.result.heroes;
    
    for (let x = 0; x < arrayHeroes.length; x++) {
      console.log(arrayHeroes[x].name, arrayHeroes[x].id);
    }
  });
});
