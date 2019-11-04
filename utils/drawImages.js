import { gameImages } from './loadImages.js'

export class DrawImage {
    constructor(ctx, image_name, x, y) {
        this.ctx = ctx;
        this.image_name = image_name;
        this.x = x;
        this.y = y;
        this.ctx.drawImage(gameImages[image_name], x, y);
    }
}

export function drawImage(ctx, image_name, x, y, width, height) {
    if (gameImages[image_name]['isLoaded']) {
        ctx.drawImage(gameImages[image_name], x, y);
        console.log(ctx);
    };
}