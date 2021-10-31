const validName = (name) => {
    return /^([А-Я]{1}[а-яё]{2,}|[A-Z]{1}[a-z]{2,})/.test(name);
}
const validSurname = (surname) => {
    return /^([А-Я]{1}[а-яё]{2,}|[A-Z]{1}[a-z]{2,})/.test(surname);
}
const validEmail = (mail) => {
    return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(mail);
}
const validPassword = (pass) => {
    return /^(?=.*[A-Z])(?=.*[0-9].)(?=.*[a-z].*[a-z].*[a-z]).{5,}$/.test(pass)
}


export function validationSignUpForm () {
    const userName = document.getElementById('id');
    const surName = document.getElementById('surname');
    const signUpEmail = document.getElementById('email');
    const passwordSignUp = document.getElementById('password');
    const confirmPassword = document.getElementById('passwordControl');

    const warningTextName = document.querySelector('.warning-text_name');
    const warningTextSurName = document.querySelector('.warning-text_surname');
    const warningTextEmail = document.querySelector('.warning-text_email');
    const warningTextPass = document.querySelector('.warning-text_pass');
    const warningTextConfirm = document.querySelector('.warning-text_confirm');
  
    const isPasswordEqual = (password) => (password === confirmPassword.value) ? true : false;

    const isValid = (validation, input, error) => {
        if (!validation) {
            input.classList.add('warningInput');
            error.classList.add('active');
            return false
        } else {
            input.classList.remove('warningInput');
            error.classList.remove('active');
            return true;
        }
        
    }
    let user = {
        userName: userName.value,
        surName: surName.value,
        email: signUpEmail.value,
        password: passwordSignUp.value,
        passwordEqual: isPasswordEqual(passwordSignUp.value)
    }

    if(!isValid(validName(user.userName), userName, warningTextName) &&
    !isValid(validSurname(user.surName), surName, warningTextSurName) &&
    !isValid(validEmail(user.email), signUpEmail, warningTextEmail) &&
    !isValid(validPassword(user.password), passwordSignUp, warningTextPass) &&
    !isValid(isPasswordEqual(user.passwordEqual), confirmPassword, warningTextConfirm)) {
        return false;
    }

    let usersMails = Object.keys(localStorage);

    for (let mail of usersMails) {
        if ( mail === user.email) {
            signUpEmail.classList.add('warningInput');
            warningTextEmail.classList.add('active');
            warningTextEmail.innerHTML = 'User with such mail is already registered';
            return false;
        } else {
            signUpEmail.classList.remove('warningInput');
            warningTextEmail.classList.remove('active');
        }
    }
   
    localStorage.setItem(user.email, JSON.stringify(user));
    

    return true
}  

