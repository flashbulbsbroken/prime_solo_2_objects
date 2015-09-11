// ! ! !
// Objects

var atticus = {
  firstName: "Atticus", 
  employeeId: "2405", 
  salary: "47000", 
  score: 3
};

var jem = {
  firstName: "Jem", 
  employeeId: "62347", 
  salary: "63500", 
  score: 4
};

var boo = {
  firstName: "Boo", 
  employeeId: "11435", 
  salary: "54000", 
  score: 3
}; 

var scout = {
  firstName: "Scout", 
  employeeId: "6243", 
  salary: "74750", 
  score: 5
};

var employeeList = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'

for(var i = 0; i < employeeList.length; i++){
//BUG ONE
  employeeList[i] = calculateSTI(employeeList[i]);
 	newEl = document.createElement('li');
//add .join() or .join(", ") or .join("|")
	newText = document.createTextNode(employeeList[i].join(", "));
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(personObject){
  var newArray = [];

  // newArray[0] = array[0];

  var employeeNumber = personObject.employeeId;
  var baseSalary = personObject.salary;
  var reviewScore = personObject.score;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[0] = personObject.firstName;
  newArray[1] = bonus;
  //BUG THREE
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
//BUG TWO
  return basePercent;
}
               
function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(baseSalary){
  var incomeAdjustment = 0;
  salary = parseInt(baseSalary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}