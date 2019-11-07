import { drawImage } from './drawImages.js';

export class DrawMonster {
    constructor(ctx, imageName, x, y, imageWidth, imageHeight, scale, monsterOption) {
        this.ctx = ctx;
        this.imageName = imageName;
        this.x = x;
        this.y = y;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.scale = scale;
        this.monsterOption = monsterOption;
        
        
        new drawImage(this.ctx, this.imageName, this.x, this.y, this.imageWidth, this.imageHeight, this.scale);
    }
}