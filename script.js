
let todos = ['Wash car', 'Clean house','Wash utensils'];

todos.forEach( function(todoTitle) {
let element = document.createElement('div');
element.innerText = todoTitle;
document.body.appendChild(element);
});

function addTodo() {
    todos.push('new todo');
}

/*
- document.createElement lets you create any HTML element but you have to specify it. 
- remember to introduce it as a variable. 

element.innerText - takes the value of todo1 and places it in the div you've just created. 

document.body.appendChild(element); - display the div on your page. 
*/

