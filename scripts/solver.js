class SolvukuSolver {

  constructor(solvuku) {
    this.solvuku = solvuku;
    this.solve = this.solve.bind(this);
  }

  solve() {
    this._iteratePuzzle();
    if(this.isSolved()) return;
    setTimeout(this.solve, 1000);
  }

  _iteratePuzzle() {
    var inSection = [];

    //Iterate rows
    for(var i = 0; i  < 9; i++) {
      for(var i = 0; i < this.solvuku.tiles.length; i++) {
        var tile = this.solvuku.tiles[i];
        if(tile.y == i) inSection.push(tile);
      }
      this._iterateSection(inSection);
    }

    //Iterate columns
    for(var i = 0; i  < 9; i++) {
      inSection = [];
      for(var tileI = 0; tileI < this.solvuku.tiles.length; tileI++) {
        var tile = this.solvuku.tiles[tileI];
        if(tile.x == i) inSection.push(tile);
      }
      this._iterateSection(inSection);
    }

    //Iterate squares
    for(var i = 0; i  < 9; i++) {
      inSection = [];
      for(var i = 0; i < this.solvuku.tiles.length; i++) {
        var tile = this.solvuku.tiles[i];
        if(tile.getSquare() == i) inSection.push(tile);
      }
      this._iterateSection(inSection);
    }
  }

  _iterateSection(inSection) {
    var numbersFound = [];
    for(var i = 0; i < inSection.length; i++) {
      var tile = inSection[i];
      if(parseInt(tile.element.value) > 0)
        numbersFound.push(parseInt(tile.element.value));
    }

    for(var number = 1; number < 10; number++) {
      if(numbersFound.indexOf(number) != -1) continue;

      var potentialHomes = [];
      for(var i = 0; i < inSection.length; i++) {
        var tile = inSection[i];
        if(tile.canBe(number)) potentialHomes.push(tile);
      }
      if(potentialHomes.length == 1) potentialHomes[0].element.value = number;
    }
  }

  isSolved() {
    for(var i = 0; i < this.solvuku.tiles.length; i++) {
      var tile = this.solvuku.tiles[i];
      if(!(tile.element.value > 0)) return false;
    }

    return true;
  }

}
