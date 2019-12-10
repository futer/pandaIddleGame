import { drawImage } from './drawImages.js';
import { DrawOnlyText } from './drawText.js';

export let notificationText = null;

export function showNotification(ctx) {
    drawImage(ctx, 'table', 100, 240, 200, 40, null);
    DrawOnlyText(ctx, 115, 265, notificationText, 'white', 'Bubbleboddy', 16);
}

export function setNotificationText(text) {
    notificationText = text;
}