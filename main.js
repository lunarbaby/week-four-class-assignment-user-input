"use stricts";

//Select div from html and set to variable

let inputDiv = document.querySelector('div');

//Creat an input element and set the type attribute to text
let userInput = document.createElement('input');
userInput.setAttribute('type', 'text');

//create a button element
let inputButton = document.createElement('button');

//append input and button element to div
inputDiv.append(userInput);
inputDiv.append(inputButton);

//Add a click event to div element and make event work for the button
inputDiv.addEventListener('click', function (event){
        if (event.target == inputButton){
        console.log(userInput.value);
        } 
}
);

// change the value of the string from step 8b to be equal to the value of the input

