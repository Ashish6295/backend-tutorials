const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'We will now learn functions!';
}

function getGreetingMessage(userName) {
  return 'Hello, ' + userName + '! Are you ready to learn functions with us?';
}

function checkYearsOfExp(yearsOfExp) {
  if (yearsOfExp > 0) {
    return 'You have some experience with functions. Great!';
  } else {
    return 'No worries. You will start writing functions in no time!';
  }
}

function getTime(days, hours) {
  return (days * hours).toString();
}

function getModuleCompletion(userName, hasCompleted) {
  if (hasCompleted) {
    return userName + 'has completed the modules';
  } else {
    return userName + 'has not completed the modules';
  }
}


function findAge(birthYear) {
  return (2024 - birthYear).toString();
}

function getPersonalizedGreeting(city, name) {
  return "Hey, " + name + "! What's famous about" + city + " ?";
}

function findRequiredTime(days, hours) {
  let time = days * hours;
  if (time >= 30){
    return "The time being dedicated is sufficient for learning functions"
  }else {
    return "The time being dedicated is not sufficient for learning functions"
  }
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

app.get('/greet', (req, res) => {
  res.send(getGreetingMessage(req.query.userName));
});

app.get('/message', (req, res) => {
  res.send(checkYearsOfExp(parseFloat(req.query.yearsOfExp)));
});

app.get('/hours', (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);

  res.send(getTime(days, hours));
});

app.get('/module-completion-status', (req, res) => {
  let userName = req.query.userName;
  let hasCompleted = req.query.hasCompleted === 'true';

  res.send(getModuleCompletion(userName, hasCompleted));
});

app.get('/personalized-greeting', (req, res) => {
  let city = req.query.city;
  let name = req.query.name;

  res.send(getPersonalizedGreeting(city, name));
});

app.get('/find-age', (req, res) => {
  let birthYear = parseInt(req.query.birthYear);
  res.send(findAge(birthYear));
});

app.get('/is-time-sufficient', (req, res) => {
  let days = parseInt(req.query.days);
  let hours = parseInt(req.query.hours);

  res.send(findRequiredTime(days, hours));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
