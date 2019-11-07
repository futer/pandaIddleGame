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
        new DrawMonster(this.ctx, 'red_monster', (this.width / 2) - 125 , (this.height / 2) - 75, 239, 152, null, {});


        enemy_list.forEach(element => {
            new DrawMonster(this.ctx, 'red_monster', (this.width / 2) - (element.width / 2) , (this.height / 2) - (element.height / 2), element.width, element.height, null, {element});
            console.log(element.hp);
        });
    }
}