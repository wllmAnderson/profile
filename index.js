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

// Array.prototype.forEach()
// const myArray = [2, 4, 6, 8];

// myArray.forEach((num) => console.log(num));

// String.prototype.toLowerCase()
//const teamMembers = {
  //name: 'Eric',
  //age: 28,
  //occupation: 'Full-Stack Web Developer',
//};

//console.log(teamMembers);

// Prototype methods on constructor function
//function Movie(title, releaseYear) {
  //this.title = title;
  //this.releaseYear = releaseYear;
//}

//const superman = new Movie('Superman', 1978);

//Movie.prototype.logInfo = function () {
  //console.log(`${this.title} was released in ${this.releaseYear}`);
//};

//superman.logInfo();

// So, being able to update a prototype after the fact that instantly
// affects all existing created items is one thing that is not so
// easily done with the composition method that I demonstrated before

// But how useful is that, really? What exactly is the use case for
// extending existing objects (all of them) after they've already
// been created. If anything, that is something that can and would
// create lots of confusion for other developers were they unaware of
// it being done and it best avoided.

// instead, if we need to augment existing objects, we can simply
// extend them using a higher order function. 

// The following extends an existing object with a `play` method
// function addPlayer(movie) {
  // movie.play = () => {
    // console.log(`Playing the movie ${movie.title}`);
// }
  // return movie;
// }

// If, however, you wanted to extend the original construction method
// (assuming we used the composition format I showed in the previous
// lesson). It might look like this:

// first, let's make the compser:

// function makeMovie(title, releaseYear) {
  // return {
    // title,
    // releaseYear,
  // };
// }

// function withLogging(composer) {
  // return (...args) => {
    // const obj = composer(...args);
    // obj.logInfo = () => {
      // console.log(`${obj.title} was released in ${obj.releaseYear}`);
    // }
    // return obj;
  // };
// }

// const makeMovieWithLogging = withLogging(makeMovie);

// function insDemo() {
  // const spiderman = makeMovieWithLogging('Spiderman', '2002');

  // spiderman.logInfo();

  //spiderman.title = 'The Amazing Spider-Man'
  // spiderman.releaseYear = '2012';
  
  // spiderman.logInfo();  
// }

// insDemo();

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
  const rita = new Developer('Rita', 'Bob', 333, 3333333333, 'wllm_anderson@yahoo.com');
  
  // Calls the 'introduction()' method on the new object
  rita.introduction();
  