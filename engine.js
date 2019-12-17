import { drawImage } from './utils/drawImages.js';
import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { DrawOnlyText } from './utils/drawText.js';
import { actionManagement } from './utils/actionManagement.js';
import { saveToLocalStorage } from './utils/localStorage.js';
import { playerOptions } from './utils/playerOptions.js';
import { drawAllBackgroundImage } from './utils/drawAllBackgroundImage.js';
import { keyCodeTable } from './utils/eventCodeKeys.js';
import { buttonPlacement } from './utils/buttonPlacement.js';
import { generateRandomLevel } from './utils/generateRandomLevel.js';
import { getGamaData, setGameData } from './utils/gameData.js';
import { showShopMenu, drawShopButton } from './utils/shopMenu.js';
import { notificationText, showNotification } from './utils/notification.js';
import { clickAction } from './utils/clickAction.js';
import { addPlayerAttack, setPlayerGold } from './utils/playerAction.js';

export let drawedMonster = null;
export let gameEnd = false;
export let greenButton = null;
export let fourChoosenKey = [];
export let killBossAttackReward = 5;
export let keyDown = null;
export let shopProp = {
    tab: 1,
    isOpen: false,
};

export class GameEngine {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;

        this.shift = 0;
        this.frameWidth = 400;
        this.frameHeight = 400;
        this.totalFrames = 4;
        this.currentFrame = 0;

        //restart game
        setGameData(false);

        for (var propt in playerOptions) {
            playerOptions[propt] = JSON.parse(getGamaData())[propt];
        }

        this.setMonsterInstance();
        this.generateButton();

        document.addEventListener('keyup', (key) => {
            actionManagement(key, 'attack_monster', keyDown, this.ctx);
            this.generateButton();
        });

        document.addEventListener('click', (event) => {
            clickAction(event);
        });

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

                    DrawOnlyText(this.ctx, 40, 22, `Gold: ${playerOptions.gold}`, 'white', 'Bubbleboddy', 18);
                    DrawOnlyText(this.ctx, 305, 22, `Attack: ${playerOptions.attack}`, 'white', 'Bubbleboddy', 18);

                    DrawOnlyText(this.ctx, 20, 60, `Level: ${playerOptions.level + 1}`, 'black', 'Bubbleboddy', 18);

                    DrawOnlyText(this.ctx, 140, (this.height / 1.4), `${enemy_list[playerOptions.level].losthp}/${enemy_list[playerOptions.level].hp}`, 'black', 'Bubbleboddy', 40);
                    DrawOnlyText(this.ctx, 190, 400, keyDown[keyDown.length - 1], 'white', 'Bubbleboddy', 50);

                    drawShopButton(this.ctx);
                    this.drawKeyButton();

                    if (drawedMonster.monsterOption.isBlood) {
                        drawImage(this.ctx, 'splash-blood', 125, 270, 150, 150, null);
                        setTimeout(() => {
                            drawedMonster.monsterOption.isBlood = false;
                        }, 100);
                    }

                    if (shopProp.isOpen) {
                        showShopMenu(this.ctx, this.canvas);
                    }
                    if (notificationText) {
                        showNotification(this.ctx);
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
            generateRandomLevel();
            saveToLocalStorage('monster_list', JSON.stringify(enemy_list));
            drawedMonster.monsterOption.bossFight ? addPlayerAttack(killBossAttackReward) : false;
            setPlayerGold(enemy_list[playerOptions.level].min_gold, enemy_list[playerOptions.level].max_gold);
            this.killMonster();
            this.setMonsterInstance();
        }
    };

    killMonster() {
        const playerData = JSON.parse(getGamaData());
        saveToLocalStorage('player_data', JSON.stringify({
            ...playerData,
            level: playerOptions.level = parseInt(playerOptions.level) + 1,
            gold: playerOptions.gold,
        }));
        getGamaData();
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
}
