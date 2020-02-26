import { playerOptions } from './playerOptions.js';
export const userData = [];

export function saveToLocalStorage(varNam, varValue) {
    localStorage.setItem(varNam, varValue);
    if (varNam === 'player_data') {
        const userId = getFromLocalStorage('user');
        savetToDB(userId, varValue)
    }
}

export function removeFromLocalStorage(varName) {
    localStorage.removeItem(varName);
}

export function getFromLocalStorage(varName) {
    return localStorage.getItem(varName);
}

export function savetToDB(user, playerData) {
    firebase.database().ref('players/' + user).set(playerData, (error) => {
        if (error) {
            alert('Conntection losts');
        }
    });
}

export function getFromDBPlayerData() {
    const userId = getFromLocalStorage('user');
    firebase.database().ref('players/' + userId).once('value', (snapshot) => {
        if(snapshot === null) {
            saveToLocalStorage('player_data', playerOptions);
        } else {
            saveToLocalStorage('player_data', snapshot.val());
        }
    });
}


