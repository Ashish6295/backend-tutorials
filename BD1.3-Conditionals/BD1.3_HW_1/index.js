const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/check-whole-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number < 0) {
    result = 'not a whole number';
  } else {
    result = 'a whole number';
  }

  res.send('Number is ' + result);
});

app.get('/check-equal', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  let result;

  if (num1 === num2) {
    result = 'equal';
  } else {
    result = 'not equal';
  }

  res.send('Numbers are ' + result);
});

app.get('/check-active', (req, res) => {
  let isActive = req.query.isActive === 'true';
  let result;

  if (isActive) {
    result = 'User is active';
  } else {
    result = 'User is not active';
  }

  res.send(result);
});

app.get('/check-discount', (req, res) => {
  let cost = parseInt(req.query.cost);
  let result;

  if (cost < 1000) {
    result = 'is not eligible';
  } else {
    result = 'is eligible';
  }

  res.send('User ' + result + ' for the discount');
});

app.get('/check-experience', (req, res) => {
  let workExperience = parseFloat(req.query.workExperience);
  let result;
  if (workExperience > 0) {
    result = 'experienced';
  } else if (number < 0) {
    result = 'non-working';
  } else {
    result = 'fresher';
  }

  res.send('Person is ' + result);
});

app.get('/check-result', (req, res) => {
  let grade = parseFloat(req.query.grade);
  let result;
  if (grade > 80) {
    result = 'A';
  } else if (number < 50) {
    result = 'Fail';
  } else {
    result = 'B';
  }

  res.send('The Grade is ' + result);
});

app.get('/check-attendence', (req, res) => {
  let attendence = parseInt(req.query.attendence);
  let result;
  if (attendence > 90) {
    result = 'high';
  } else if (steps < 50) {
    result = 'low';
  } else {
    result = 'moderate';
  }

  res.send('Attendence is ' + result);
});

app.get('/check-rating', (req, res) => {
  let stars = parseInt(req.query.stars);
  let result;
  if (likes < 3) {
    result = 'low';
  } else if (likes > 4) {
    result = 'high';
  } else {
    result = 'medium';
  }

  res.send('Restaurant rating is ' + result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
