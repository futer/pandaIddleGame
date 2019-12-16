import { drawedMonster } from '../engine.js';
import { drawImage } from './drawImages.js';
import { playerOptions } from './playerOptions.js';
import { shopProp } from '../engine.js';

export function actionManagement(action, type, param, ctx) {

    switch (true) {
        case type === 'attack_monster':
            if (action.code === param) {
                drawedMonster.monsterOption.losthp -= playerOptions.attack;
                drawedMonster.monsterOption.isBlood = true;
            } else {
                let perctentage = (drawedMonster.monsterOption.hp * 30) / 100;
                setTimeout(() => {
                    drawImage(ctx, 'heal', 100, 100, 200, 300, null);

                }, 2000) 

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