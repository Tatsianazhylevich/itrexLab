import { User } from "../../model/localStorage.js";

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
  
    const isPasswordEqual = (password) => (password === confirmPassword.value) ? true : false;

    const isValid = (validation, input, error) => {
        if (!validation) {
            input.classList.add('warningInput');
            error.classList.add('active');
            return false
        } else {
            input.classList.remove('warningInput');
            error.classList.remove('active');
            
        }
        return true;
    }
    let newUser = new User(userName.value, surName.value, signUpEmail.value, passwordSignUp.value, isPasswordEqual(passwordSignUp.value))

    let isValidSignUp = isValid(validName(userName.value), userName, warningTextName) &&
    isValid(validSurname(surName.value), surName, warningTextSurName) &&
    isValid(validEmail(signUpEmail.value), signUpEmail, warningTextEmail) &&
    isValid(validPassword(passwordSignUp.value), passwordSignUp, warningTextPass) &&
    isValid(isPasswordEqual(passwordSignUp.value), confirmPassword, warningTextConfirm);


    newUser.setUserToLS();
    
    return isValidSignUp;
}  

