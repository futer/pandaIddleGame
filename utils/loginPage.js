const body = document.body;


export let isLogged = false;

export function createLoginPage() {

    const email_input = document.createElement('input');
    email_input.className = 'email_input';

    const password_input = document.createElement('input');
    password_input.className = 'password_input';
    password_input.type = 'password';

    const button_register = document.createElement('button');
    button_register.innerText = 'register'
    button_register.className = 'register_button';

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

export function deleteRegisterElement() {
    let elm1 = document.getElementsByClassName('email_input')[0]
    let elm2 = document.getElementsByClassName('password_input')[0]
    let elm3 = document.getElementsByClassName('register_button')[0]
    elm1.parentNode.removeChild(elm1);
    elm2.parentNode.removeChild(elm2);
    elm3.parentNode.removeChild(elm3);
}