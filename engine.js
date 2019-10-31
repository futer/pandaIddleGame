import { DrawImages } from './utils/drawImages.js';

export class GameEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.ctx.save();
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.restore();

        this.drawImage = new DrawImages(this.ctx, '', 123, 123, 1);
    }
}