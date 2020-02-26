import { getFromLocalStorage, saveToLocalStorage, savetToDB, getFromDBPlayerData } from './localStorage.js';
import { playerOptions } from './playerOptions.js';

export function getGamaData() {
    return getFromLocalStorage('player_data');
}

export function setGameData() {
    console.log('launche');
    const test = localStorage.getItem('user');
    console.log(test);
    // if (getFromLocalStorage('player_data') === undefined || getFromLocalStorage('player_data') === null) {
    //     const playerData = getFromDBPlayerData();
    //     console.log(playerData);
    //     // if (playerData === null || playerData === undefined) {
    //     //     console.log('2');
    //     //     saveToLocalStorage('player_data', JSON.stringify(playerOptions));
    //     //     savetToDB(userID, playerOptions);
    //     // } else {
    //     //     console.log('3');
    //     //     getFromDBPlayerData()
    //     // };
    // }
    // else {
    //     console.log('4');
    //     getFromDBPlayerData();
    // }
}
    // if (getFromLocalStorage('player_data') === undefined || getFromLocalStorage('player_data') === null) {
    //     saveToLocalStorage('player_data', JSON.stringify(playerOptions));
    //     savetToDB(userID, playerOptions);
    // } else {
    //     getGamaData();
    // }