import { drawImage } from './utils/drawImages.js';
import { LoadImages } from './utils/loadImages.js';

export class GameEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        
        
        drawImage(this.ctx, 'game_background', 0, 0, 480, 700);
        drawImage(this.ctx, 'enemy_island', 0, 0, 100, 100);

        // new DrawImages(this.ctx, '', 123, 123, 1);
    }
}