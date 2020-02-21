import { enemies_list } from './enemyList.js';
import { isle_list } from './isleList.js';
import { playerOptions } from './playerOptions.js';
import {isKilled} from '../engine.js';
export const platform_number = Math.floor(Math.random() * isle_list.length) + 1;
export const monsterID = Math.floor(Math.random() * enemies_list.length);

let monsterName = '';

export function generateRandomMonster(isKilled) {
    if (isKilled) {
        monsterName = enemies_list[Math.floor(Math.random() * enemies_list.length)].monster_name;
        isKilled = false;
        return monsterName;
    } else {
        return monsterName;
    }
    
}

export function generateRandomLevel() {
    const increaseHP = 10
    const _hp = 50;
    const platform_number = Math.floor(Math.random() * isle_list.length) + 1;
    const currentLevel = playerOptions.level;
    const isMonsterBoss = (enemies_list.length + 1) % 5 === 0;

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

    // enemy_list.push(newLevel);
}