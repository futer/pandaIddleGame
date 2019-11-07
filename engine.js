import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { DrawRectangle } from './utils/drawRectangle.js';

export class GameEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        
        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);
        new DrawRectangle(this.ctx, 75, 180, (this.width / 1.5), (this.height / 2), 'black', 0.4, true);

        enemy_list.forEach(element => {
            new DrawMonster(this.ctx, 'red_monster', (this.width / 2) - (element.width / 2) , (this.height / 2) - (element.height / 2), element.width, element.height, null, {element});
        });
    }
}