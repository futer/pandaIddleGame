import { gameImages } from './loadImages.js'

export function drawImage(ctx, image_name, x, y, width, height) {
    if (gameImages[image_name]['isLoaded']) {
        ctx.drawImage(gameImages[image_name].image, x, y, width, height);
    };
}