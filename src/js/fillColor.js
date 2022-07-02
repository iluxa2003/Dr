export {fill}
var plot = function (x, y, c) {
  // Установить пикселб в т. (x, y) с прозрачностью c
  if (isFinite(x) && isFinite(y)) {
    var color = {
      r: plot.color.r,
      g: plot.color.g,
      b: plot.color.b,
      a: plot.color.a * c,
    };

    setPixel(x, y, color);
  }
};

function setPixel(x, y, c) {
  // Функция установки пикселя в js
  c = c || 1;
  var p = canvas.createImageData(1, 1);
  p.data[0] = c.r;
  p.data[1] = c.g;
  p.data[2] = c.b;
  p.data[3] = c.a;
  var data = canvas.getImageData(x, y, 1, 1).data;
  if (data[3] <= p.data[3]) canvas.putImageData(p, x, y);
}

function fill(x, y, color) {
  // Функция заливки многоугольника цветом color
  var startColor = canvas.getImageData(x, y, 1, 1).data;
  plot.color = color;
  var q = [[x, y]];
  for (var i = 0; i != q.length; i++) {
    var x = q[i][0],
      y = q[i][1];
    var data = canvas.getImageData(x, y, 1, 1).data;
    if (
      x >= 0 &&
      y >= 0 &&
      x < canvasX &&
      y < canvasY &&
      data[0] == startColor[0] &&
      data[1] == startColor[1] &&
      data[2] == startColor[2] &&
      data[3] == startColor[3]
    ) {
      plot(x, y, 1);
      var s = q.length;
      q[s] = [x + 1, y];
      q[s + 1] = [x - 1, y];
      q[s + 2] = [x, y + 1];
      q[s + 3] = [x, y - 1];
    }
  }
}
