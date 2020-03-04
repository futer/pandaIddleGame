import { playerOptions } from './playerOptions.js';
export const userData = [];

export function saveToLocalStorage(varNam, varValue) {
    localStorage.setItem(varNam, varValue);
    if (varNam === 'player_data') {
        const userId = getFromLocalStorage('user');
        savetToDB(userId, varValue)
    }
}

export function getPlayerName() {
    return localStorage.getItem('user');
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
        if (snapshot.val() === null) {
            saveToLocalStorage('player_data', JSON.stringify(playerOptions));
        } else {
            saveToLocalStorage('player_data', snapshot.val());
        }
    });
}

export function savePlayerachievement(user, achievement) {
    firebase.database().ref('players/' + user + '/achievement').set(achievement, (error) => {
        if (error) {
            alert('Conntection losts');
        }
    });
}

export function isDataExistOnPlayerAccount() {
    const userId = getPlayerName();
    const ref = firebase.database().ref("players/" + userId + '/achievement');
    ref.once("value")
        .then(function (snapshot) {
            console.log(snapshot);
            var a = snapshot.exists();  // true

        });
}

