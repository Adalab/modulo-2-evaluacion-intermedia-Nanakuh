'use strict'

const number = document.querySelector('.js__number');
const testButton = document.querySelector('.js__testButton');
const track = document.querySelector('.js__track');
const attempts = document.querySelector('.js__attempts');
const form = document.querySelector('.js__form');


const randomNumber= getRandomNumber(100);
console.log(randomNumber);
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }



function handleClickButton(event) { 
    /*console.log("funciona");*/
}  


testButton.addEventListener('click',handleClickButton);


/*const userNumber =() =>{
    const numberChosen = number.value;
}

function handleClickButton(event) {
    event.preventDefault();

    userNumber();

}*/
