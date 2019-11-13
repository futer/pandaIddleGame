import { gameImages } from './loadImages.js'

export function drawAnimation(ctx, image_name, frame, frame_width, frame_height) {
    if (gameImages[image_name]['isLoaded']) {
        ctx.save();

        ctx.drawImage(gameImages[image_name].image, frame * frame_width, 0, frame_width, frame_height, 0, 0, frame_width, frame_height);

        ctx.restore();
    };
};