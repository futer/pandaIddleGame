import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { DrawText } from './utils/drawText.js';
import { actionManagement } from './utils/actionManagement.js';
import { getFromLocalStorage, saveToLocalStorage } from './utils/localStorage.js';
import { playerOptions } from './utils/playerOptions.js';

export let drawedMonster = null;

export class GameEngine {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;

        this.counter = 0;
        this.frame_width = 990;
        this.frame_height = 681;

        //restart game
        this.setGameData(false);

        this.monsterNumber = JSON.parse(this.getGamaData()).level;
        playerOptions.gold = JSON.parse(this.getGamaData()).gold;

        this.interval = 1000 / 60

        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);

        this.setMonsterInstance();

        this.canvas.addEventListener('click', (event) => {
            this.actionMgnFc(event, 'attack_monster');
            console.log(this.monsterNumber);
        });

        setInterval(() => {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);
            drawImage(this.ctx, 'coin', 10, 10, 25, 25, null);
            drawImage(this.ctx, 'monster1', 10, 10, 25, 25, null);

            this.nextLevel();

            this.drawMonster();

            new DrawText(this.ctx, (this.width / 2), (this.height / 1.3)).drawText(`${enemy_list[this.monsterNumber].losthp}/${enemy_list[this.monsterNumber].hp}`, 'black', 'Arial', 40, false);
            new DrawText(this.ctx, 60, 28).drawText(`Gold: ${playerOptions.gold}`, 'black', 'Arial', 15, false);
        }, this.interval);
    }

    setMonsterInstance() {
        drawedMonster = new DrawMonster(this.ctx, 'monster1', 100, 100, enemy_list[this.monsterNumber]);
    }

    drawMonster() {
        let frame = Math.floor(this.counter % 4);
        drawedMonster.drawMonsterImage(frame, this.frame_width, this.frame_height);
        this.counter = this.counter + .25;
    }

    nextLevel() {
        if (drawedMonster.monsterOption.losthp <= 0) {
            this.setPlayerGold(enemy_list[this.monsterNumber].min_gold, enemy_list[this.monsterNumber].max_gold);
            this.killMonster();
            this.setMonsterInstance();
        }
    };

    actionMgnFc(event, action) {
        actionManagement(event, action);
    }

    setGameData(restart) {
        if (restart) {
            saveToLocalStorage('player_data', JSON.stringify({
                level: 0,
                gold: 0,
                achivment: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            }));
        } else {
            if (getFromLocalStorage('player_data') === undefined || getFromLocalStorage('player_data') === null) {
                saveToLocalStorage('player_data', JSON.stringify({
                    level: 0,
                    gold: 0,
                    achivment: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                }));
            } else {
                this.getGamaData()
            }
        }
    }

    getGamaData() {
        return getFromLocalStorage('player_data');
    }

    killMonster() {
        const playerData = JSON.parse(this.getGamaData());
        saveToLocalStorage('player_data', JSON.stringify({
            ...playerData,
            level: this.monsterNumber = parseInt(this.monsterNumber) + 1,
            gold: playerOptions.gold,
        }));
        this.getGamaData();
    }

    setPlayerGold(minGold, maxGold) {
        const gold = Math.floor(Math.random() * maxGold) + minGold
        playerOptions.gold += gold;
    }
}