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
    let user = null;

    firebase.database().ref('players/' + userId).once('value').then((snapshot) => {
        user = snapshot.val();
        if (user !== null || user !== undefined) {
            return user;
            console.log(user);
        }
    });
}


