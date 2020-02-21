import { keyCodeTable } from './eventCodeKeys.js';
import { drawOnlyText, drawImage } from './drawFunctions.js';

export let greenButton = null;
export let fourChoosenKey = [];
export let keyDown = null;
export let drawedMonster = null;

export let shift = 0;
export const frameWidth = 400;
export const frameHeight = 400;
export const totalFrames = 6;
export let currentFrame = 0;

export const buttonPlacement = [
    {
        x: 110,
        y: 650,
    },
    {
        x: 160,
        y: 650,
    },
    {
        x: 210,
        y: 650,
    },
    {
        x: 260,
        y: 650,
    },
];

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
            drawOnlyText(ctx, btn.x + 15, btn.y + 27, keyDown[keyDown.length - 1], 'red', 'Bubbleboddy', 22);
        } else {
            drawImage(ctx, 'button_false', btn.x, btn.y, 45, 45, null);
            drawOnlyText(ctx, btn.x + 15, btn.y + 27, fourChoosenKey[index][fourChoosenKey[index].length - 1], 'black', 'Bubbleboddy', 22);
        }
    });
}