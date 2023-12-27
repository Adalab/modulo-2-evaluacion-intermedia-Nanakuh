'use strict'

//1. QUERY SELECTOR

const userNumberInput = document.querySelector('.js__userNumberInput');
const testBtn = document.querySelector('.js__testBtn');
const track = document.querySelector('.js__track');
const attempts = document.querySelector('.js__attempts');
const form = document.querySelector('.js__form');

//2. VARIABLES GLOBALES

//generar el número aleatorio
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//3. FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
// traer num de la usuaria, 
function getUserNumber() {
  return parseInt(userNumberInput.value);

}
// compararlo con el num aleatorio, poner la pista
function checkNumbers(userNumber, randomNumber) {
  console.log(userNumber, randomNumber);

  if(userNumber < 1 || userNumber > 100){
    track.innerHTM ='El numero debe estar entre 1 y 100';
  }
  else if (userNumber === randomNumber) {
    track.innerHTM = 'Iguales';
  }
  else if(userNumber > randomNumber) {
    track.innerHTM = 'Demasiado alto';
  }
  else if (userNumber < randomNumber) {
    track.innerHTM = 'Demasiado bajo';
  }

}
// actualizar intentos
function updateAttempts() {

}


function handleClickTestBtn(event) {

  const userNumber = getUserNumber();
  console.log(userNumber);

  checkNumbers(userNumber, randomNumber);

  updateAttempts();

}

//4. EVENTOS

testBtn.addEventListener('click', handleClickTestBtn);

//5. CODIGO QUE SE EJECUTA CUANDO CARGA LA PÁGINA

console.log(`Mi número aleatorio es ${randomNumber}`)


/*const userNumber =() =>{
    const numberChosen = number.value;
}

function handleClickButton(event) {
    event.preventDefault();

    userNumber();

}*/
