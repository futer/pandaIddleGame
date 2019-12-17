import { enemy_list } from './utils/enemyList.js';
import { actionManagement, clickAction } from './utils/actionManagement.js';
import { playerOptions } from './utils/playerOptions.js';
import { drawAllBackgroundImage, drawAllText } from './utils/drawUIGame.js';
import { getGamaData, setGameData } from './utils/gameData.js';
import { showShopMenu, drawShopButton, shopProp } from './utils/shopMenu.js';
import { notificationText, showNotification } from './utils/notification.js';
import { generateButton, keyDown, drawKeyButton, nextLevel, drawedMonster, setMonsterInstance, drawMonster } from './utils/monsterAction.js';
import { DrawOnlyText, drawImage } from './utils/drawFunctions.js';

export let gameEnd = false;

export class GameEngine {
    constructor(ctx, canvas) {

        //restart game
        setGameData(false);

        for (var propt in playerOptions) {
            playerOptions[propt] = JSON.parse(getGamaData())[propt];
        }

        setMonsterInstance(ctx);
        generateButton();

        document.addEventListener('keyup', (key) => {
            actionManagement(key, 'attack_monster', keyDown, ctx);
            generateButton();
        });

        document.addEventListener('click', (event) => {
            clickAction(event);
        });

        const update = setInterval(() => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAllBackgroundImage(ctx);

            if (playerOptions.level === enemy_list.length) {
                clearInterval(update);
                this.finishGame();
            } else {
                nextLevel();
                drawMonster(ctx);

                if (drawedMonster.monsterOption.bossFight) {
                    DrawOnlyText(ctx, 110, 160, 'BOSS FIGHT', 'blue', 'Bubbleboddy', 40);
                }

                drawAllText(ctx, canvas, keyDown);

                drawShopButton(ctx);
                drawKeyButton(ctx);

                if (drawedMonster.monsterOption.isBlood) {
                    drawImage(ctx, 'splash-blood', 125, 270, 150, 150, null);
                    setTimeout(() => {
                        drawedMonster.monsterOption.isBlood = false;
                    }, 100);
                }

                if (shopProp.isOpen) {
                    showShopMenu(ctx, canvas);
                }
                if (notificationText) {
                    showNotification(ctx);
                }
            }
        }, 100);
    }
}