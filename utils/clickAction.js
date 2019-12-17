import { shopProp } from '../engine.js';
import { actionManagement } from './actionManagement.js';
import { itemsList } from './itemsList.js';

export function clickAction(event) {
    if (event.layerX > 140 && event.layerX < 260 && event.layerY > 30 && event.layerY < 60) {
        actionManagement(event, 'openShop', null);
    } else if (event.layerX >= 270 && event.layerX <= 315 && event.layerY >= 510 && event.layerY <= 560 && shopProp.isOpen && typeof itemsList[shopProp.tab + 1] !== "undefined") {
        actionManagement(event, 'changeTab', '+');
    } else if (event.layerX >= 70 && event.layerX <= 120 && event.layerY >= 510 && event.layerY <= 560 && shopProp.isOpen && shopProp.tab !== 1) {
        actionManagement(event, 'changeTab', '-');
    } else if (event.layerX > 300 && event.layerX < 350 && event.layerY > 90 && event.layerY < 140 && shopProp.isOpen) {
        actionManagement(event, 'closeShop', null);
    }
}