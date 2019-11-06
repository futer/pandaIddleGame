import { gameImages } from './loadImages.js'

export function drawImage(ctx, image_name, x, y, width, height, scale) {
    if (gameImages[image_name]['isLoaded']) {
        ctx.save();

        if (scale !== null) {
            ctx.scale(scale, scale);
        }
        
        ctx.drawImage(gameImages[image_name].image, x, y, width, height);
        ctx.restore();
    };
}