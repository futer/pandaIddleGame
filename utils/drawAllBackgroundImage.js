import { drawImage } from './drawImages.js';

export class DrawAllBackgroundImage {
    constructor(ctx) {
        this.ctx = ctx;
        
        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);
        drawImage(this.ctx, 'panel_up', 0, -58, 400, 150, null);
        drawImage(this.ctx, 'panel_down', 0, 640, 400, 70, null);
    }
}