'use strict'

const number = document.querySelector('.js_number')
const testButton = document.querySelector('.js_testButton')
const track = document.querySelector('.js_track');
const attempts = document.querySelector('.js_attempts')


const userNumber =() =>{
    const numberChosen = number.value;
}

function handleClickButton(event) {
    event.preventDefault();

    userNumber();

}

testButton.addEventListener('click',handleClickButton)


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
    console.log(getRandomNumber);
