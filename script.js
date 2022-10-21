let todo1 = 'Wash wash';
let todo2 = 'Buy Groceries';
let todo3 = 'Wash car';

function addTodo(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
} 

addTodo(todo1);
addTodo(todo2);
addTodo(todo3);

let todos = ['Wash car', 'Clean house','Wash utensils'];
todos.push('cook');


console.log(todos);

/*
- document.createElement lets you create any HTML element but you have to specify it. 
- remember to introduce it as a variable. 

element.innerText - takes the value of todo1 and places it in the div you've just created. 

document.body.appendChild(element); - display the div on your page. 
*/

