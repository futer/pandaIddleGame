import { keyCodeTable } from './eventCodeKeys.js';
import { drawImage } from './drawImages.js';
import { DrawOnlyText } from './drawText.js';
import { buttonPlacement } from './buttonPlacement.js';

export let greenButton = null;
export let fourChoosenKey = [];
export let keyDown = null;

export function generateButton() {
    fourChoosenKey = [];
    greenButton = Math.floor(Math.random() * 4) + 0;

    for (let index = 0; index < 4; index++) {
        fourChoosenKey.push(keyCodeTable[Math.floor(Math.random() * keyCodeTable.length) + 0]);
    }
    keyDown = fourChoosenKey[Math.floor(Math.random() * fourChoosenKey.length) + 0];
}

export function drawKeyButton(ctx) {
    buttonPlacement.forEach((btn, index) => {
        if (index === greenButton) {
            drawImage(ctx, 'button_true', btn.x, btn.y, 45, 45, null);
            DrawOnlyText(ctx, btn.x + 15, btn.y + 27, keyDown[keyDown.length - 1], 'red', 'Bubbleboddy', 22);
        } else {
            drawImage(ctx, 'button_false', btn.x, btn.y, 45, 45, null);
            DrawOnlyText(ctx, btn.x + 15, btn.y + 27, fourChoosenKey[index][fourChoosenKey[index].length - 1], 'black', 'Bubbleboddy', 22);
        }
    });
}