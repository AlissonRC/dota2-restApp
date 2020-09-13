var porta = process.env.PORT || 9090;
const api_url =
  "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=0491B65D014FAA237EA9C65D1387304D";

const fetch = require("node-fetch");
const express = require("express");

const api = express();
api.use(express.static("."));
api.listen(porta, () => {
  console.log("running");
});

api.get("/heroes/random", async (req, res) => {
  try {
    const fetch_response = await fetch(api_url);
    const data = await fetch_response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log("error: ", error);
  }
});
