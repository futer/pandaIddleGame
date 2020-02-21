import { playerOptions } from './playerOptions.js';
import { enemies_list } from './enemyList.js';
import { generateMonsterProps } from './generateRandomLevel.js';
import { gameImages } from './loadImages.js';
let monsterLevel = playerOptions.level;
let monsterName = '';
let isGeneratedMMonsterName = false;
let monsterProps = null;

export let shift = 0;
export const frameWidth = 400;
export const frameHeight = 400;
export const totalFrames = 6;
export let currentFrame = 0;

// import { gameImages } from './loadImages.js';
// import { drawImage } from './drawFunctions.js';

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
        ctx.drawImage(gameImages[monsterName]['image'], shift, 0, frameWidth, frameHeight, 15, 80, frameWidth, frameHeight);
    }
}

function generateRandomLevel() {
        monsterName = enemies_list[Math.floor(Math.random() * enemies_list.length)].monster_name;
        monsterProps = generateMonsterProps();
        isGeneratedMMonsterName = true;
}

export function nextMonsterFrame() {
    shift += frameWidth + 1;
    if (currentFrame == totalFrames) {
        shift = 0;
        currentFrame = 0;
    }
    currentFrame++;
}