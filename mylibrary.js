let button1 = 'Subscribe'
element = document.createElement('button');
element.innerText = button1;
document.body.appendChild(element); //create button in JS with the subscribe label

document.title = 'New App'; //Converts the name of the title to New App


function greeting(firstName) {
    console.log('Hello ' + firstName);
}

greeting('Lemis'); //Hello Lemis

function toUpper(str) {
 console.log(str.toUpperCase());      
}

toUpper('wedgeman');

//Create an array and use a function to display the contents of the array

let myArray = ['Books', 'Pens', 'Hats', 'Chicken'];
myArray.push('House');
//use a method to add an value to the array

//use a loop with a function to display the values of an array to a webpage. 

myArray.forEach(function(param) {
    let element = document.createElement('div');
    element.innerText = param;
    document.body.appendChild(element);
});

//A function toUpper that converts the values of an array to uppercase and logs them on the console

console.log(todos);

let courses = ['math', 'comp science', 'history', 'chemistry', 'biology'];

courses.forEach(function toUpper(str) {
    console.log(str.toUpperCase());
});

//Onclick button the count goes up
let count = 0;
function theCounter() {
    count = count + 1;
    let counter = document.getElementById('counter');
    counter.innerText = count; 
}


function buttonClick() {
    let button = document.getElementById('button-1');
    button.innerText = 'Done';}
