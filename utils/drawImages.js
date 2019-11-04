import { gameImages } from './loadImages.js'

export function drawImage(ctx, image_name, x, y, width, height) {
    ctx.drawImage(gameImages[image_name], x, y, width, height);
    console.log(ctx);
}