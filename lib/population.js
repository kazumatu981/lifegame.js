const DEFAULT_POWER_OF_DIFFUSION = 0.07;
const DEFAULT_GROWTH_RATE = 0.2;
const DEFAULT_CAPACITY = 1.0;
const DEFAULT_EXTERNAL_AFFECT = function(x, y) {
    return 0;
}
class Population extends SquareMatrix {
    get powerOfDiffusion() {
        return this._powerOfDiffusion;
    }

    set powerOfDiffusion(value) {
        this._powerOfDiffusion = value;
    }

    get growthRate() {
        return this._growthRate;
    }

    set growthRate(value) {
        this._growthRate = value;
    }

    get capacity() {
        return this._capacity;
    }

    set capacity(value) {
        this._capacity = value;
    }

    get externalAffect() {
        return this._externalAffect;
    }

    set externalAffect(value) {
        this._externalAffect = value;
    }

    constructor(args) {
        super(args);
        this.powerOfDiffusion = DEFAULT_POWER_OF_DIFFUSION;
        this.growthRate = DEFAULT_GROWTH_RATE;
        this.capacity = DEFAULT_CAPACITY;
        this.externalAffect = DEFAULT_EXTERNAL_AFFECT;
    }

    growthFunc(u, x, y) {
        return u
            + this.growthRate * this.getLogisticGrowth(x, y)
            + this.externalAffect(x, y)
            + this.powerOfDiffusion * (this.getDifusion(x, y));
    }

    growUp() {
        const clone = new Population(this.map((u,x,y)=>this.growthFunc(u, x, y)));

        clone.growthRate = this.growthRate;
        clone.powerOfDiffusion = this.powerOfDiffusion;
        clone.capacity = this.capacity;
        clone.externalAffect = this.externalAffect;

        return clone;
    }

    getDifusion(x, y) {
        return ((this.getValue(x + 1, y) - this.getValue(x, y)) - (this.getValue(x, y) - this.getValue(x - 1, y)))
        + (this.getValue(x, y + 1) - this.getValue(x, y)) - (this.getValue(x, y) - this.getValue(x, y-1));
    }

    getLogisticGrowth(x, y) {
        return this.getValue(x, y) * ( 1 - this.getValue(x, y) / this.capacity );
    }
}