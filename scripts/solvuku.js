class Solvuku {

  constructor() {
    this.tiles = [];
    this.solver = new SolvukuSolver(this);
    this.grid = document.querySelector("#sudoku-grid");
    this.renderGrid();
    console.log("Solvuko initialised.");
  }

  renderGrid() {
    for(var i = 0; i < 9; i++)
      this.grid.appendChild(this.renderSquare(i));
  }

  renderSquare(squarePos) {
    var square = document.createElement("div");
    square.classList.add("sudoku-square");
    for(var i = 0; i < 9; i++)
      square.appendChild(this.renderTile(squarePos, i));
    return square;
  }

  renderTile(squarePos, tilePos) {
    var tile = document.createElement("input");
    var x = (squarePos % 3) * 3 + tilePos % 3;
    var y = (Math.floor(squarePos / 3) * 3) + Math.floor(tilePos / 3);
    tile.type = "number";
    tile.min = 1;
    tile.max = 9;
    tile.maxLength = 1;
    tile.classList.add("sudoku-tile");

    this.tiles.push(new SolvukuTile(this, tile, x, y));
    return tile;
  }

  solve() {
    console.log("Attempting to solve puzzle...");
    this.solver.solve();
  }

}

window.addEventListener("load", _ => {
  window.solvuku = new Solvuku();
});
