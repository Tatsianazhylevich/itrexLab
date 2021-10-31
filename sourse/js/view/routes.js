import signUpPage from "./signUp.js";
import signInPage from './signIn.js';
import restorePasswordPage from './restorePassword.js';
import restoredPasswordPage from './restoredPassword.js';
import doctorViewEmpty from "./doctorViewEmpty.js";
import doctorViewCard from "./doctorViewCard.js"
import errorPage from './errorPage.js';

export const routes = [
    { path: '/', component: signUpPage },
    { path: '/sign-in', component: signInPage},
    { path: '/restore-password', component: restorePasswordPage},
    { path: '/restored-password', component: restoredPasswordPage},
    { path: '/empty-board', component: doctorViewEmpty},
    { path: '/patient-board', component: doctorViewCard},
    { path: '/error404', component: errorPage},
]