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
    shopProp.isOpen = true;

    drawImage(ctx, 'shopTable', 50, 90, 300, 500, null);
    drawImage(ctx, 'closeCircleButton', 300, 90, 50, 50, null);

    drawImage(ctx, 'prev', 50, 520, 50, 50, null);
    drawImage(ctx, 'next', 300, 520, 50, 50, null);

    drawAllItems(ctx);

    canvas.addEventListener('click', (evt) => {
        itemsList['tab1'].forEach((element, index) => {
            if (evt.layerX > element.startX && evt.layerX < element.endX && evt.layerY > element.startY && evt.layerY < element.endY && !element.isBought) {
                if (playerOptions.gold >= element.costs) {
                    const playerData = JSON.parse(getGamaData());

                    itemsList['tab1'][index] = {
                        ...element,
                        isBought: true,
                    };
                    playerOptions.attack += element.damage;
                    playerOptions.gold -= element.costs;

                    saveToLocalStorage('player_data', JSON.stringify({
                        ...playerData,
                        attack: playerOptions.attack,
                        gold: playerOptions.gold,
                        items: [...playerData.items, itemsList['tab1'][index]],
                    }));

                } else {
                    setNotificationText('Not enought of gold');
                    setTimeout(() => {
                        setNotificationText(null);
                    }, 3000);
                }                   
            }
        });
    });

    canvas.addEventListener('click', (event) => {
        if (event.layerX > 300 && event.layerX < 350 && event.layerY > 90 && event.layerY < 140 && shopProp.isOpen) {
            actionManagement(event, 'closeShop', null);
        }
    });

}

function drawAllItems(ctx) {
    let newRow = 130;
    let x = 85;

    itemsList['tab1'].forEach((ele, index) => {
        playerOptions.items.forEach((ele2) => {
            if (ele2.isBought && ele.name === ele2.name) {
                itemsList['tab1'][index] = ele2;
            }
        });
    });

    itemsList['tab1'].forEach((element, index) => {
        let divided = (index + 1) % 3 === 0;

        let buttonColor = element.isBought ? 'button_true' : 'button_false';

        drawImage(ctx, buttonColor, x, newRow, 65, 65, null);
        drawImage(ctx, element.name, x + 15, newRow + 15, 30, 30, null);
        DrawOnlyText(ctx, x + 15, newRow + 80, `${element.costs}$`, 'white', 'Arial', 16);
        itemsList['tab1'][index] = {
            ...itemsList['tab1'][index],
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