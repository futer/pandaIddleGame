import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';

export class GameEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        console.log(this.width, this.height);;
        
        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);
        // drawImage(this.ctx, 'enemy_island', 0, 0, 100, 100), null;

        enemy_list.forEach(element => {
            console.log(element);
            new DrawMonster(this.ctx, 'red_monster', (this.width  * 0.4 + this.width) / 2 - 150 , (this.height  * 0.3 + this.height) - 150, 990, 681, 0.3, {});
        });
    }
}