var size = 6;
var colors = generateColors(size);
var index = Math.floor(Math.random() * 6);
var targetColor = colors[index];

var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var selectedColor = document.getElementById("selectedColor");
var resetBtn = document.getElementById("reset");
var typeBtns = document.querySelectorAll(".typeBtn");

init();

function init() {
  setUpSquares();
  setUpTypeButtons();
  reset();
  resetBtn.addEventListener("click", function () {
    reset();
  });
}

function setUpTypeButtons() {
  typeBtns.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      typeBtns[0].classList.remove("selected");
      typeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (size = 3) : (size = 6);
      reset();
    });
  });
}

function reset() {
  colors = generateColors(size);
  index = Math.floor(Math.random() * size);
  targetColor = colors[index];
  selectedColor.textContent = targetColor;
  resetBtn.textContent = "New Colors";
  message.textContent = "";
  squares.forEach((square, i) => {
    if (colors[i]) {
      square.style.display = "block";
      square.style.backgroundColor = colors[i];
    } else {
      square.style.display = "none";
    }
  });
  h1.style.backgroundColor = "steelblue";
}

function setUpSquares() {
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
}

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
