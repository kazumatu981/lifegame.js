DEFAULT_POWER_OF_DIFFUSION = 0.1;
DEFAULT_GROWTH_RATE = 1.0;

const SeedModles = {
    line: 'line',
    ramdom: 'random'
}
class LifeGame extends SquaredMatrix {

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

    constructor(args) {
        super(args);
        this.powerOfDiffusion = DEFAULT_POWER_OF_DIFFUSION;
        this.growthRate = DEFAULT_GROWTH_RATE;
    }

    

    growthFunc(u, x, y) {
        return (1 + this.growthRate) * u * (1 - u)
            + this.powerOfDiffusion * (this.getDifusion(x, y));
    }

    growUp() {
        this.forEach((u, ix, iy)=>this.growthFunc(u, ix, iy));
    }

    getDifusion(x, y) {
        return ((this.getValue(x + 1, y) - this.getValue(x, y)) - (this.getValue(x, y) - this.getValue(x - 1, y)))
        + (this.getValue(x, y + 1) - this.getValue(x, y)) - (this.getValue(x, y) - this.getValue(x, y-1));
    }
}