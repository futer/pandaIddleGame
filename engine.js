import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { DrawText } from './utils/drawText.js';
import { actionManagement } from './utils/actionManagement.js';
import { getFromLocalStorage, saveToLocalStorage } from './utils/localStorage.js';
import { playerOptions } from './utils/playerOptions.js';
import { drawAllBackgroundImage } from './utils/drawAllBackgroundImage.js';
import { keyCodeTable } from './utils/eventCodeKeys.js';

const buttonPlacement = [
    {
        x: 110,
        y: 650,
    },
    {
        x: 160,
        y: 650,
    },
    {
        x: 210,
        y: 650,
    },
    {
        x: 260,
        y: 650,
    },
];

export let drawedMonster = null;
export let gameEnd = false;
export let keyDown = null;

export class GameEngine {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;

        this.shift = 0;
        this.frameWidth = 300;
        this.frameHeight = 206.33;
        this.totalFrames = 4;
        this.currentFrame = 0;


        //restart game
        this.setGameData(false);

        this.monsterNumber = JSON.parse(this.getGamaData()).level;
        playerOptions.gold = JSON.parse(this.getGamaData()).gold;
        playerOptions.attack = JSON.parse(this.getGamaData()).attack;
        playerOptions.achivment = JSON.parse(this.getGamaData()).achivment;

        this.monsterHPText = new DrawText(this.ctx, (this.width / 2), (this.height / 1.3));
        this.playerGold = new DrawText(this.ctx, 70, 22);
        this.playerAttack = new DrawText(this.ctx, 340, 22);
        this.bossFightText = new DrawText(this.ctx, (this.width / 2), 200);

        this.interval = 100;

        this.setMonsterInstance();

        this.canvas.addEventListener('click', (event) => {
            // this.actionMgnFc(event, 'attack_monster');
        });

        document.addEventListener('keydown', (key) => {
            this.actionMgnFc(key, 'attack_monster');
        });
        this.generateButton();

        let update = setInterval(() => {
            if (!gameEnd) {
                this.ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawAllBackgroundImage(this.ctx);

                if (this.monsterNumber === enemy_list.length) {
                    clearInterval(update);
                    this.finishGame();
                }

                drawImage(this.ctx, 'coin', 14, 3, 25, 25, null);
                drawImage(this.ctx, 'attack', 280, 3, 25, 25, null);
                this.nextLevel();
                this.drawMonster();

                if (drawedMonster.monsterOption.bossFight) {
                    this.bossFightText.drawText(`BOSS FIGHT`, 'blue', 'Bubbleboddy', 36, false);
                }

                this.monsterHPText.drawText(`${enemy_list[this.monsterNumber].losthp}/${enemy_list[this.monsterNumber].hp}`, 'black', 'Arial', 40, false);
                this.playerGold.drawText(`Gold: ${playerOptions.gold}`, 'white', 'Bubbleboddy', 18, false);
                this.playerAttack.drawText(`Attack: ${playerOptions.attack}`, 'white', 'Bubbleboddy', 18, false);

                this.drawKeyButton();
            }

        }, this.interval);
    }

    setMonsterInstance() {
        drawedMonster = new DrawMonster(this.ctx, enemy_list[this.monsterNumber].monster_name, 100, 100, enemy_list[this.monsterNumber], this.monsterNumber);
    }

    drawMonster() {
        drawedMonster.drawMonsterImage(this.shift, this.frameWidth, this.frameHeight);
        this.shift += this.frameWidth + 1;
        if (this.currentFrame == this.totalFrames) {
            this.shift = 0;
            this.currentFrame = 0;
        }

        this.currentFrame++;
    }

    nextLevel() {
        if (drawedMonster.monsterOption.losthp <= 0) {
            drawedMonster.monsterOption.bossFight ? this.addPlayerAttack(15) : false;
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
                attack: 10,
            }));
        } else {
            if (getFromLocalStorage('player_data') === undefined || getFromLocalStorage('player_data') === null) {
                saveToLocalStorage('player_data', JSON.stringify({
                    level: 0,
                    gold: 0,
                    achivment: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                    attack: 10,
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
        this.generateButton();
    }

    setPlayerGold(minGold, maxGold) {
        const gold = Math.floor(Math.random() * maxGold) + minGold;
        playerOptions.gold += gold;
    }

    addPlayerAttack(attackDamage) {
        const playerData = JSON.parse(this.getGamaData());
        const addedAttack = playerOptions.attack + attackDamage;

        saveToLocalStorage('player_data', JSON.stringify({
            ...playerData,
            attack: addedAttack,
        }));
        playerOptions.attack = addedAttack;
        this.getGamaData();
    }

    finishGame() {
        const finishGameText = new DrawText(this.ctx, (this.width / 2), 200);
        finishGameText.drawText('You finished game!!', 'black', 'Bubbleboddy', 36, false);

        const finishGameGold = new DrawText(this.ctx, (this.width / 2), 310);
        drawImage(this.ctx, 'table', 60, 280, 280, 45, null);
        finishGameGold.drawText(`Your collected gold is ${playerOptions.gold}`, 'white', 'Bubbleboddy', 22, false);

        const finishGameAttack = new DrawText(this.ctx, (this.width / 2), 410);
        drawImage(this.ctx, 'table', 60, 380, 280, 45, null);
        finishGameAttack.drawText(`Your attack is ${playerOptions.attack}`, 'white', 'Bubbleboddy', 22, false);
        console.clear();
    }

    generateButton() {
        const activeButton = Math.floor(Math.random() * 4) + 0;
        console.log(activeButton);
    }

    drawKeyButton() {
        buttonPlacement.forEach((btn) => {
            drawImage(this.ctx, 'button_false', btn.x, btn.y, 45, 45, null);
        });
    }


}
