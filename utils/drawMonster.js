import { playerOptions } from './playerOptions.js';
import { enemies_list } from './enemyList.js';
import { isle_list } from './isleList.js';
import { generateMonsterProps } from './generateRandomLevel.js';
import { gameImages } from './loadImages.js';
import { drawImage, drawOnlyText } from './drawFunctions.js';
import { saveToLocalStorage } from './localStorage.js';
import { getGamaData } from './gameData.js';
import { addPlayerAttack, setPlayerGold } from './playerOptions.js';

// let monsterLevel = playerOptions.level;
let monsterName = null;
let isGeneratedMMonsterName = false;
export let monsterProps = null;
let monsterPlatform = null;

export let shift = 0;
export const frameWidth = 400;
export const frameHeight = 400;
export const totalFrames = 6;
export let currentFrame = 0;

// import { gameImages } from './loadImages.js';

// export class CreateMonster {
//     constructor(
//         ctx,
//         imageName,
//         x,
//         y, 
//         monsterOption,
//         level
//     ) {
//         this.ctx = ctx;
//         this.imageName = imageName;
//         this.x = x;
//         this.y = y;
//         this.monsterOption = monsterOption;
//         this.level = level;
//     }

//     drawMonsterImage(ctx, shift, frameWidth, frameHeight) {
//         drawImage(ctx, this.monsterOption.platform_number, 80, 370, 200, 70, null);
//         ctx.drawImage(gameImages[this.imageName]['image'], shift, 0, frameWidth, frameHeight, 15, 80, frameWidth, frameHeight);
//     }
// }

// export function createMO

export function drawMonster(ctx) {
    if (!isGeneratedMMonsterName) {
        generateRandomLevel();
    }
    else {
        nextMonsterFrame();
        drawImage(ctx, monsterPlatform, 80, 420, 200, 70, null);
        ctx.drawImage(gameImages[monsterName]['image'], shift, 0, frameWidth, frameHeight, 15, 120, frameWidth, frameHeight);

        if (drawedMonster.monsterOption.bossFight) {
            drawOnlyText(ctx, 110, 160, 'BOSS FIGHT', 'blue', 'Bubbleboddy', 40);
        }

        drawOnlyText(ctx, 160, 140, `${monsterProps.losthp}/${monsterProps.hp}`, 'white', 'Bubbleboddy', 40);

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
    console.log(monsterProps);
}

export function nextMonsterFrame() {
    shift += frameWidth + 1;
    if (currentFrame == totalFrames) {
        shift = 0;
        currentFrame = 0;
    }
    currentFrame++;
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
    generateRandomLevel();
    monsterProps.bossFight ? addPlayerAttack() : false;
    setPlayerGold(monsterProps.min_gold, monsterProps.max_gold);
    killMonster();
};

function drawBlood(ctx) {
    drawImage(ctx, 'splash-blood', 50, 170, 300, 300, null);
    setTimeout(() => {
        monsterProps.isBlood = false;
    }, 100);
}



