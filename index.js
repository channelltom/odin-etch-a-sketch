var rgbval = 250;

function createPallete(dimension, total_squares) {
  var pdiv = document.getElementById("grid-parent");
  var grid_elements = document.querySelectorAll("div.div-grid");
  if (grid_elements) {
    grid_elements.forEach((element) => {
      pdiv.removeChild(element);
    });
  }
  var boxSize = 960 / dimension;

  for (var i = 0; i < total_squares; i++) {
    var div = document.createElement("div");
    div.classList.add("div-grid");
    div.style.height = `${boxSize}px`;
    div.style.width = `${boxSize}px`;
    pdiv.appendChild(div);
  }
  divContainer.appendChild(pdiv);
  var all_squares = document.querySelectorAll("div.div-grid");
  all_squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      var rgb = square.style.backgroundColor;
      e.target.style.backgroundColor = "rgb(220, 220, 220)";
    });
  });
}

function clearCanvas() {
  var all_squares = document.querySelectorAll("div.div-grid");
  all_squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function btnClick() {
  var dimension = window.prompt(
    "How many many items would you like across to width and height of your canvas?",
    16,
  );
  if (dimension > 100) {
    dimension = window.prompt(
      "Sorry, the value needs to be lower than 100... Try again...",
      16,
    );
  }
  var total_squares = dimension * dimension;
  createPallete(dimension, total_squares);
}

const divContainer = document.querySelector("#eas-container");
const btnElement = document
  .getElementById("btn-click")
  .addEventListener("click", (e) => btnClick(e));

const btnClear = document
  .getElementById("btn-clear")
  .addEventListener("click", () => clearCanvas());
