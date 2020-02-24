export let isLogged = false;

export function createLoginPage() {
    document.getElementById('login').addEventListener('click', () => {
        let getEmail = document.getElementById('email_login').value;
        let getPassword = document.getElementById('password_login').value;
        console.log(getEmail + getPassword);
    });
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