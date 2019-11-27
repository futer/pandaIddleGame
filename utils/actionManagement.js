import { drawedMonster } from '../engine.js';
import { playerOptions } from './playerOptions.js';

export function actionManagement(key, type, truekey) {
    console.log(key.code);

    switch (true) {
        case type === 'attack_monster':
            if (key.code === truekey) {
                drawedMonster.monsterOption.losthp -= playerOptions.attack;
            };
            break;

        case type === 'restart_game':
            localStorage.removeItem('player_data');
            location.reload;
            break;

        default:
            break;
    }
};