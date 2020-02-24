export function createLoginPage() {
    const body = document.body;

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
        console.log(email, password);
    })
    
    body.appendChild(email_input);
    body.appendChild(password_input);
    body.appendChild(button_register);

}

