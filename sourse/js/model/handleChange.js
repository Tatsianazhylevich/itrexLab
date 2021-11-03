import router from '../index.js';
import { validationSignUpForm } from '../controller/validation/validationSignUpForm.js';
import { validationSignInForm } from '../controller/validation/validationSignInForm.js';
import { validationRestorePassword } from '../controller/validation/validationRestorePassword.js';


const handleChange = (event) => {

    const submit = (e) => {
        history.pushState({}, null, `${e.target.dataset.name}`);
        router();
    }

    const submitSignUp = (event) => {
        event.preventDefault();
        if(validationSignUpForm()) {
            submit(event);
        }
    }

    if (event.target.classList.contains('submit__signUp')) {
        submitSignUp(event);
    }

    const submitSignIn = (event) => {
        event.preventDefault();
        if(validationSignInForm()) {
            submit(event);
        }
    }

    if (event.target.classList.contains('submit__signIn')) {
        submitSignIn(event);
    }

    const submitRestore = (event) => {
        event.preventDefault();
        if(validationRestorePassword()) {
            submit(event);
        }
    }

    if (event.target.classList.contains('submit-restorePassword')) {
        submitRestore(event);
    }

    if(event.target.nodeName === 'A'){
        event.preventDefault();
        submit(event);
    }

};

export default handleChange;