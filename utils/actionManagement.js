import { drawedMonster } from '../engine.js';
import { playerOptions } from './playerOptions.js';

export function actionManagement(event, type) {

    switch (true) {
        case type === 'attack_monster':
            if (event.layerX >= 75 && event.layerX <= 340 && event.layerY >= 180 && event.layerY <= 530) {
                console.log(drawedMonster.monsterOption.losthp);

                return drawedMonster.monsterOption.losthp - playerOptions.attack;
            };
            break;

        default:
            break;
    }
};