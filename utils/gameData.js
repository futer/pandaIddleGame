import { getFromLocalStorage, saveToLocalStorage, savetToDB} from './localStorage.js';
import { playerOptions } from './playerOptions.js';

export function getGamaData() {
    return getFromLocalStorage('player_data');
}

export function setGameData() {
    const userID = getFromLocalStorage('user');
    if (getFromLocalStorage('player_data') === undefined || getFromLocalStorage('player_data') === null) {
        saveToLocalStorage('player_data', JSON.stringify(playerOptions));
        savetToDB(userID, playerOptions);
    } else {
        getGamaData();
    }
}