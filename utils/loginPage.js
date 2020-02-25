export let isLogged = false;
export let isCurrenty

export function createLoginPage() {
    let usersss = firebase.auth().currentUser;
    console.log(usersss);

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        let login = evt.target[0].value;
        let password = evt.target[1].value

        firebase.auth()
            .signInWithEmailAndPassword(login, password)
            .then((user) => {
                let users = firebase.auth().currentUser;
                console.log(users);
                isLogged = true;
                hideForms();
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode + ": " + errorMessage);
            });
    });

    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        let login = evt.target[0].value;
        let password = evt.target[1].value
        let repassword = evt.target[2].value

        if (password === repassword) {
            firebase.auth()
                .createUserWithEmailAndPassword(login, password)
                .then(function (user) {
                    if (user !== null || user !== undefined) {
                        alert(`Create user : ${user.user.email}`);
                        isLogged = true;
                        hideForms();
                    }
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    window.alert("There went something wrong : " + errorCode + ')' + errorMessage);
                });
        } else {
            alert('passwords are not the same');
        }
    })
}

function hideForms() {
    const forms = document.getElementsByClassName('container')[0];
    forms.style.display = 'none';
    document.body.classList.remove('auth_background');
}