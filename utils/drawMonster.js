import { playerOptions } from './playerOptions.js';
import { enemies_list } from './enemyList.js';

let monsterLevel = playerOptions.level;
let monsterName = '';
let isGeneratedMMonsterName = false;

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

export function drawMonster() {
    generateRandomLevel();
}

function generateRandomLevel() {
    if (isGeneratedMMonsterName) {
        console.log(2 + ':' + monsterName);
    }
    else {
        monsterName = enemies_list[Math.floor(Math.random() * enemies_list.length)].monster_name;
        isGeneratedMMonsterName = true;
        console.log(1 + ':' + monsterName);
    }
    
}