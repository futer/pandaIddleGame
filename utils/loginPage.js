const body = document.body;


export let isLogged = false;

export function createLoginPage() {
    button_register.addEventListener('click', (evt) => {
        const email = document.getElementsByClassName('email_input')[0].value;
        const password = document.getElementsByClassName('password_input')[0].value;

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (user) {
                if (user !== null || user !== undefined) {
                    window.alert(`Create user : ${user.user.email}`);
                    isLogged = true;
                }
                // var user = firebase.auth().currentUser;
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert("There went something wrong : " + errorMessage);
            });
    });

    body.appendChild(email_input);
    body.appendChild(password_input);
    body.appendChild(button_register);

}