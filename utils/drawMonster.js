import { generateRandomMonster } from './generateRandomLevel.js';


// import { gameImages } from './loadImages.js';
// import { drawImage } from './drawFunctions.js';

// export class DrawMonster {
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

export function drawMonster() {
    console.log(generateRandomMonster());
}

export function nextLevel() {

}