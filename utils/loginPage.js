export let isLogged = false;

export function createLoginPage() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        let login = evt.target[0].value;
        let password = evt.target[1].value


        firebase.auth()
                .signInWithEmailAndPassword(login, password)
                .then((event) => {
                    alert(event)
                }).catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode + ": " + errorMessage);
                });
    })

    // document.getElementById('login').addEventListener('click', () => {
    //     let getEmail = document.getElementById('email_login').value;
    //     let getPassword = document.getElementById('password_login').value;
    //     console.log(getEmail + getPassword);
    // });
    // button_register.addEventListener('click', (evt) => {
    //     const email = document.getElementsByClassName('email_input')[0].value;
    //     const password = document.getElementsByClassName('password_input')[0].value;

    //     firebase.auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(function (user) {
    //             if (user !== null || user !== undefined) {
    //                 window.alert(`Create user : ${user.user.email}`);
    //                 isLogged = true;
    //             }
    //             // var user = firebase.auth().currentUser;
    //         })
    //         .catch(function (error) {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;

    //             window.alert("There went something wrong : " + errorMessage);
    //         });
    // });


}