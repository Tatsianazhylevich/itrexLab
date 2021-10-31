import router from './view/route.js';
import { validationSignUpForm } from './validation/validationSignUpForm.js';
import { validationSignInForm } from './validation/validationSignInForm.js';
import { validationRestorePassword } from './validation/validationRestorePassword.js';


const handleChange = (event) => {

    const submit = (e) => {
        history.pushState({}, null, `${e.target.dataset.name}`);
        router();
    }

    const submitSignUp = (e) => {
        event.preventDefault();
        if(validationSignUpForm()) {
            submit(event);
        }
    }

    if (event.target.classList.contains('submit__signUp')) {
        submitSignUp(event);
    }

    const submitSignIn = (e) => {
        event.preventDefault();
        if(validationSignInForm()) {
            submit(event);
        }
    }

    if (event.target.classList.contains('submit__signIn')) {
        submitSignIn(event);
    }

    const submitRestore = (e) => {
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