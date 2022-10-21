let todo1 = 'Wash wash';
let todo2 = 'Buy Groceries';
let todo3 = 'Wash car';

let element = document.createElement('div');
element.innerText = todo1;
document.body.appendChild(element);

element = document.createElement('div');
element.innerText = todo2;
document.body.appendChild(element);

element = document.createElement('div');
element.innerText = todo3;
document.body.appendChild(element);

let button1 = 'Subscribe'
element = document.createElement('button');
element.innerText = button1;
document.body.appendChild(element);



let myAge = 24;
console.log('I am ' + myAge + ' years old.');

/*
- document.createElement lets you create any HTML element but you have to specify it. 
- remember to introduce it as a variable. 

element.innerText - takes the value of todo1 and places it in the div you've just created. 

document.body.appendChild(element); - display the div on your page. 
*/

