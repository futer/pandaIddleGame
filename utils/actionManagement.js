import { drawedMonster } from '../engine.js';
import { playerOptions } from './playerOptions.js';

export function actionManagement(key, type) {
    console.log(key.code);

    switch (true) {
        case type === 'attack_monster':
            if (key.code === 'KeyA') {
                drawedMonster.monsterOption.losthp -= playerOptions.attack;
            };
            break;

        default:
            break;
    }
};