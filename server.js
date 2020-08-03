var porta = process.env.PORT || 8080;
const api_url =
  "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=0491B65D014FAA237EA9C65D1387304D";

const request = require("request");
const express = require("express");
const cors = require("cors");

const api = express();
api.use(cors());
api.listen(porta, () => {
  console.log("running");
});

api.get("/heroes/random", (req, res) => {
  request.get(api_url, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    const body_resp = JSON.parse(body);
    const result = body_resp.result;
    console.log(result);
    const arrayId = [];

    result.heroes.forEach((element) => {
      arrayId.push(element.id);
    });
    let randomizer = Math.floor(Math.random() * (arrayId.length - 1 - 0) + 0);
    const randomID = arrayId[randomizer];
    const hero = result.heroes.filter((element, id) => {
      return element.id === randomID;
    });
    console.log(arrayId);
    console.log(hero);
    res.send(hero);
  });
});
