const DEFAULT_SIZE = 30;

Array.prototype.isSquareMatrix = function() {
    return Array.isArray(this) && this.every((row) => Array.isArray(row))
        && this.every((ro))
}
Array.prototype.matrixMap

class SquaredMatrix {

    //#region Public Properties
    /**
     * Getter for matrix.
     */
    get matrix() {
        return this._matrix;
    }

    /**
     * Getter for size of matrix.
     */
    get size() {
        return this._matrix.length;
    }
    /**
     * get value of matrix
     * if out of boundary return 0.
     * @param {number} x coordinate x
     * @param {number} y cordinate y
     */
    getValue(x, y) {
        if(this.isValidIndex(x, y)) {
            return this.matrix[x][y];
        }
        return 0;
    }

    /**
     * set value of matrix.
     * if out of boudary, ignore.
     * @param {number} x cordinate x
     * @param {number} y cordinate y
     * @param {number} value value to set.
     */
    setValue(x, y, value) {
        if(this.isValidIndex(x,y)) {
            this._matrix[x][y] = value;
        }
    }
    //#endregion

    //#region constructor
    /**
     * the constructor of square matrix
     * @param {undefined | number | SquaredMatrix | Array} args constructor argument.
     */
    constructor(args) {
        if(args == undefined) {
            this.standardConstructor(DEFAULT_SIZE);
        } else if( typeof args == 'number') {
            this.standardConstructor(args);
        } else if(args instanceof SquaredMatrix) {
            this.cloneConstructor(args);
        } else if (Array.isArray(args) && args.every((row)=>Array.isArray(row))) {
            this.matrixConstructor(args);
        } else {
            throw new Exception('Invalid Argument Type.');
        }
    }
    //#endregion

    map(fn) {
        return new SquaredMatrix(
            this.matrix.map(
                (row, ix) => row.map((u, iy) => fn(u, ix, iy))
            )
        );
    }

    forEach(fn) {
        this._matrix = this._matrix.map((row, ix)=>
            row.map((item, iy)=> fn(item, ix, iy)));
    }

    static ElementalMatrix(dimension) {

    }

    static ZeroMatrix(dimension) {
        
    }

    //#region private methods
    isValidIndex(x, y) {
        if(y == undefined) {
            return (0 <= x) && (x < this.size);
        } else {
            return this.isValidIndex(x) && this.isValidIndex(y);
        }
    }

    standardConstructor(size) {
        if(size > 0) {
            this._matrix = Array.from({length: size},
                (vx, ix)=>Array.from({length: size}, (vy, iy)=>0));    
        }
        else {
            throw new Exception('Size MUST be positive number.');
        }
    }

    cloneConstructor(x) {
        this.matrixConstructor(x._matrix);
    }

    matrixConstructor(matrix) {
        if(matrix.every((row)=>row.length == matrix.length)) {
            this._matrix = Array.from({length: matrix.length},
                (vx, ix)=>Array.from({length: matrix.length}, (vy,iy)=>matrix[ix,iy]));    
        } else {
            throw new Exception('Matrix MUST be squared.');
        }
    }
    //#endregion

}
