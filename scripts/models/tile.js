class SolvukuTile {

  constructor(solvuku, element, x, y) {
    this.solvuku = solvuku;
    this.element = element;
    this.x = x;
    this.y = y;

    this.onChange = this.onChange.bind(this);
    this._registerEventListeners();
  }

  _registerEventListeners() {
    this.element.addEventListener("keypress", this.onChange);
  }

  onChange(evt) {
    if(evt.charCode < 49 || evt.charCode > 57 || this.element.value > 0) {
      evt.preventDefault();
      return;
    }
  }

  getSquare() {
    if(this.y < 3 && this.x < 3) return 0;
		if(this.y < 3 && this.x < 6) return 1;
		if(this.y < 3 && this.x < 9) return 2;
		if(this.y < 6 && this.x < 3) return 3;
		if(this.y < 6 && this.x < 6) return 4;
		if(this.y < 6 && this.x < 9) return 5;
		if(this.y < 9 && this.x < 3) return 6;
		if(this.y < 9 && this.x < 6) return 7;
		if(this.y < 9 && this.x < 9) return 8;

		return -1; //Default
  }

  canBe(value) {
    //Can't change value if a value is already assigned or not within range
    if(value < 1 || value > 9 || parseInt(this.element.value) >= 1) return false;

    for(var i = 0; i < this.solvuku.tiles.length; i++) {
      var tile = this.solvuku.tiles[i];
      var val = parseInt(tile.element.value);
      if(tile.x == this.x && val == value) return false;
      if(tile.y == this.y && val == value) return false;
      if(tile.getSquare() == this.getSquare() && val == value) return false;
    }

    return true;
  }

}
