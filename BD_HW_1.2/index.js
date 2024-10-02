const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/custom-commit', (req, res) => {
  let commitType = req.query.type;
  let commitMsg = req.query.message;

  res.send(commitType + ': ' + commitMsg);
});

app.get('/certificate', (req, res) => {
  let fName = req.query.firstName;
  let lName = req.query.lastName;
  let cName = req.query.courseName;
  res.send(
    'This certificate is awarded to ' +
      fName +
      ' ' +
      lName +
      ' for completing the course ' +
      cName
  );
});

app.get('/autoreply', (req, res) => {
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;
  res.send(
    "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " +
      startMonth +
      ' till ' +
      endMonth +
      '. Your enquiry will be resolved by another colleague.'
  );
});

app.get('/secureurl', (req, res) => {
  let domain = req.query.domain;
  res.send('https://' + domain);
});

app.get('/sendotp', (req, res) => {
  let otpcode = req.query.otpcode;
  res.send(
    'Your OTP for account verification is ' +
      otpcode +
      '. Do not share this with anyone'
  );
});

app.get('/welcome', (req, res) => {
  let fName = req.query.firstName;
  let email = req.query.email;

  res.send(
    'Hey ' +
      fName +
      ". We're excited to have you here, we'll send future notifications to your registered mail ( " +
      email +
      ')'
  );
});

app.get('/github-profile', (req, res) => {
  let uName = req.query.userName;
  res.send('https://github.com/' + uName);
});

app.get('/text-to-csv', (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
  res.send(id + ', ' + email + ', ' + rollNumber);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
