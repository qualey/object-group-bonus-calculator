class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log( employees );

//Class of employee summary
class CompensationSummary{
  constructor(name, bonusPercentage, totalCompensation, totalBonus ){
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  }
}//end class of employee summary

function bonusSummary(targetEmployee){
  const compensationSummary = new CompensationSummary( targetEmployee.name, bonusPercentage(targetEmployee), totalCompensation(targetEmployee), totalBonus(targetEmployee))
  return compensationSummary;
}

//this should calculate the bonus for a target employee
function bonusPercentage(targetEmployee){
  let bonus;
  if (targetEmployee.reviewRating <= 2) {
    bonus = 0.00;
  }
  else if (targetEmployee.reviewRating === 3) {
    bonus = 0.04;
  }
  else if (targetEmployee.reviewRating === 4) {
    bonus = 0.06;
  }
  else if (targetEmployee.reviewRating === 5) {
    bonus = 0.10;
  }

  if (targetEmployee.employeeNumber.length === 4) {
    bonus += 0.05
    
  }
  if (targetEmployee.annualSalary > 65000) {
    bonus -= 0.01;
  }
  if (bonus > 0.13) {
    bonus = 0.13;
  }
  if (bonus < 0.00) {
    bonus = 0.00;
  }
  return bonus;
}

//property should be the adjusted annual compensation (base annual + bonus)
function totalCompensation(targetEmployee){
  let x = parseInt(targetEmployee.annualSalary)
  return x += x * bonusPercentage(targetEmployee);

}

//calculate the total bonus
function totalBonus(targetEmployee){
  let x = parseInt(targetEmployee.annualSalary)
  let bonus = x * bonusPercentage(targetEmployee);
  return Math.round(bonus);
}

if (atticus.employeeNumber.length === 4) {
  console.log('it worked');
  
}
let employeeBonuses = [];
function employeesArrayLoop(employees){
  for (let i = 0; i < employees.length; i++) {
    employeeBonuses.push(bonusSummary(employees[i]));
  }
  return employeeBonuses;
}

// console.log(parseInt(atticus.annualSalary));

// console.log(totalCompensation(atticus));

// console.log(totalBonus(atticus));

// console.log(bonusSummary(atticus));

console.log(employeesArrayLoop(employees));