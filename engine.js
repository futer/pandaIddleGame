import { drawImage } from './utils/drawImages.js';
import { LoadImages } from './utils/loadImages.js';
import { DrawMonster } from './utils/drawMonster.js';

export class GameEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        
        
        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);
        drawImage(this.ctx, 'enemy_island', 0, 0, 100, 100), null;
        this.ctx.scale(0.5, 0.3);
        new DrawMonster(this.ctx, 'red_monster', 150, 150, 990, 681, 0.5, {});

        // new DrawImages(this.ctx, '', 123, 123, 1);
    }
}