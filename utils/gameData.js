import { getFromLocalStorage, saveToLocalStorage, savetToDB, getFromDBPlayerData } from './localStorage.js';
import { playerOptions } from './playerOptions.js';

export function getGamaData() {
    return getFromLocalStorage('player_data');
}

export function setGameData() {
    if (getFromLocalStorage('player_data') === undefined || getFromLocalStorage('player_data') === null) {
        let playerData = getFromDBPlayerData();
        if (playerData === null) {
            saveToLocalStorage('player_data', JSON.stringify(playerOptions));
            savetToDB(userID, playerOptions);
        }
    }
}