// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  event.preventDefault();
  const employees = [];

  const employee = createEmployee();
  employees.push(employee);

    while(confirm('Would you like to add another employee?')){
      const employee = createEmployee();
      employees.push(employee);
    }

    return employees;
};

function createEmployee(){
  const employee = {
    firstName: '',
    lastName: '',
    salary: 0,
  };
 
  employee.firstName = prompt("Enter your first name.");
  employee.lastName = prompt("Enter your last name.");
  employee.salary = prompt("Enter your salary.");
  
  // if user doesn't enter in a number it will make the salary 0
  if (isNaN(employee.salary)){
    employee.salary = 0;
  } else {
    employee.salary = parseInt(employee.salary);
  }
  
  return employee;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary =0;
  const salaryNumbers = employeesArray.flatMap(obj => { 
    return Object.values(obj).filter(value => !isNaN(parseInt(value)));
  });
  for(i = 0; i < salaryNumbers.length; i++){
    totalSalary = salaryNumbers[i] + totalSalary;
  }
   let salaryAverage = totalSalary / salaryNumbers.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${salaryAverage} `);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let firstName =[];
  let lastName =[];
  employeesArray.forEach(({firstName}) => {
   first = firstName
  });
  employeesArray.forEach(({lastName}) => {
     last = lastName
   });
  let index = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations to ${first} ${last}, our random drawing winner!!!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function(event) {
  // added code based on Eli comments
  event.preventDefault();
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);