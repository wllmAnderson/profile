inquirer = require('inquirer');
var fs = require('fs');


var question = answer();


inquirer.prompt(question).then(answers => {
    fs.writeFile("input.json", JSON.stringify(answers),function (err){
        console.log(err)
    })})



function answer() {
    return [{
        type: 'input',
        message: 'Email Address',
        name: 'Email',
      },
      {
        type: 'input',
        message: 'Github Username',
        name: 'Github',
      },
      {
        type: 'input',
        message: 'Team Managers Name',
        name: 'Team Manager',
      },
      {
        type: 'input',
        message: 'Employee Identification Number',
        name: 'Imployee ID',      
      },  
      {  
        type: 'input',
        message: 'Email Address',
        name: 'Email',
      },
      {  
        type: 'input',
        message: 'Office Number',  
        name: 'Office Number',    
      },  
      {
        type: 'input',  
        message: 'Do you wish to add a team Member',  
        name: 'New Member',
      },   
        {
          type: 'input',
          message: 'What test were run before completion?',
          name: 'Test',
        },
        {
          type: 'input',
          message: 'Any questions?',
          name: 'Questions',
        },
]}



function init() { 
    inquirer.prompt(questions)
    .then(function(answer) {
      const fileName =
        answer.title
          .split(' ')
          .join('') + '.md';
      
      writeToFile(fileName, answer);
    });
}

//

// Constructor function called 'Developer' that takes in 'name' and 'manager'
// Includes a method called 'introduction()'
function Developer(name, manager, employee, email, number) {
    this.name = name;
    this.manager = manager;
    this.employee = employee
    this.email = email
    this.number = number
    this.introduction = () => {
      console.log(`Employee Name: ${this.name}
       Manager: ${this.manager}
       Identification Number ${this.employee}  
       Office Number ${this.number} 
       Employee Email: ${this.email}`);  
    };
  }
  
  // Creates a new object using the 'Developer' constructor
  const rita = new Developer('Rita', 'Bob', 333, 3333333333, 'abcdef@yahoo.com');
  
  // Calls the 'introduction()' method on the new object
  rita.introduction();
  