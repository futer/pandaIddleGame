import { drawedMonster } from '../engine.js';
import { playerOptions } from './playerOptions.js';

export function actionManagement(action, type, param) {

    switch (true) {
        case type === 'attack_monster':
            if (action.code === param) {
                drawedMonster.monsterOption.losthp -= playerOptions.attack;
            };
            break;

        case type === 'restart_game':
                console.log(1);
            if (event.layerX > param.x && event.layerX < param.endX && event.layerY > param.y && event.layerY < param.endY) {
                console.log(2);

                localStorage.removeItem('player_data');
                location.reload(true);
            }
            
            break;

        default:
            break;
    }
};