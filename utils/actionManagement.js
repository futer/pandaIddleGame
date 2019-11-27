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
            if (event.layerX > param.x && event.layerX < param.endX) {
                console.log(event, param);
                // localStorage.removeItem('player_data');
                // location.reload;
            }
            
            break;

        default:
            break;
    }
};