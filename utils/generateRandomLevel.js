import { enemy_list } from './enemyList.js';
import { isle_list } from './isleList.js';

export function generateRandomLevel() {
    const increaseHP = 10
    const isBooss = (enemy_list.length + 1) % 5 === 0;
    const platform_number = Math.floor(Math.random() * isle_list.length) + 1;

    let lastLevelHP = 0;

    if (enemy_list[enemy_list.length - 1].bossFight) {
        lastLevelHP = enemy_list[enemy_list.length - 2].hp;
    } else {
        lastLevelHP = enemy_list[enemy_list.length - 1].hp;
    }

    console.log(enemy_list);
    const newLevel = {

        losthp: isBooss ? ((enemy_list.length + 1) * 40) : (lastLevelHP + increaseHP),
        hp: isBooss ? ((enemy_list.length + 1) * 40) : (lastLevelHP + increaseHP),

        min_gold: isBooss ? enemy_list.length * 2 : enemy_list.length,
        max_gold:  isBooss ? ((enemy_list.length * 2) + 10) : (enemy_list.length + 5),

        width: 300,
        height: 206.33,
        monster_name: enemy_list[0].monster_name,
        platform_number: `isle_${platform_number}`,
        bossFight: isBooss ? true : false,
        isBlood: false,
    }

    enemy_list.push(newLevel);
}