export {randomInteger,getRandomHexColor}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)}`;
}
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}
function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}