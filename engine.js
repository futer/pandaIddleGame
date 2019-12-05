import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { DrawOnlyText } from './utils/drawText.js';
import { actionManagement } from './utils/actionManagement.js';
import { getFromLocalStorage, saveToLocalStorage } from './utils/localStorage.js';
import { playerOptions } from './utils/playerOptions.js';
import { drawAllBackgroundImage } from './utils/drawAllBackgroundImage.js';
import { keyCodeTable } from './utils/eventCodeKeys.js';
import { buttonPlacement } from './utils/buttonPlacement.js';

import { itemsList } from './utils/itemsList.js';

export let drawedMonster = null;
export let gameEnd = false;
export let keyDown = null;
export let greenButton = null;
export let fourChoosenKey = [];
export let shopProp = {
    isOpen: false,
};

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

        for (var propt in playerOptions) {
            playerOptions[propt] = JSON.parse(this.getGamaData())[propt];
        }

        this.showRestartGameAfterFinishAndLoad()

        this.setMonsterInstance();

        document.addEventListener('keydown', (key) => {
            this.actionMgnFc(key, 'attack_monster', keyDown);
            this.generateButton();
        });

        document.addEventListener('click', (event) => {
            if (event.layerX > 140 && event.layerX < 260 && event.layerY > 30 && event.layerY < 60) {
                this.actionMgnFc(event, 'openShop', null);
            }
        });

        this.generateButton();

        const update = setInterval(() => {
            if (!gameEnd) {

                this.ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawAllBackgroundImage(this.ctx);

                if (playerOptions.level === enemy_list.length) {
                    clearInterval(update);
                    this.finishGame();
                } else {
                    drawImage(this.ctx, 'coin', 14, 3, 25, 25, null);
                    drawImage(this.ctx, 'attack', 280, 3, 25, 25, null);

                    this.nextLevel();
                    this.drawMonster();

                    if (drawedMonster.monsterOption.bossFight) {
                        DrawOnlyText(this.ctx, 110, 160, 'BOSS FIGHT', 'blue', 'Bubbleboddy', 40);
                    }

                    DrawOnlyText(this.ctx, 140, (this.height / 1.5), `${enemy_list[playerOptions.level].losthp}/${enemy_list[playerOptions.level].hp}`, 'black', 'Bubbleboddy', 40);
                    DrawOnlyText(this.ctx, 40, 22, `Gold: ${playerOptions.gold}`, 'white', 'Bubbleboddy', 18);
                    DrawOnlyText(this.ctx, 305, 22, `Attack: ${playerOptions.attack}`, 'white', 'Bubbleboddy', 18);

                    this.drawShopButton();
                    this.drawKeyButton();

                    if (shopProp.isOpen) {
                        this.showShopMenu();
                    }

                }
            }

        }, 100);
    }

    setMonsterInstance() {
        drawedMonster = new DrawMonster(this.ctx, enemy_list[playerOptions.level].monster_name, 100, 100, enemy_list[playerOptions.level], playerOptions.level);
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
            this.setPlayerGold(enemy_list[playerOptions.level].min_gold, enemy_list[playerOptions.level].max_gold);
            this.killMonster();
            this.setMonsterInstance();
        }
    };

    actionMgnFc(event, action, param) {
        actionManagement(event, action, param);
    }

    setGameData(restart) {
        if (restart) {
            saveToLocalStorage('player_data', JSON.stringify(playerOptions));
        } else {
            if (getFromLocalStorage('player_data') === undefined || getFromLocalStorage('player_data') === null) {
                saveToLocalStorage('player_data', JSON.stringify(playerOptions));
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
            level: playerOptions.level = parseInt(playerOptions.level) + 1,
            gold: playerOptions.gold,
        }));
        this.getGamaData();
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
        DrawOnlyText(this.ctx, 60, 200, 'You finished game!!', 'black', 'Bubbleboddy', 36);

        drawImage(this.ctx, 'table', 65, 270, 280, 45, null);
        DrawOnlyText(this.ctx, 80, 300, `Your collected gold is ${playerOptions.gold}`, 'white', 'Bubbleboddy', 18);

        drawImage(this.ctx, 'table', 60, 380, 280, 45, null);
        DrawOnlyText(this.ctx, 80, 410, `Your attack is ${playerOptions.attack}`, 'white', 'Bubbleboddy', 18);

        drawImage(this.ctx, 'table', 60, 480, 280, 45, null);
        DrawOnlyText(this.ctx, 150, 510, `Restart game`, 'white', 'Bubbleboddy', 22);

        const clickCords = {
            x: 60,
            y: 480,
            endX: 540,
            endY: 525,
        }

        this.canvas.addEventListener('click', (event) => {
            this.actionMgnFc(event, 'restart_game', clickCords);
        });

        console.clear();
    }

    generateButton() {
        fourChoosenKey = [];
        greenButton = Math.floor(Math.random() * 4) + 0;
        for (let index = 0; index < 4; index++) {
            fourChoosenKey.push(keyCodeTable[Math.floor(Math.random() * keyCodeTable.length) + 0]);
        }
        keyDown = fourChoosenKey[Math.floor(Math.random() * fourChoosenKey.length) + 0];
    }

    drawKeyButton() {
        buttonPlacement.forEach((btn, index) => {
            if (index === greenButton) {
                drawImage(this.ctx, 'button_true', btn.x, btn.y, 45, 45, null);
                DrawOnlyText(this.ctx, btn.x + 15, btn.y + 27, keyDown[keyDown.length - 1], 'red', 'Bubbleboddy', 22);

            } else {
                drawImage(this.ctx, 'button_false', btn.x, btn.y, 45, 45, null);
                DrawOnlyText(this.ctx, btn.x + 15, btn.y + 27, fourChoosenKey[index][fourChoosenKey[index].length - 1], 'black', 'Bubbleboddy', 22);
            }
        });
    }

    drawShopButton() {
        drawImage(this.ctx, 'table', 140, 30, 120, 30, null);
        DrawOnlyText(this.ctx, 185, 52, 'SHOP', 'white', 'Bubbleboddy', 16);
    }

    showShopMenu() {
        shopProp.isOpen = true;

        drawImage(this.ctx, 'shopTable', 50, 90, 300, 500, null);
        drawImage(this.ctx, 'closeCircleButton', 300, 90, 50, 50, null);
        
        let newRow = 130;
        let x = 85;

        itemsList.forEach((element, index) => {
            let divided = (index + 1) % 3 === 0;
            let buttonColor = element.isBought ? 'button_true' : 'button_false';

            drawImage(this.ctx, buttonColor, x, newRow, 65, 65, null);
            drawImage(this.ctx, element.name, x + 15, newRow + 15, 30, 30, null);
            DrawOnlyText(this.ctx, x + 15, newRow + 80, `${element.costs}$`, 'white', 'Arial', 16);

            if (divided) {
                newRow += 100;
                x = 85;                
            } else {
                x += 85;
            }

            
        });
        
        this.canvas.addEventListener('click', (event) => {
            if (event.layerX > 300 && event.layerX < 350 && event.layerY > 90 && event.layerY < 140 && shopProp.isOpen) {
                actionManagement(event, 'closeShop', null);
            }
        });

    }

    closeShopMenu() {
        shopProp.isOpen = false;
    }

    showRestartGameAfterFinishAndLoad() {
        if (playerOptions.level === enemy_list.length) {
            this.ctx.clearRect(0, 0, this.width, this.height);
            drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);

            drawImage(this.ctx, 'table', 60, 280, 280, 45, null);

            DrawOnlyText(this.ctx, 150, 310, 'Restart Game', 'white', 'Bubbleboddy', 22);

            const clickCords = {
                x: 60,
                y: 280,
                endX: 340,
                endY: 325,
            }
            this.canvas.addEventListener('click', (event) => {
                this.actionMgnFc(event, 'restart_game', clickCords);
            });

        }

    }


}
