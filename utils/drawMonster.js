import { gameImages } from './loadImages.js';
import { drawImage } from './drawImages.js';


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
        drawImage(this.ctx, this.monsterOption.platform_number, 90, 370, 200, 70, null);
        this.ctx.drawImage(gameImages[this.imageName]['image'], shift, 0, frameWidth, frameHeight, 35, 220, frameWidth, frameHeight);
        
    }
}