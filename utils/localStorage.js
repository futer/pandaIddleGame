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
    let user = [];
    const userId = getFromLocalStorage('user');
    const userConnection = firebase.database().ref('players/' + userId);
    userConnection.once('value').then((snap) => {
        let data = snap.val();
        user.push(data);

    })
    console.log(user);
}


