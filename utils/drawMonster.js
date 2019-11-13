import { gameImages } from './loadImages.js';

export class DrawMonster {
    constructor(
        ctx,
        imageName,
        x,
        y, 
        monsterOption
    ) {
        this.ctx = ctx;
        this.imageName = imageName;
        this.x = x;
        this.y = y;
        this.monsterOption = monsterOption;
    }

    drawMonsterImage(shift, frameWidth, frameHeight) {
        this.ctx.drawImage(gameImages[this.imageName]['image'], shift, 0, frameWidth, frameHeight,120, 25, frameWidth, frameHeight);
    }
}