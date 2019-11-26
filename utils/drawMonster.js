import { gameImages } from './loadImages.js';

export class DrawMonster {
    constructor(
        ctx,
        imageName,
        x,
        y, 
        monsterOption,
        level
    ) {
        this.ctx = ctx;
        this.imageName = imageName;
        this.x = x;
        this.y = y;
        this.monsterOption = monsterOption;
        this.level = level;
    }

    drawMonsterImage(shift, frameWidth, frameHeight) {
        this.ctx.drawImage(gameImages[this.imageName]['image'], shift, 0, frameWidth, frameHeight, 35, 220, frameWidth, frameHeight);
    }
}