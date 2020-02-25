export const userData = [];


export function saveToLocalStorage(varNam, varValue) {
    localStorage.setItem(varNam, varValue);
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
        userData.push(snapshot.val());
        console.log(userData);
        return snapshot.val();
    });
}


