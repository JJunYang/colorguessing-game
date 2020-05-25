var size = 6;
var colors = generateColors(size);
var squares = document.querySelectorAll(".square");
var index = Math.floor(Math.random() * 6);
var targetColor = colors[index];
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var selectedColor = document.getElementById("selectedColor");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

selectedColor.textContent = targetColor;

resetBtn.addEventListener("click", function () {
  colors = generateColors(size);
  index = Math.floor(Math.random() * size);
  targetColor = colors[index];
  selectedColor.textContent = targetColor;
  resetBtn.textContent = "New Colors";
  message.textContent = "";
  squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];
  });
  h1.style.backgroundColor = "steelblue";
});

easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  size = 3;
  colors = generateColors(size);
  index = Math.floor(Math.random() * size);
  targetColor = colors[index];
  selectedColor.textContent = targetColor;
  squares.forEach((square, i) => {
    if (colors[i]) {
      square.style.backgroundColor = colors[i];
    } else {
      square.style.display = "none";
    }
  });
  h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  size = 6;
  colors = generateColors(size);
  index = Math.floor(Math.random() * size);
  targetColor = colors[index];
  selectedColor.textContent = targetColor;
  squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];
    square.style.display = "block";
  });
  h1.style.backgroundColor = "steelblue";
});

squares.forEach((square, i) => {
  square.style.backgroundColor = colors[i];
  square.addEventListener("click", function () {
    var bg = this.style.backgroundColor;
    if (bg === targetColor) {
      updateColor(bg);
      h1.style.backgroundColor = bg;
      message.textContent = "Correct!";
      resetBtn.textContent = "Play Again";
    } else {
      square.style.backgroundColor = "black";
      message.textContent = "Try Again!";
    }
  });
});

function generateColors(num) {
  var colors = [];
  for (var i = 0; i < num; i++) {
    colors.push(colorString());
  }
  return colors;
}
function colorString() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var string = "rgb(" + red + ", " + green + ", " + blue + ")";
  return string;
}
function updateColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
