export default class Hello {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

/**
 * 
 */
    getNumber(name: string) {
        return this.x + this.y;
    }
}
