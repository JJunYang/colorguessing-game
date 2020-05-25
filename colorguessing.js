var colors=[];
var length=6;
for(var i=0;i<length;i++){
    colors[i]=generateColor();
}

var squares = document.querySelectorAll(".square");
var targetColor = colors[4];
var selectedColor = document.getElementById("selectedColor");
selectedColor.textContent = targetColor;

squares.forEach((square, i) => {
  square.style.backgroundColor = colors[i];
  square.addEventListener("click", function () {
    var bg = this.style.backgroundColor;
    if (bg === targetColor) {
      alert("true" + random);
    } else {
      alert("false");
    }
  });
});

function generateColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var string = "rgb(" + red + ", " + green + ", " + blue + ")";
  return string;
}
// for(var i=0;i<squares.length;i++){
//     squares[i].addEventListener("click",function(){
//         var bg=this.style.backgroundColor;
//     })
// }
