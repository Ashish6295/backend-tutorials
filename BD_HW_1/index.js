const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/whisper', (req, res) => {
  let name = req.query.name.toLowerCase();
  res.send(name);
});

app.get('/fullProductname', (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;
  res.send(companyName + ' ' + productName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  res.send(month + '/' + year);
});

app.get('/greet', (req, res) => {
  let city = req.query.city;
  res.send('You live in city ' + city);
});

app.get('/capital', (req, res) => {
  let capital = req.query.capital;
  let country = req.query.country;

  res.send(capital + 'is the capital of' + country + '.');
});

app.get('/email', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;
  res.send(firstName + lastName + '@' + domain + '.com');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
