import { enemy_list } from './utils/enemyList.js';
import { DrawMonster } from './utils/drawMonster.js';
import { actionManagement, clickAction } from './utils/actionManagement.js';
import { playerOptions } from './utils/playerOptions.js';
import { drawAllBackgroundImage } from './utils/drawAllBackgroundImage.js';
import { getGamaData, setGameData } from './utils/gameData.js';
import { showShopMenu, drawShopButton, shopProp } from './utils/shopMenu.js';
import { notificationText, showNotification } from './utils/notification.js';
import { generateButton, keyDown, drawKeyButton, nextLevel, drawedMonster, setMonsterInstance, drawMonster} from './utils/monsterAction.js';
import { DrawOnlyText, drawImage } from './utils/drawFunctions.js';

export let gameEnd = false;

export class GameEngine {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;

        //restart game
        setGameData(false);

        for (var propt in playerOptions) {
            playerOptions[propt] = JSON.parse(getGamaData())[propt];
        }

        setMonsterInstance(this.ctx);
        generateButton();

        document.addEventListener('keyup', (key) => {
            actionManagement(key, 'attack_monster', keyDown, this.ctx);
            generateButton();
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

                    nextLevel();
                    drawMonster();

                    if (drawedMonster.monsterOption.bossFight) {
                        DrawOnlyText(this.ctx, 110, 160, 'BOSS FIGHT', 'blue', 'Bubbleboddy', 40);
                    }

                    DrawOnlyText(this.ctx, 40, 22, `Gold: ${playerOptions.gold}`, 'white', 'Bubbleboddy', 18);
                    DrawOnlyText(this.ctx, 305, 22, `Attack: ${playerOptions.attack}`, 'white', 'Bubbleboddy', 18);

                    DrawOnlyText(this.ctx, 20, 60, `Level: ${playerOptions.level + 1}`, 'black', 'Bubbleboddy', 18);

                    DrawOnlyText(this.ctx, 140, (this.height / 1.4), `${enemy_list[playerOptions.level].losthp}/${enemy_list[playerOptions.level].hp}`, 'black', 'Bubbleboddy', 40);
                    DrawOnlyText(this.ctx, 190, 400, keyDown[keyDown.length - 1], 'white', 'Bubbleboddy', 50);

                    drawShopButton(this.ctx);
                    drawKeyButton(this.ctx);

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
}