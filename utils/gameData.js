import { getFromLocalStorage, saveToLocalStorage, savetToDB, getFromDBPlayerData} from './localStorage.js';
import { playerOptions } from './playerOptions.js';

export function getGamaData() {
    const userID = getFromLocalStorage('user');
    setTimeout(() => {
        let playerData = getFromDBPlayerData(userID);
        console.log(playerData);
    }, 1000)
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