import { enemies_list } from './enemyList.js';
import { isle_list } from './isleList.js';
import { playerOptions } from './playerOptions.js';
export const platform_number = Math.floor(Math.random() * isle_list.length) + 1;
export const monsterID = Math.floor(Math.random() * enemies_list.length);

let monsterName = '';

export function generateMonsterProps() {
    const increaseHP = 10
    const _hp = 40;
    const platform_number = Math.floor(Math.random() * isle_list.length) + 1;
    const currentLevel = playerOptions.level;
    const isMonsterBoss = (playerOptions.level + 1) % 5 === 0;
    const newLevel = {

        losthp: !isMonsterBoss ? _hp + ((currentLevel + 1) * increaseHP) : _hp + ((currentLevel + 1) * (increaseHP * 4)),
        hp: !isMonsterBoss ? _hp + ((currentLevel + 1) * increaseHP) : _hp + ((currentLevel + 1) * (increaseHP * 4)),

        min_gold: isMonsterBoss ? currentLevel * 2 : currentLevel,
        max_gold: isMonsterBoss ? ((currentLevel * 2) + 10) : (currentLevel + 3),

        width: 300,
        height: 206.33,
        monster_name: monsterName,
        platform_number: `isle_${platform_number}`,
        bossFight: isMonsterBoss ? true : false,
        isBlood: false,
    }

    return newLevel;
}