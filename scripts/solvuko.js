class Solvuko {

  constructor() {
    this.grid = document.querySelector("#sudoku-grid");
    this.renderGrid();
    console.log("Solvuko initialised.");
  }

  renderGrid() {
    for(var i = 0; i < 9; i++)
      this.grid.appendChild(this.renderSquare(i));
  }

  renderSquare(square) {
    var square = document.createElement("div");
    square.classList.add("sudoku-square");
    for(var i = 0; i < 9; i++)
      square.appendChild(this.renderTile(square, i));
    return square;
  }

  renderTile(square, i) {
    var tile = document.createElement("input");
    tile.type = "number";
    tile.min = 1;
    tile.max = 9;
    tile.maxLength = 1;
    tile.value = Math.round(Math.random() * 9);
    tile.classList.add("sudoku-tile");
    return tile;
  }

}

window.addEventListener("load", _ => new Solvuko());
