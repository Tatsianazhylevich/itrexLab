import { User } from "../../model/localStorage.js";

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
    let newUser = new User(userName.value, surName.value, email.value, password.value)
    
    if(!isValid(validName(newUser.userName), userName, warningTextName) &&
    !isValid(validSurname(newUser.surName), surName, warningTextSurName) &&
    !isValid(validEmail(newUser.email), signUpEmail, warningTextEmail) &&
    !isValid(validPassword(newUser.password), passwordSignUp, warningTextPass) &&
    !isValid(isPasswordEqual(newUser.password), confirmPassword, warningTextConfirm)) {
        return false;
    }

    let usersMails = Object.keys(localStorage);

    for (let mail of usersMails) {
        if ( mail === newUser.email) {
            signUpEmail.classList.add('warningInput');
            warningTextEmail.classList.add('active');
            warningTextEmail.innerHTML = 'User with such mail is already registered';
            return false;
        } else {
            signUpEmail.classList.remove('warningInput');
            warningTextEmail.classList.remove('active');
        }
    }

    console.log(newUser);
    newUser.setUserToLS();
    

    return true
}  

