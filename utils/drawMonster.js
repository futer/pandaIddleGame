import { drawAnimation } from './drawAnimation.js';

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

    drawMonsterImage(frame, frame_width, frame_height) {
        this.ctx.drawImage(this.imageName, frame * frame_width, 0, frame_width, frame_height, 0, 0, frame_width, frame_height);
        // new drawAnimation(this.ctx, this.imageName, this.frame, this.frame_width, this.frame_height);
    }
}