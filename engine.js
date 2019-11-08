import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { DrawText } from './utils/drawText.js';
import { actionManagement } from './utils/actionManagement.js';

export class GameEngine {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.interval = 1000/60

        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);

        this.canvas.addEventListener('click', (event) => {
            actionManagement(event, 'attack_monster');
        });

        setInterval(() => {

            
            enemy_list.forEach(element => {
                new DrawMonster(this.ctx, 'red_monster', (this.width / 2) - (element.width / 2) , (this.height / 2) - (element.height / 2), element.width, element.height, null, {element});
                new DrawText(this.ctx, (this.width / 2), (this.height /1.3)).drawText(`${element.losthp}/${element.hp}`, 'black', 'Arial', 40, false);
            });
        }, this.interval);


        

        

    }
}