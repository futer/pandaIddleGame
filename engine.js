import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { DrawRectangle } from './utils/drawRectangle.js';

export class GameEngine {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        
        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);
        new DrawRectangle(this.ctx, 75, 180, (this.width / 1.5), (this.height / 2), 'black', 0.4, true);

        this.canvas.addEventListener('click', (event) => {
            if (event.layerX >= 75 && event.layerX <= 340 && event.layerY >= 180 && event.layerY <= 530) {
                console.log(event.layerY);

            }
        });

        enemy_list.forEach(element => {
            new DrawMonster(this.ctx, 'red_monster', (this.width / 2) - (element.width / 2) , (this.height / 2) - (element.height / 2), element.width, element.height, null, {element});
        });
    }
}