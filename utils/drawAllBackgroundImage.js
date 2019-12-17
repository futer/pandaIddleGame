import { drawImage } from './drawFunctions.js';
import { playerOptions } from './playerOptions.js';

export function drawAllBackgroundImage(ctx) {
        drawImage(ctx, playerOptions.background, 0, 0, 480, 700, null);
        drawImage(ctx, 'panel_up', 0, -58, 400, 150, null);
        drawImage(ctx, 'panel_down', 0, 640, 400, 70, null);
}