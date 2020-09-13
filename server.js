var porta = process.env.PORT || 9090;

const fetch = require("node-fetch");
const express = require("express");
require("dotenv").config();

const api = express();
api.use(express.static("public"));
api.listen(porta, () => {
  console.log("running");
});
const api_key = process.env.API_KEY;
const api_url = `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${api_key}`;

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
