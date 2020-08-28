class SquareMatrixException extends Exception{
    constructor(message) {
        super(message);
    }
}
Array.prototype.isNumricMatrix = function() {
    return Array.isArray(this)
        && this.every((row) => Array.isArray(row))
        && this.every((row) => row.every((cell) => typeof(cell)=='number'));
}

Array.prototype.isSquareMatrix = function() {
    if(this.isNumricMatrix()) {
        return this.every((row) => row.length == this.length);
    }
    return false;
}
Array.prototype.squareMatrixGetDimension = function(){
    if(this.isSquareMatrix()) {
        return this.length;
    } else {
        throw new SuquareMatrixException('Must be SquareMatrix.');
    }
}
Array.prototype.squareMatrixValidIndex = function(x, y) {
    if(y == undefined) {
        return (0 <= x) && (x < this.squareMatrixGetDimension);
    } else {
        return this.squareMatrixValidIndex(x) && this.squareMatrixValidIndex(y);
    }
}
Array.prototype.squareMatrixAdd = function(u) {
}

Array.squareZeroMatrix = function(dimension) {
    return Array.from({length: dimension},
        (u, x) => Array.from({length: dimension}, (v, y) => 0));
}

Array.squareElementaryMatrix = function(dimension) {
    return Array.from({length: dimension},
        (u, x) => Array.from({length: dimension}, (v, y) => x == y ? 1 : 0));
}