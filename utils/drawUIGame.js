import { drawImage, drawOnlyText } from './drawFunctions.js';
import { playerOptions } from './playerOptions.js';

export function drawAllBackgroundImage(ctx) {
        drawImage(ctx, playerOptions.background, 0, 0, 480, 700, null);
        drawImage(ctx, 'panel_up', 0, -58, 400, 150, null);
        drawImage(ctx, 'panel_down', 0, 640, 400, 70, null);

        drawImage(ctx, 'coin', 14, 3, 25, 25, null);
        drawImage(ctx, 'attack', 280, 3, 25, 25, null);
}

export function drawAllText(ctx, canvas, keyDown) {
        drawOnlyText(ctx, 40, 22, `Gold: ${playerOptions.gold}`, 'white', 'Bubbleboddy', 18);
        drawOnlyText(ctx, 305, 22, `Attack: ${playerOptions.attack}`, 'white', 'Bubbleboddy', 18);

        drawOnlyText(ctx, 20, 60, `Level: ${playerOptions.level + 1}`, 'black', 'Bubbleboddy', 18);
}