import { drawLetters } from './js/drawLetters';
import { fill } from './js/fillColor';
import { randomInteger,getRandomHexColor } from './js/randomColor';
const body = document.querySelector('body');
const start = document.querySelector('.start_button');
// body.style.backgroundColor = "black"
function changingColors(){
    const allrounds = document.querySelectorAll(".round")
    for (const round of allrounds) {
        round.style.top = `${randomInteger(100)}%`
        round.style.left = `${randomInteger(100)}%`
        round.style.backgroundColor = `${getRandomHexColor()}`
    }
}//
function drawingColors() {
    const special = `
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    <div class ="round"></div>
    `;

    body.insertAdjacentHTML("afterbegin", special);
}

function buttonClick() {
  drawLetters();
  body.style.backgroundColor = '';
  start.remove();
  drawingColors();
  setInterval(changingColors,500);
  
}
start.addEventListener('click', buttonClick);
