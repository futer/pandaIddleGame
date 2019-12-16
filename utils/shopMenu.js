import { itemsList } from './itemsList.js';
import { playerOptions } from './playerOptions.js';
import { drawImage } from './drawImages.js';
import { DrawOnlyText } from './drawText.js';
import { getGamaData } from './gameData.js';
import { shopProp } from '../engine.js';
import { actionManagement } from './actionManagement.js';
import { saveToLocalStorage } from './localStorage.js';
import { setNotificationText } from './notification.js';

export function showShopMenu(ctx, canvas) {
    let clickOnce = false;
    shopProp.isOpen = true;

    drawImage(ctx, 'shopTable', 50, 90, 300, 500, null);
    drawImage(ctx, 'closeCircleButton', 300, 90, 50, 50, null);

    if (shopProp.tab !== 1) {
        drawImage(ctx, 'prev', 70, 510, 50, 50, null);
    }

    if (typeof itemsList[shopProp.tab + 1] !== "undefined") {
        drawImage(ctx, 'next', 270, 510, 50, 50, null);
    }

    drawAllItems(ctx);

    canvas.addEventListener('click', (event) => {
        const playerData = JSON.parse(getGamaData());
        itemsList[shopProp.tab].forEach((element, index) => {
            if (event.layerX > element.startX && event.layerX < element.endX && event.layerY > element.startY && event.layerY < element.endY && !element.isBought) {
                if (playerOptions.gold >= element.costs) {

                    itemsList[shopProp.tab][index] = {
                        ...element,
                        isBought: true,
                    };

                    playerOptions.attack += element.damage;
                    playerOptions.gold -= element.costs;
                    playerOptions.background = element.isBackground ? element.name : playerOptions.background;

                    saveToLocalStorage('player_data', JSON.stringify({
                        ...playerData,
                        attack: playerOptions.attack,
                        gold: playerOptions.gold,
                        items: [...playerData.items, itemsList[shopProp.tab][index]],
                        background: element.isBackground ? element.name : playerOptions.background
                    }));

                } else {
                    setNotificationText('Not enought of gold');
                    setTimeout(() => {
                        setNotificationText(null);
                    }, 3000);
                }
            } else if (event.layerX > element.startX && event.layerX < element.endX && event.layerY > element.startY && event.layerY < element.endY && element.isBought & element.isBackground) {
                playerOptions.background = element.isBackground ? element.name : playerOptions.background;
                saveToLocalStorage('player_data', JSON.stringify({
                    ...playerData,
                    background: element.isBackground ? element.name : playerOptions.background
                }));
            }
        });
        if(!clickOnce) {
            if (event.layerX > 300 && event.layerX < 350 && event.layerY > 90 && event.layerY < 140 && shopProp.isOpen) {
                clickOnce = true
                actionManagement(event, 'closeShop', null);
            } else if (event.layerX >= 270 && event.layerX <= 315 && event.layerY >= 510 && event.layerY <= 560 && shopProp.isOpen && typeof itemsList[shopProp.tab + 1] !== "undefined") {
                actionManagement(event, 'changeTab', '+');
                clickOnce = true
            } else if (event.layerX >= 70 && event.layerX <= 120 && event.layerY >= 510 && event.layerY <= 560 && shopProp.isOpen && shopProp.tab !== 1) {
                actionManagement(event, 'changeTab', '-');
                clickOnce = true
            }
        }
    });
}

function drawAllItems(ctx) {
    let newRow = 130;
    let x = 85;

    itemsList[shopProp.tab].forEach((ele, index) => {
        playerOptions.items.forEach((ele2) => {
            if (ele2.isBought && ele.name === ele2.name) {
                itemsList[shopProp.tab][index] = ele2;
            }
        });
    });

    itemsList[shopProp.tab].forEach((element, index) => {
        let divided = (index + 1) % 3 === 0;

        let buttonColor = element.isBought ? 'button_true' : 'button_false';

        drawImage(ctx, buttonColor, x, newRow, 65, 65, null);
        drawImage(ctx, element.name, x + 15, newRow + 15, 30, 30, null);
        DrawOnlyText(ctx, x + 15, newRow + 80, `${element.costs}$`, 'white', 'Arial', 16);
        itemsList[shopProp.tab][index] = {
            ...itemsList[shopProp.tab][index],
            startX: x,
            endX: x + 65,
            startY: newRow,
            endY: newRow + 65,
        };

        if (divided) {
            newRow += 100;
            x = 85;
        } else {
            x += 85;
        }
    });
}

export function drawShopButton(ctx) {
    drawImage(ctx, 'table', 140, 30, 120, 30, null);
    DrawOnlyText(ctx, 185, 52, 'SHOP', 'white', 'Bubbleboddy', 16);
}