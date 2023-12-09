'use strict'

const number = document.querySelector('.js_number')
const testButton = document.querySelector('.js_testButton')
const track = document.querySelector('.js_track');
const attempts = document.querySelector('.js_attempts')


testButton.addEventListener('click')
  
   


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
    console.log(getRandomNumber);
