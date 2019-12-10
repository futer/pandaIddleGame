import { getFromLocalStorage, saveToLocalStorage } from './localStorage.js';
import { playerOptions } from './playerOptions.js';

export function getGamaData() {
    return getFromLocalStorage('player_data');
}

export function setGameData(restart) {
    if (restart) {
        saveToLocalStorage('player_data', JSON.stringify(playerOptions));
    } else {
        if (getFromLocalStorage('player_data') === undefined || getFromLocalStorage('player_data') === null) {
            saveToLocalStorage('player_data', JSON.stringify(playerOptions));
        } else {
            getGamaData();
        }
    }
}