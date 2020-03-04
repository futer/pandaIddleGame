import { playerOptions } from './playerOptions.js';
import { enemies_list } from './enemyList.js';
import { isle_list } from './isleList.js';
import { generateMonsterProps } from './generateRandomLevel.js';
import { gameImages } from './loadImages.js';
import { drawImage, drawOnlyText } from './drawFunctions.js';
import { saveToLocalStorage } from './localStorage.js';
import { getGamaData } from './gameData.js';

let monsterName = null;
let isGeneratedMMonsterName = false;
let monsterPlatform = null;

export let monsterProps = null;
export let shift = 0;
export const frameWidth = 400;
export const frameHeight = 400;
export const totalFrames = 6;
export let currentFrame = 0;
export let killBossAttackReward = 5;

export function drawMonster(ctx) {
    if (!isGeneratedMMonsterName) {
        generateRandomLevel();
    }
    else {
        nextMonsterFrame();
        drawImage(ctx, monsterPlatform, 80, 420, 200, 70, null);
        ctx.drawImage(gameImages[monsterName]['image'], shift, 0, frameWidth, frameHeight, 15, 120, frameWidth, frameHeight);

        if (monsterProps.bossFight) {
            drawOnlyText(ctx, 200, 105, 'BOSS', 'blue', 'Bubbleboddy', 40, true);
        }

        drawOnlyText(ctx, 200, 140, `${monsterProps.losthp}/${monsterProps.hp}`, 'white', 'Bubbleboddy', 40, true);

        if (monsterProps.losthp <= 0) {
            drawBlood(ctx);
            monsterProps.losthp = 0;
            nextLevel();
        } else if (monsterProps.isBlood) {
            drawBlood(ctx);
        }
    }
}

function generateRandomLevel() {
    monsterName = enemies_list[Math.floor(Math.random() * enemies_list.length)].monster_name;
    monsterPlatform = isle_list[Math.floor(Math.random() * isle_list.length)];
    monsterProps = generateMonsterProps();
    isGeneratedMMonsterName = true;
}

function nextMonsterFrame() {
    shift += frameWidth + 1;
    if (currentFrame == totalFrames) {
        shift = 0;
        currentFrame = 0;
    }
    currentFrame++;
}

function killMonster() {
    const playerData = JSON.parse(getGamaData());
    saveToLocalStorage('player_data', JSON.stringify({
        ...playerData,
        level: playerOptions.level = parseInt(playerOptions.level) + 1,
        gold: playerOptions.gold + setPlayerGold(monsterProps.min_gold, monsterProps.max_gold),
        attack: monsterProps.bossFight ? attack + killBossAttackReward : false
    }));
    getGamaData();
}

function nextLevel() {
    generateRandomLevel();
    monsterProps.bossFight ? addPlayerAttack() : false;
    killMonster();
};

function drawBlood(ctx) {
    drawImage(ctx, 'splash-blood', 50, 170, 300, 300, null);
    setTimeout(() => {
        monsterProps.isBlood = false;
    }, 100);
}

function setPlayerGold(minGold, maxGold) {
    return gold = Math.floor(Math.random() * maxGold) + minGold;
}