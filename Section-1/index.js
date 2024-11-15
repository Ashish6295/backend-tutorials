const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// ------------------------ Helper Functions ------------------------

// Function to create a formatted address (Question 1: Formatted Track Address)
function createAddress(city, street, state) {
  return street + ', ' + city + ', ' + state;
}

// Function to create a greeting message for an employee (Question 2: Employee Greeting)
function employeeGreet(employeeName) {
  return 'Welcome to the company, ' + employeeName + ' !';
}

// Function to calculate monthly savings goal (Question 3: Calculate Monthly Savings Goal)
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

// Function to determine membership level based on points (Question 4: Determine Membership Level)
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

// Comparator function to sort salaries in ascending order (used in Question 5)
function sortSalariesAscending(num1, num2) {
  return num1 - num2;
}

// Function to sort employee salaries from lowest to highest (Question 5: Sort Employee Salaries)
function sortSalaries() {
  let salaries = [45000, 60000, 35000, 70000, 50000];
  salaries.sort(sortSalariesAscending);
  return salaries;
}

// Helper function to filter tracks by name (used in Question 6)
function filteredTrack(track, trackName) {
  return track.name === trackName;
}

// Function to find a track by its name (Question 6: Find Track by Name)
function findTrackByName(trackName) {
  let tracks = [
    { id: 1, name: 'Track One', length: 3.5 },
    { id: 2, name: 'Track Two', length: 4.2 },
    { id: 3, name: 'Track Three', length: 2.8 },
  ];

  filteredTrack = tracks.filter((track) => filteredTrack(track, trackName));
  return filteredTrack;
}

// Helper function to filter movies based on duration or year (used in Questions 7 and 10)
function filteredmovies(movie, filterParameter, filterMovieByDuration) {
  if (filterMovieByDuration) {
    return movie.duration > filterParameter;
  } else {
    return movie.year > filterParameter;
  }
}

// Function to filter movies longer than 120 minutes (Question 7: Filter Long Movies)
function filterLongMovies() {
  let movies = [
    { id: 1, title: 'Movie One', duration: 120 },
    { id: 2, title: 'Movie Two', duration: 150 },
    { id: 3, title: 'Movie Three', duration: 90 },
  ];

  filteredMovies = movies.filter((movie) => filteredmovies(movie, 120, true));
  return filteredMovies;
}

// Function to add a new employee to the existing array (Question 8: Push New Employee)
function addNewEmployee(name) {
  let employees = [{ name: 'Amit' }, { name: 'Rohan' }];
  employees.push({ name: name });
  return employees;
}

// Function to calculate savings after deducting expenses from income (Question 9: Calculate Monthly Savings)
function returnSavings(income, expenses) {
  let message = '';
  if (income - expenses > 0) {
    return (message = 'You have saved ₹' + (income - expenses).toString());
  } else {
    return (message = "You couldn't save anything");
  }
}

// Function to filter movies released after 2015 (Question 10: Filter Recent Movies)
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

// ------------------------ Endpoints ------------------------

// Endpoint to get formatted track address (Question 1)
app.get('/track-store-address', (req, res) => {
  let city = req.query.city;
  let street = req.query.street;
  let state = req.query.state;

  res.send(createAddress(city, street, state));
});

// Endpoint to get employee greeting (Question 2)
app.get('/employee-greet', (req, res) => {
  let employeeName = req.query.employeeName;
  res.send(employeeGreet(employeeName));
});

// Endpoint to calculate monthly savings goal (Question 3)
app.get('/calculate-savings-goal', (req, res) => {
  let totalAmount = parseFloat(req.query.totalAmount);
  let months = parseInt(req.query.months);

  res.send(calculateSavingsPerMonth(totalAmount, months));
});

// Endpoint to determine membership level (Question 4)
app.get('/membership-level', (req, res) => {
  let points = parseFloat(req.query.creditScore);
  res.send(checkMembershipLevel(points));
});

// Endpoint to sort employee salaries (Question 5)
app.get('/sort-salaries', (req, res) => {
  res.send(sortSalaries());
});

// Endpoint to find track by name (Question 6)
app.get('/find-track', (req, res) => {
  let name = req.query.name;
  res.json(findTrackByName(name));
});

// Endpoint to filter movies longer than 120 minutes (Question 7)
app.get('/filter-long-movies', (req, res) => {
  res.json(filterLongMovies());
});

// Endpoint to add a new employee (Question 8)
app.get('/add-employee', (req, res) => {
  let name = req.query.name;
  res.json(addNewEmployee(name));
});

// Endpoint to calculate monthly savings after expenses (Question 9)
app.get('/calculate-savings', (req, res) => {
  let income = parseFloat(req.query.income);
  let expenses = parseFloat(req.query.expenses);
  res.send(returnSavings(income, expenses));
});

// Endpoint to filter movies released after 2015 (Question 10)
app.get('/filter-recent-movies', (req, res) => {
  res.json(filterRecentMovies());
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
