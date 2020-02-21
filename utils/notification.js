import { drawOnlyText, drawImage } from './drawFunctions.js';

export let notificationText = null;

export function showNotification(ctx) {
    drawImage(ctx, 'table', 100, 240, 200, 40, null);
    drawOnlyText(ctx, 115, 265, notificationText, 'white', 'Bubbleboddy', 16);
}

export function setNotificationText(text) {
    notificationText = text;
}