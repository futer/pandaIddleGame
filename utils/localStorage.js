import { playerOptions } from './playerOptions.js';

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
    // console.log(1 + ': ' + JSON.parse(playerData));
    firebase.database().ref('players/' + user).set(JSON.parse(playerData), (error) => {
        if (error) {
            alert('Conntection losts');
        }
    });
}

export function saveTestDB() {
    let user = 'test_user1';
    firebase.database().ref('players/' + user).set({
        attack: 200,
        gold: 200,
        level: 200,
        background: 'background_1',
        items: [],
        achievement: [],
    });
    // firebase.database().ref('players/' + user + '/attack').set(200);
    // firebase.database().ref('players/' + user + '/gold').set(200);
    // firebase.database().ref('players/' + user + '/level').set(200);
    // firebase.database().ref('players/' + user + '/achievement').set([200]);
    // firebase.database().ref('players/' + user + '/items').set([400, 200]);
    // firebase.database().ref('players/' + user + '/background').set('background_1');
}

export function getFromDBPlayerData() {
    const userId = getFromLocalStorage('user');
    firebase.database().ref('players/' + userId).once('value', (snapshot) => {
        if (snapshot.val() === null) {
            saveToLocalStorage('player_data', JSON.stringify(playerOptions));
        } else {
            saveToLocalStorage('player_data', JSON.stringify(snapshot.val()));
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

