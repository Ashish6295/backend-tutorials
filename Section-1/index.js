const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function createAddress(city, street, state) {
  return street + ', ' + city + ', ' + state;
}

function employeeGreet(employeeName) {
  return 'Welcome to the company, ' + employeeName + ' !';
}

function calculateSavingsPerMonth(amount, months) {
  savingsPerMonth = amount / months;
  return (
    'To save a total amount of ₹' +
    amount.toString() +
    ' in 12 months, you need to save ₹' +
    savingsPerMonth.toString() +
    ' per month'
  );
}

function checkMembershipLevel(points) {
  let result;
  if (points >= 3000) {
    result = 'Platinum';
  } else if (points >= 2000) {
    result = 'Gold';
  } else if (points >= 1000) {
    result = 'Silver';
  } else {
    result = 'Bronze';
  }

  return "You're a " + result + ' member.';
}

function sortSalariesAscending(num1, num2) {
  return num1 - num2;
}

function sortSalaries() {
  let salaries = [45000, 60000, 35000, 70000, 50000];
  salaries.sort(sortSalariesAscending);
  return salaries;
}

function filteredTrack(track, trackName) {
  return track.name === trackName;
}

function findTrackByName(trackName) {
  let tracks = [
    { id: 1, name: 'Track One', length: 3.5 },
    { id: 2, name: 'Track Two', length: 4.2 },
    { id: 3, name: 'Track Three', length: 2.8 },
  ];

  filteredTrack = tracks.filter((track) => filteredTrack(track, trackName));
  return filteredTrack;
}

function filteredmovies(movie, filterParameter, filterMovieByDuration) {
  if (filterMovieByDuration) {
    return movie.duration > filterParameter;
  } else {
    return movie.year > filterParameter;
  }
}

function filterLongMovies() {
  let movies = [
    { id: 1, title: 'Movie One', duration: 120 },
    { id: 2, title: 'Movie Two', duration: 150 },
    { id: 3, title: 'Movie Three', duration: 90 },
  ];

  filteredMovies = movies.filter((movie) => filteredmovies(movie, 120, true));
  return filteredMovies;
}

function addNewEmployee(name) {
  let employees = [{ name: 'Amit' }, { name: 'Rohan' }];
  employees.push({ name: name });
  return employees;
}

function returnSavings(income, expenses) {
  let message = '';
  if (income - expenses > 0) {
    return (message = 'You have saved ₹' + (income - expenses).toString());
  } else {
    return (message = "You couldn't save anything");
  }
}

function filterRecentMovies() {
  let movies_new = [
    { id: 1, title: 'Movie One', year: 2014 },
    { id: 2, title: 'Movie Two', year: 2016 },
    { id: 3, title: 'Movie Three', year: 2018 },
  ];

  filteredMovies = movies_new.filter((movie) =>
    filteredmovies(movie, 2015, false)
  );
  return filteredMovies;
}

app.get('/track-store-address', (req, res) => {
  let city = req.query.city;
  let street = req.query.street;
  let state = req.query.state;

  res.send(createAddress(city, street, state));
});

app.get('/employee-greet', (req, res) => {
  let employeeName = req.query.employeeName;
  res.send(employeeGreet(employeeName));
});

app.get('/calculate-savings-goal', (req, res) => {
  let totalAmount = parseFloat(req.query.totalAmount);
  let months = parseInt(req.query.months);

  res.send(calculateSavingsPerMonth(totalAmount, months));
});

app.get('/membership-level', (req, res) => {
  let points = parseFloat(req.query.creditScore);
  res.send(checkMembershipLevel(points));
});

app.get('/sort-salaries', (req, res) => {
  res.send(sortSalaries());
});

app.get('/find-track', (req, res) => {
  let name = req.query.name;
  res.json(findTrackByName(name));
});

app.get('/filter-long-movies', (req, res) => {
  res.json(filterLongMovies());
});

app.get('/add-employee', (req, res) => {
  let name = req.query.name;
  res.json(addNewEmployee(name));
});

app.get('/calculate-savings', (req, res) => {
  let income = parseFloat(req.query.income);
  let expenses = parseFloat(req.query.expenses);
  res.send(returnSavings(income, expenses));
});

app.get('/filter-recent-movies', (req, res) => {
  res.json(filterRecentMovies());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
