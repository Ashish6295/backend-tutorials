const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/total-marks', (req, res) => {
  let m1 = parseFloat(req.query.marks1);
  let m2 = parseFloat(req.query.marks2);

  res.send((m1 + m2).toString());
});

app.get('/total-weight', (req, res) => {
  let w1 = parseFloat(req.query.weight1);
  let w2 = parseFloat(req.query.weight2);
  let w3 = parseFloat(req.query.weight3)

  res.send((w1 + w2 + w3).toString());
});

app.get('/monthly-salary', (req, res) => {
  let annualSalary = parseFloat(req.query.annualSalary);
  res.send((annualSalary/12).toString());
});

app.get('/total-pages', (req, res) => {
  let pagesPerDay = parseFloat(req.query.pagesPerDay);
  let days = parseFloat(req.query.days);

  res.send((pagesPerDay * days).toString());
});

app.get('/currency-conversion', (req, res) => {
  let amount = parseFloat(req.query.amount);
  let exchangeRate = parseFloat(req.query.exchangeRate);

  res.send((amount * exchangeRate).toString());
});

app.get('/average-sales', (req, res) => {
  let s1 = parseFloat(req.query.sales1);
  let s2 = parseFloat(req.query.sales2);
  let s3 = parseFloat(req.query.sales3)

  res.send(((s1 + s2 + s3)/3).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
