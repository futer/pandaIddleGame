import { playerOptions } from './playerOptions.js';
import { saveToLocalStorage } from './localStorage.js';
import { getGamaData } from './gameData.js';

export let killBossAttackReward = 5;

export function addPlayerAttack() {
    const playerData = JSON.parse(getGamaData());
    const addedAttack = playerOptions.attack + killBossAttackReward;

    saveToLocalStorage('player_data', JSON.stringify({
        ...playerData,
        attack: addedAttack,
    }));

    playerOptions.attack = addedAttack;
    getGamaData();
}

export function setPlayerGold(minGold, maxGold) {
    const gold = Math.floor(Math.random() * maxGold) + minGold;
    playerOptions.gold += gold;
}