const express = require("express");

const app = express();
const format = require("date-format");
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "ishaan@2040",
    followers: 72,
    follows: 50,
    date: format.asString("dd/MM - hh:mm:ss", new Date()),
  };
  res.status(200).json(instaSocial);
});
app.get("/api/v1/facebook", (req, res) => {
  const facebookSocial = {
    username: "ishaan@2040",
    followers: 42,
    follows: 20,
    date: format.asString("dd/MM - hh:mm:ss", new Date()),
  };
  res.status(200).json(facebookSocial);
});
app.get("/api/v1/linkedin", (req, res) => {
  const linkedinSocial = {
    username: "ishaanshetty",
    followers: 500,
    follows: 450,
    date: format.asString("dd/MM - hh:mm:ss", new Date()),
  };
  res.status(200).json(linkedinSocial);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`We are at port ${PORT}`);
});
