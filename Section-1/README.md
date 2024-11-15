# Backend Programming Self-Help Guide Section 1

The `index.js` file contains the solutions to all the exercises listed below. By studying the code and running the endpoints, you can deepen your understanding of backend development principles.

---

## Table of Contents

1. [Formatted Track Address](#question-1-formatted-track-address)
2. [Employee Greeting](#question-2-employee-greeting)
3. [Calculate Monthly Savings Goal](#question-3-calculate-monthly-savings-goal)
4. [Determine Membership Level](#question-4-determine-membership-level)
5. [Sort Employee Salaries](#question-5-sort-employee-salaries)
6. [Find Track by Name](#question-6-find-track-by-name)
7. [Filter Long Movies](#question-7-filter-long-movies)
8. [Push New Employee](#question-8-push-new-employee)
9. [Calculate Monthly Savings](#question-9-calculate-monthly-savings)
10. [Filter Recent Movies](#question-10-filter-recent-movies)

---

## Question 1: Formatted Track Address

- **Endpoint**: `/track-store-address`
- **Objective**: Return the formatted address of a track store.
- **Concepts Covered**:
    - Handling query parameters.
    - String concatenation.
    - Basic function creation.

### Details

- **Steps**:
    1. Declare three variables: `city`, `street`, and `state`, retrieved from query parameters.
    2. Create a function `createAddress` that formats and returns the address.

- **API Call**:

  ```
  http://localhost:3000/track-store-address?street=123%20Gandhi%20Marg&city=Mumbai&state=Maharashtra
  ```

- **Expected Output**:

  ```
  123 Gandhi Marg, Mumbai, Maharashtra
  ```

### Explanation

This exercise demonstrates how to extract query parameters from a URL and use them within your application. The `createAddress` function takes the parameters and constructs a formatted address string.

---

## Question 2: Employee Greeting

- **Endpoint**: `/employee-greet`
- **Objective**: Return a personalized greeting message for an employee.
- **Concepts Covered**:
    - Query parameters.
    - String interpolation.
    - Function creation.

### Details

- **Steps**:
    1. Declare a variable `employeeName` from the query parameter.
    2. Create a function `employeeGreet` that returns a greeting message.

- **API Call**:

  ```
  http://localhost:3000/employee-greet?employeeName=Ashish
  ```

- **Expected Output**:

  ```
  Welcome to the company, Ashish!
  ```

### Explanation

This task focuses on personalizing responses based on user input via query parameters. It reinforces how to access query parameters and use them within your functions.

---

## Question 3: Calculate Monthly Savings Goal

- **Endpoint**: `/calculate-savings-goal`
- **Objective**: Calculate the required monthly savings to reach a total amount over a specified period.
- **Concepts Covered**:
    - Mathematical calculations.
    - Parsing query parameters.
    - Number operations.

### Details

- **Steps**:
    1. Declare `totalAmount` and `months` from query parameters.
    2. Create a function `calculateSavingsPerMonth` to compute the monthly savings.

- **API Call**:

  ```
  http://localhost:3000/calculate-savings-goal?totalAmount=12000&months=12
  ```

- **Expected Output**:

  ```
  To save a total amount of ₹12000 in 12 months, you need to save ₹1000 per month.
  ```

### Explanation

This exercise teaches how to perform calculations based on user input. It involves parsing strings to numbers and performing division to find the monthly savings required.

---

## Question 4: Determine Membership Level

- **Endpoint**: `/membership-level`
- **Objective**: Determine a user's membership level based on their points.
- **Concepts Covered**:
    - Conditional statements (`if-else`).
    - Logical comparison.
    - Control flow.

### Details

- **Steps**:
    1. Declare a variable `points` from the query parameter.
    2. Create a function `checkMembershipLevel` that assigns a membership level.

- **Membership Levels**:
    - Points >= 3000: Platinum
    - Points >= 2000: Gold
    - Points >= 1000: Silver
    - Otherwise: Bronze

- **API Call**:

  ```
  http://localhost:3000/membership-level?points=2500
  ```

- **Expected Output**:

  ```
  You are a Gold member.
  ```

### Explanation

This task emphasizes the use of conditional logic to make decisions based on user input. It's a common pattern in backend applications for handling different user statuses.

---

## Question 5: Sort Employee Salaries

- **Endpoint**: `/sort-salaries`
- **Objective**: Return a list of employee salaries sorted from lowest to highest.
- **Concepts Covered**:
    - Array sorting.
    - Comparator functions.
    - Returning arrays in responses.

### Details

- **Dummy Data**:

  ```javascript
  let salaries = [45000, 60000, 35000, 70000, 50000];
  ```

- **Steps**:
    1. Create a function `sortSalaries` that sorts and returns the salaries array.

- **API Call**:

  ```
  http://localhost:3000/sort-salaries
  ```

- **Expected Output**:

  ```
  [35000, 45000, 50000, 60000, 70000]
  ```

### Explanation

Sorting data is a fundamental operation. This exercise shows how to sort numeric arrays and return the sorted data in the response.

---

## Question 6: Find Track by Name

- **Endpoint**: `/find-track`
- **Objective**: Retrieve track details based on the provided name.
- **Concepts Covered**:
    - Array filtering.
    - Handling objects within arrays.
    - JSON responses.

### Details

- **Dummy Data**:

  ```javascript
  let tracks = [
    { id: 1, name: "Track One", length: 3.5 },
    { id: 2, name: "Track Two", length: 4.2 },
    { id: 3, name: "Track Three", length: 2.8 }
  ];
  ```

- **Steps**:
    1. Declare a variable `name` from the query parameter.
    2. Create a function `findTrackByName` that searches for the track.

- **API Call**:

  ```
  http://localhost:3000/find-track?name=Track%20Two
  ```

- **Expected Output**:

  ```json
  { "id": 2, "name": "Track Two", "length": 4.2 }
  ```

### Explanation

This exercise introduces searching within an array of objects. It's useful for understanding how to retrieve specific records from a dataset based on user input.

---

## Question 7: Filter Long Movies

- **Endpoint**: `/filter-long-movies`
- **Objective**: Return all movies longer than 120 minutes.
- **Concepts Covered**:
    - Array filtering.
    - Comparison operators.
    - Returning arrays of objects.

### Details

- **Dummy Data**:

  ```javascript
  let movies = [
    { id: 1, title: "Movie One", duration: 120 },
    { id: 2, title: "Movie Two", duration: 150 },
    { id: 3, title: "Movie Three", duration: 90 }
  ];
  ```

- **Steps**:
    1. Create a function `filterLongMovies` that filters movies based on duration.

- **API Call**:

  ```
  http://localhost:3000/filter-long-movies
  ```

- **Expected Output**:

  ```json
  [{ "id": 2, "title": "Movie Two", "duration": 150 }]
  ```

### Explanation

Filtering data is a common task in backend development. This exercise helps you practice how to filter arrays based on certain conditions and return the filtered data.

---

## Question 8: Push New Employee

- **Endpoint**: `/add-employee`
- **Objective**: Add a new employee to the existing employees array.
- **Concepts Covered**:
    - Array manipulation (`push` method).
    - Updating in-memory data.
    - Handling query parameters.

### Details

- **Dummy Data**:

  ```javascript
  let employees = [
    { name: "Amit" },
    { name: "Rohan" }
  ];
  ```

- **Steps**:
    1. Declare a variable `name` from the query parameter.
    2. Create a function `addNewEmployee` to add the new employee.

- **API Call**:

  ```
  http://localhost:3000/add-employee?name=Shivani
  ```

- **Expected Output**:

  ```json
  [
    { "name": "Amit" },
    { "name": "Rohan" },
    { "name": "Shivani" }
  ]
  ```

### Explanation

This task demonstrates how to modify data structures in your application. It shows how to add new elements to an array and return the updated array.

---

## Question 9: Calculate Monthly Savings

- **Endpoint**: `/calculate-savings`
- **Objective**: Calculate the amount saved after expenses are deducted from income.
- **Concepts Covered**:
    - Mathematical operations.
    - Conditional statements.
    - Handling financial calculations.

### Details

- **Steps**:
    1. Declare `income` and `expenses` from query parameters.
    2. Create a function `returnSavings` to calculate and return the savings.

- **API Call**:

  ```
  http://localhost:3000/calculate-savings?income=4000&expenses=2500
  ```

- **Expected Output**:

  ```
  You have saved ₹1500.
  ```

### Explanation

This exercise is about performing calculations and returning dynamic messages based on the result. It reinforces the use of basic arithmetic and string concatenation.

---

## Question 10: Filter Recent Movies

- **Endpoint**: `/filter-recent-movies`
- **Objective**: Return all movies released after the year 2015.
- **Concepts Covered**:
    - Array filtering.
    - Date and year comparisons.
    - Working with arrays of objects.

### Details

- **Dummy Data**:

  ```javascript
  let movies_new = [
    { id: 1, title: "Movie One", year: 2014 },
    { id: 2, title: "Movie Two", year: 2016 },
    { id: 3, title: "Movie Three", year: 2018 }
  ];
  ```

- **Steps**:
    1. Create a function `returnRecentMovies` that filters movies based on the year.

- **API Call**:

  ```
  http://localhost:3000/filter-recent-movies
  ```

- **Expected Output**:

  ```json
  [
    { "id": 2, "title": "Movie Two", "year": 2016 },
    { "id": 3, "title": "Movie Three", "year": 2018 }
  ]
  ```

### Explanation

This final exercise combines several concepts: array filtering, comparison operators, and working with dates. It's essential for applications that need to present data based on time criteria.

---

## Exploring the Code (`index.js`)

The `index.js` file contains all the endpoint definitions and the corresponding functions that handle the logic for each exercise. By examining the code, you can learn:

- How to define routes and handle HTTP GET requests.
- How to extract and use query parameters.
- How to manipulate data structures like arrays and objects.
- How to use JavaScript functions to encapsulate logic.

---

## Conclusion

This section serves as a practical guide for anyone looking to enhance their backend development skills using Node.js and Express.js. By working through the exercises and studying the solutions, you'll gain a better understanding of handling HTTP requests, processing data, and implementing common backend functionalities.

---