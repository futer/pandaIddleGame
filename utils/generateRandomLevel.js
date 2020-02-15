import { enemy_list } from './enemyList.js';
import { isle_list } from './isleList.js';
import { playerOptions } from './playerOptions.js';

export function generateRandomLevel() {
    const increaseHP = 10
    const _hp = 50;
    const platform_number = Math.floor(Math.random() * isle_list.length) + 1;
    const currentLevel = playerOptions.level;

    const monsterID = Math.floor(Math.random() * enemy_list.length) + 1
    const monsterObject = enemy_list[monsterID]
    const monsterName = monsterObject.monster_name;
    const isMonsterBoss = (enemy_list.length + 1) % 5 === 0;

    console.log(enemy_list);
    const newLevel = {

        losthp: !isMonsterBoss ? _hp + ((currentLevel + 1 )* increaseHP) :  _hp + ((currentLevel + 1) * (increaseHP * 4))
        // losthp: isMonsterBoss ? ((enemy_list.length + 1) * 40) : (lastLevelHP + increaseHP),
        // hp: isBooss ? ((enemy_list.length + 1) * 40) : (lastLevelHP + increaseHP),

        // min_gold: isMonsterBoss ? enemy_list.length * 2 : enemy_list.length,
        // max_gold:  isMonsterBoss ? ((enemy_list.length * 2) + 10) : (enemy_list.length + 5),

        width: 300,
        height: 206.33,
        monster_name: monsterName,
        platform_number: `isle_${platform_number}`,
        bossFight: isMonsterBoss ? true : false,
        isBlood: false,
    }

    enemy_list.push(newLevel);
}