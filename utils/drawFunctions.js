import { gameImages } from './loadImages.js'

export function DrawOnlyText(ctx, posx, posy, text, color, fontName, fontSize) {
    ctx.save();
    ctx.font = `${fontSize}px ${fontName}`;
    ctx.fillStyle = color;
    ctx.fillText(text, posx, posy);
    ctx.restore();
}

export function drawAnimation(ctx, image_name, frame, frame_width, frame_height) {
    if (gameImages[image_name]['isLoaded']) {
        ctx.save();

        ctx.drawImage(gameImages[image_name].image, frame * frame_width, 0, frame_width, frame_height, 0, 0, frame_width, frame_height);

        ctx.restore();
    };
};

export function drawImage(ctx, image_name, x, y, width, height, scale) {
    if (gameImages[image_name]['isLoaded']) {
        ctx.save();

        if (scale !== null && scale !== undefined) {
            ctx.scale(scale, scale);
        }

        ctx.drawImage(gameImages[image_name].image, x, y, width, height);
        ctx.restore();
    };
}