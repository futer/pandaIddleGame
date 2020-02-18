import { enemy_list } from './enemyList.js';
import { isle_list } from './isleList.js';
import { playerOptions } from './playerOptions.js';

export const platform_number = Math.floor(Math.random() * isle_list.length) + 1;
export const monsterID = Math.floor(Math.random() * enemy_list.length);
export const monsterObject = enemy_list[monsterID];
export const monsterName = monsterObject.monster_name;

export function generateRandomMonster(option) {
    if (option === 'monsterName') {
        return enemy_list[Math.floor(Math.random() * enemy_list.length)].monster_name;
    }
}

export function generateRandomLevel() {
    const increaseHP = 10
    const _hp = 50;
    const platform_number = Math.floor(Math.random() * isle_list.length) + 1;
    const currentLevel = playerOptions.level;
    const isMonsterBoss = (enemy_list.length + 1) % 5 === 0;

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

    enemy_list.push(newLevel);
}