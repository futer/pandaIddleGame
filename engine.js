import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { DrawText } from './utils/drawText.js';
import { actionManagement } from './utils/actionManagement.js';
import { getFromLocalStorage, saveToLocalStorage } from './utils/localStorage.js';

export let drawedMonster = null;

export class GameEngine {
    constructor(ctx, canvas, width, height) {   
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        
        this.monsterNumber = this.getLocalLevel();
        this.interval = 1000/60


        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);

        this.canvas.addEventListener('click', (event) => {
            this.actionMgnFc(event, 'attack_monster');
        });

        setInterval(() => {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);
            this.drawMonster();

            if (drawedMonster.monsterOption.losthp <= 0) {
                this.monsterNumber += 1;
            }

            new DrawText(this.ctx, (this.width / 2), (this.height /1.3)).drawText(`${enemy_list[this.monsterNumber].losthp}/${enemy_list[this.monsterNumber].hp}`, 'black', 'Arial', 40, false);
        }, this.interval);
    }

    drawMonster() {
        drawedMonster = new DrawMonster(this.ctx, 'red_monster', (this.width / 2) - (enemy_list[this.monsterNumber].width / 2) , (this.height / 2) - (enemy_list[this.monsterNumber].height / 2), enemy_list[this.monsterNumber].width, enemy_list[this.monsterNumber].height, null, enemy_list[this.monsterNumber]);
    }

    nextLevel() {

    };

    actionMgnFc(event, action) {
        actionManagement(event, action);
    }

    getLocalLevel() {
        if(getFromLocalStorage('level') === undefined || getFromLocalStorage('level') === null) {
            saveToLocalStorage('level', 0);
            this.monsterNumber = 0;
        } else {
            return getFromLocalStorage('level');
        }
    }
}