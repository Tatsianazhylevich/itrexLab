export function validationSignInForm () {

    const signInEmail = document.getElementById('emailSignIn');
    const passwordSignIn = document.getElementById('passwordSignIn');

    const warningTextEmail = document.querySelector('.warningSignIn-text_email');
    const warningTextPass = document.querySelector('.warningSignIn-text_pass');

    let usersFromLocalStorage = Object.keys(localStorage);

    for(let user of usersFromLocalStorage) {
        if( user !== signInEmail.value) {
            signInEmail.classList.add('warningInput');
            warningTextEmail.classList.add('active');
            warningTextEmail.innerHTML = 'User is not found. Please Sign Up'
            return false;
        } else {
            signInEmail.classList.remove('warningInput');
            warningTextEmail.classList.remove('active');
            
            let userFromLS = JSON.parse(localStorage.getItem(user));

            if (userFromLS.password !== passwordSignIn.value) {
                passwordSignIn.classList.add('warningInput');
                warningTextPass.classList.add('active');
                return false;
            } else {
                passwordSignIn.classList.remove('warningInput');
                warningTextPass.classList.remove('active');
            }
        }       
    }
    return true;
}
