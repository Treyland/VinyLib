const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

const discAuth = `key=${process.env.DISCOGS_CONSUMER_KEY}&secret=${process.env.DISCOGS_CONSUMER_SECRET}`

app.get("/", async (req, res) => {
 res.send("Hello");
});

//Search Discog By Artist
app.get("/searchArtist/:name", async (req, res) => {
  console.log(req.params.name);
  const response = await fetch(`${process.env.API}/database/search?type=artist&q=${req.params.name}&${discAuth}`);
  res.json(await response.json());
});

//Search for Release By Selected Artist
app.get("/searchReleasesByArtist/:id", async (req, res) => {
  const response = await fetch(`${process.env.API}/artists/${req.params.id}/releases`)
  res.json(await response.json());
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});