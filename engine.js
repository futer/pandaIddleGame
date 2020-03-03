import { actionManagement, clickAction } from './utils/actionManagement.js';
import { playerOptions } from './utils/playerOptions.js';
import { drawAllBackgroundImage, drawAllText } from './utils/drawUIGame.js';
import { getGamaData, setGameData } from './utils/gameData.js';
import { showShopMenu, drawShopButton, shopProp } from './utils/shopMenu.js';
import { notificationText, showNotification } from './utils/notification.js';
import { generateButton, keyDown, drawKeyButton } from './utils/monsterAction.js';
import { drawMonster } from './utils/drawMonster.js';
import { showAchivmenMenu, achivmentProps } from './utils/achivmentActions.js';

export let gameEnd = false;
export let isKilled = false;

export class GameEngine {
    constructor(ctx, canvas) {

        setGameData();

        for (var propt in playerOptions) {
            playerOptions[propt] = JSON.parse(getGamaData())[propt];
        }

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
            drawMonster(ctx);

            drawAllText(ctx, canvas, keyDown);

            drawShopButton(ctx);
            drawKeyButton(ctx);

            if(achivmentProps.isOpen) {
                showAchivmenMenu(ctx);
            }


            if (shopProp.isOpen) {
                showShopMenu(ctx, canvas);
            }
            if (notificationText) {
                showNotification(ctx);
            }


        }, 100);
    }
}