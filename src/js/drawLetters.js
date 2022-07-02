export { drawLetters };
function drawLetters() {
  var canvasElem = document.createElement('canvas');
  canvasElem.id = 'canvas';
  canvasElem.width = 1000;
  canvasElem.height = 600;
  canvasElem.style.margin = 'auto';
  canvasElem.style.display = 'flex';
  document.body.appendChild(canvasElem);
  let canvas = canvasElem.getContext('2d');
  let canvasX = canvasElem.width;
  let canvasY = canvasElem.height;
  canvasElem.strokeStyle = 'green';


  //С
  canvas.beginPath();
  canvas.moveTo(0, 20);
  canvas.lineTo(0, 100);
  canvas.lineTo(70, 100);
  canvas.lineTo(70, 80);
  canvas.lineTo(20, 80);
  canvas.lineTo(20, 40);
  canvas.lineTo(70, 40);
  canvas.lineTo(70, 20);
  canvas.lineTo(0, 20);
  canvas.stroke();
  canvas.closePath();
  // D
  canvas.beginPath();
  canvas.moveTo(120, 100);
  canvas.lineTo(140, 100);
  canvas.lineTo(140, 85);
  canvas.lineTo(180, 85);
  canvas.lineTo(180, 100);
  canvas.lineTo(200, 100);
  canvas.lineTo(200, 70);
  canvas.lineTo(185, 70);
  canvas.lineTo(160, 20);
  canvas.lineTo(135, 70);
  canvas.lineTo(120, 70);
  canvas.lineTo(120, 100);
  canvas.lineTo(120, 70);
  canvas.lineTo(145, 70);
  canvas.lineTo(160, 40);
  canvas.lineTo(175, 70);
  canvas.lineTo(183, 70);
  canvas.lineTo(120, 70);
  canvas.stroke();
  canvas.closePath();

  //H
  canvas.beginPath();
  canvas.moveTo(220, 20);
  canvas.lineTo(220, 100);
  canvas.lineTo(240, 100);
  canvas.lineTo(240, 65);
  canvas.lineTo(270, 65);
  canvas.lineTo(270, 100);
  canvas.lineTo(290, 100);
  canvas.lineTo(290, 20);
  canvas.lineTo(270, 20);
  canvas.lineTo(270, 45);
  canvas.lineTo(240, 45);
  canvas.lineTo(240, 20);
  canvas.lineTo(220, 20);
  canvas.stroke();
  canvas.closePath();

  //E
  canvas.beginPath();
  canvas.moveTo(310, 20);
  canvas.lineTo(380, 20);
  canvas.lineTo(380, 35);
  canvas.lineTo(330, 35);
  canvas.lineTo(330, 50);
  canvas.lineTo(380, 50);
  canvas.lineTo(380, 65);
  canvas.lineTo(330, 65);
  canvas.lineTo(330, 80);
  canvas.lineTo(380, 80);
  canvas.lineTo(380, 100);
  canvas.lineTo(310, 100);
  canvas.lineTo(310, 20);
  canvas.stroke();
  canvas.closePath();

  //M
  canvas.beginPath();
  canvas.moveTo(400, 20);
  canvas.lineTo(400, 100);
  canvas.lineTo(420, 100);
  canvas.lineTo(420, 40);
  canvas.lineTo(435, 100);
  canvas.lineTo(450, 40);
  canvas.lineTo(450, 100);
  canvas.lineTo(470, 100);
  canvas.lineTo(470, 20);
  canvas.lineTo(445, 20);
  canvas.lineTo(435, 65);
  canvas.lineTo(425, 20);
  canvas.lineTo(400, 20);
  canvas.stroke();
  canvas.closePath();

  //Р
  canvas.beginPath();
  canvas.moveTo(20, 120);
  canvas.lineTo(20, 200);
  canvas.lineTo(40, 200);
  canvas.lineTo(40, 160);
  canvas.lineTo(70, 160);
  canvas.lineTo(70, 120);
  canvas.lineTo(20, 120);
  canvas.stroke();
  canvas.closePath();
  canvas.beginPath();
  canvas.moveTo(40, 130);
  canvas.lineTo(60, 130);
  canvas.lineTo(60, 150);
  canvas.lineTo(40, 150);
  canvas.lineTo(40, 130);
  canvas.stroke();
  canvas.closePath();

  //O
  canvas.beginPath();
  canvas.moveTo(90, 120);
  canvas.lineTo(90, 200);
  canvas.lineTo(160, 200);
  canvas.lineTo(160, 120);
  canvas.lineTo(90, 120);
  canvas.stroke();
  canvas.closePath();
  canvas.beginPath();
  canvas.moveTo(105, 135);
  canvas.lineTo(105, 185);
  canvas.lineTo(145, 185);
  canvas.lineTo(145, 135);
  canvas.lineTo(105, 135);
  canvas.stroke();
  canvas.closePath();

  //Ж
  canvas.beginPath();
  canvas.moveTo(180, 120);
  canvas.lineTo(210, 170);
  canvas.lineTo(180, 200);
  canvas.lineTo(190, 200);
  canvas.lineTo(220, 175);
  canvas.lineTo(220, 200);
  canvas.lineTo(230, 200);
  canvas.lineTo(230, 175);
  canvas.lineTo(260, 200);
  canvas.lineTo(270, 200);
  canvas.lineTo(240, 170);
  canvas.lineTo(270, 120);
  canvas.lineTo(260, 120);
  canvas.lineTo(230, 165);
  canvas.lineTo(230, 120);
  canvas.lineTo(220, 120);
  canvas.lineTo(220, 165);
  canvas.lineTo(190, 120);
  canvas.lineTo(180, 120);
  canvas.stroke();
  canvas.closePath();

  canvas.beginPath();
  canvas.moveTo(120 + 160, 100 + 100);
  canvas.lineTo(140 + 160, 100 + 100);
  canvas.lineTo(140 + 160, 85 + 100);
  canvas.lineTo(180 + 160, 85 + 100);
  canvas.lineTo(180 + 160, 100 + 100);
  canvas.lineTo(200 + 160, 100 + 100);
  canvas.lineTo(200 + 160, 70 + 100);
  canvas.lineTo(185 + 160, 70 + 100);
  canvas.lineTo(160 + 160, 20 + 100);
  canvas.lineTo(135 + 160, 70 + 100);
  canvas.lineTo(120 + 160, 70 + 100);
  canvas.lineTo(120 + 160, 100 + 100);
  canvas.lineTo(120 + 160, 70 + 100);
  canvas.lineTo(145 + 160, 70 + 100);
  canvas.lineTo(160 + 160, 40 + 100);
  canvas.lineTo(175 + 160, 70 + 100);
  canvas.lineTo(183 + 160, 70 + 100);
  canvas.lineTo(120 + 160, 70 + 100);
  canvas.stroke();
  canvas.closePath();

  canvas.beginPath();
  canvas.moveTo(310 + 70, 20 + 100);
  canvas.lineTo(380 + 70, 20 + 100);
  canvas.lineTo(380 + 70, 35 + 100);
  canvas.lineTo(330 + 70, 35 + 100);
  canvas.lineTo(330 + 70, 50 + 100);
  canvas.lineTo(380 + 70, 50 + 100);
  canvas.lineTo(380 + 70, 65 + 100);
  canvas.lineTo(330 + 70, 65 + 100);
  canvas.lineTo(330 + 70, 80 + 100);
  canvas.lineTo(380 + 70, 80 + 100);
  canvas.lineTo(380 + 70, 100 + 100);
  canvas.lineTo(310 + 70, 100 + 100);
  canvas.lineTo(310 + 70, 20 + 100);
  canvas.stroke();
  canvas.closePath();

  canvas.beginPath();
  canvas.moveTo(220 + 250, 20 + 100);
  canvas.lineTo(220 + 250, 100 + 100);
  canvas.lineTo(240 + 250, 100 + 100);
  canvas.lineTo(240 + 250, 65 + 100);
  canvas.lineTo(270 + 250, 65 + 100);
  canvas.lineTo(270 + 250, 100 + 100);
  canvas.lineTo(290 + 250, 100 + 100);
  canvas.lineTo(290 + 250, 20 + 100);
  canvas.lineTo(270 + 250, 20 + 100);
  canvas.lineTo(270 + 250, 45 + 100);
  canvas.lineTo(240 + 250, 45 + 100);
  canvas.lineTo(240 + 250, 20 + 100);
  canvas.lineTo(220 + 250, 20 + 100);
  canvas.stroke();
  canvas.closePath();

  //И
  canvas.beginPath();
  canvas.moveTo(560, 120);
  canvas.lineTo(580, 120);
  canvas.lineTo(580, 180);
  canvas.lineTo(610, 120);
  canvas.lineTo(630, 120);
  canvas.lineTo(630, 200);
  canvas.lineTo(610, 200);
  canvas.lineTo(610, 140);
  canvas.lineTo(580, 200);
  canvas.lineTo(560, 200);
  canvas.lineTo(560, 120);
  canvas.stroke();
  canvas.closePath();

  //я 650
  canvas.beginPath();
  canvas.moveTo(720, 120);
  canvas.lineTo(665, 120);
  canvas.lineTo(665, 160);
  canvas.lineTo(700, 160);

  canvas.lineTo(650, 200);
  canvas.lineTo(670, 200);
  canvas.lineTo(700, 180);
  canvas.lineTo(700, 200);
  canvas.lineTo(720, 200);
  canvas.lineTo(720, 120);
  canvas.stroke();
  canvas.closePath();
  canvas.beginPath();
  canvas.moveTo(700, 130);
  canvas.lineTo(675, 130);
  canvas.lineTo(675, 150);
  canvas.lineTo(700, 150);
  canvas.lineTo(700, 130);

  canvas.stroke();
  canvas.closePath();
}
