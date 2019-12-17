import { drawedMonster } from './monsterAction.js';
import { drawImage } from './drawFunctions.js';
import { playerOptions } from './playerOptions.js';
import { shopProp } from './shopMenu.js';
import { itemsList } from './itemsList.js';

export function actionManagement(action, type, param, ctx) {

    switch (true) {
        case type === 'attack_monster':
            if (action.code === param) {
                drawedMonster.monsterOption.losthp -= playerOptions.attack;
                drawedMonster.monsterOption.isBlood = true;
            } else {
                let perctentage = (drawedMonster.monsterOption.hp * 30) / 100;
                drawImage(ctx, 'heal', 100, 200, 200, 300, null);

                if ((drawedMonster.monsterOption.losthp + perctentage) > drawedMonster.monsterOption.hp) {
                    drawedMonster.monsterOption.losthp = drawedMonster.monsterOption.hp;
                } else {
                    drawedMonster.monsterOption.losthp += perctentage;
                }
            }
            break;

        case type === 'restart_game':
            if (event.layerX > param.x && event.layerX < param.endX && event.layerY > param.y && event.layerY < param.endY) {
                localStorage.removeItem('player_data');
                location.reload(true);
            }

            break;

        case type === 'openShop':
            shopProp.isOpen = true;
            break;

        case type === 'closeShop':
            shopProp.isOpen = false;
            break;

        case type === 'changeTab':
            if (param === '+') {    
                shopProp.tab += 1;
            } else if (param === '-') {
                shopProp.tab -= 1;
            }
            break;

        default:
            break;
    }
};

export function clickAction(event) {
    if (event.layerX > 140 && event.layerX < 260 && event.layerY > 30 && event.layerY < 60) {
        actionManagement(event, 'openShop', null);
    } else if (event.layerX >= 270 && event.layerX <= 315 && event.layerY >= 510 && event.layerY <= 560 && shopProp.isOpen && typeof itemsList[shopProp.tab + 1] !== "undefined") {
        actionManagement(event, 'changeTab', '+');
    } else if (event.layerX >= 70 && event.layerX <= 120 && event.layerY >= 510 && event.layerY <= 560 && shopProp.isOpen && shopProp.tab !== 1) {
        actionManagement(event, 'changeTab', '-');
    } else if (event.layerX > 300 && event.layerX < 350 && event.layerY > 90 && event.layerY < 140 && shopProp.isOpen) {
        actionManagement(event, 'closeShop', null);
    }
}