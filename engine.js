import { drawImage } from './utils/drawImages.js';

export class GameEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        
        
        drawImage(this.ctx, 'game_background', 0, 0, 100, 120);

        // new DrawImages(this.ctx, '', 123, 123, 1);
    }
}