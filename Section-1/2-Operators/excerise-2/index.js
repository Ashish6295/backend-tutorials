const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/bmi', (req, res) => {
  let height = parseFloat(req.query.height);
  let weight = parseFloat(req.query.weight);

  res.send((weight/(height*height)).toString());
});

app.get('/checkout', (req, res) => {
  let products = req.query.products;
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price)

  res.send("Your total for " + units + " " + products + " is " + (units * price).toString());
});

app.get('/grade', (req, res) => {
  let math = parseFloat(req.query.math);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english)

  res.send("Your grade in percentage is " + parseInt(((math + science + english) / 3).toString()) + "%");
});

app.get('/discounted-price', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);

  res.send("Your bill amount is " + (cartTotal -  (cartTotal * (discount/100)).toString()));
});

app.get('/split-bill', (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);

  res.send("Each friend owes Rs " + (billAmount / numberOfFriends).toString() + " against the bill");
});

app.get('/celsius-to-fahrenheit', (req, res) => {
  let c = parseFloat(req.query.temperature);

  res.send((c * 9/5 + 32).toString());
});

app.get('/monthly-salary', (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  res.send("Result: Your monthly salary is Rs " + (hourlyWage*totalHours).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
