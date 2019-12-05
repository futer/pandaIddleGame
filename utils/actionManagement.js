import { drawedMonster } from '../engine.js';
import { playerOptions } from './playerOptions.js';
import { shopProp } from '../engine.js';

export function actionManagement(action, type, param) {

    switch (true) {
        case type === 'attack_monster':
            if (action.code === param) {
                drawedMonster.monsterOption.losthp -= playerOptions.attack;
            };
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

        default:
            break;
    }
};