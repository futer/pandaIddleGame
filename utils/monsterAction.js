import { keyCodeTable } from './eventCodeKeys.js';
import { DrawOnlyText, drawImage } from './drawFunctions.js';
import { saveToLocalStorage } from './localStorage.js';
import { playerOptions } from './playerOptions.js';
import { getGamaData } from './gameData.js';
import { generateRandomLevel } from './generateRandomLevel.js';
import { addPlayerAttack, setPlayerGold } from './playerOptions.js';
import { enemy_list } from './enemyList.js'
import { DrawMonster } from './drawMonster.js';

export let greenButton = null;
export let fourChoosenKey = [];
export let keyDown = null;
export let drawedMonster = null;

export let shift = 0;
export const frameWidth = 400;
export const frameHeight = 400;
export const totalFrames = 4;
export let currentFrame = 0;

export const buttonPlacement = [
    {
        x: 110,
        y: 650,
    },
    {
        x: 160,
        y: 650,
    },
    {
        x: 210,
        y: 650,
    },
    {
        x: 260,
        y: 650,
    },
];

export function generateButton() {
    fourChoosenKey = [];
    greenButton = Math.floor(Math.random() * 4) + 0;

    for (let index = 0; index < 4; index++) {
        fourChoosenKey.push(keyCodeTable[Math.floor(Math.random() * keyCodeTable.length) + 0]);
    }
    keyDown = fourChoosenKey[Math.floor(Math.random() * fourChoosenKey.length) + 0];
}

export function drawKeyButton(ctx) {
    buttonPlacement.forEach((btn, index) => {
        if (index === greenButton) {
            drawImage(ctx, 'button_true', btn.x, btn.y, 45, 45, null);
            DrawOnlyText(ctx, btn.x + 15, btn.y + 27, keyDown[keyDown.length - 1], 'red', 'Bubbleboddy', 22);
        } else {
            drawImage(ctx, 'button_false', btn.x, btn.y, 45, 45, null);
            DrawOnlyText(ctx, btn.x + 15, btn.y + 27, fourChoosenKey[index][fourChoosenKey[index].length - 1], 'black', 'Bubbleboddy', 22);
        }
    });
}

export function killMonster() {
    const playerData = JSON.parse(getGamaData());
    saveToLocalStorage('player_data', JSON.stringify({
        ...playerData,
        level: playerOptions.level = parseInt(playerOptions.level) + 1,
        gold: playerOptions.gold,
    }));
    getGamaData();
}

export function nextLevel() {
    if (drawedMonster.monsterOption.losthp <= 0) {
        generateRandomLevel();
        saveToLocalStorage('monster_list', JSON.stringify(enemy_list));
        drawedMonster.monsterOption.bossFight ? addPlayerAttack() : false;
        setPlayerGold(enemy_list[playerOptions.level].min_gold, enemy_list[playerOptions.level].max_gold);
        killMonster();
        setMonsterInstance();
    }
};

export function setMonsterInstance(ctx) {
    drawedMonster = new DrawMonster(ctx, enemy_list[playerOptions.level].monster_name, 100, 100, enemy_list[playerOptions.level], playerOptions.level);
}

export function drawMonster(ctx) {
    drawedMonster.drawMonsterImage(ctx, shift, frameWidth, frameHeight);

    shift += frameWidth + 1;
    if (currentFrame == totalFrames) {
        shift = 0;
        currentFrame = 0;
    }
    currentFrame++;
}