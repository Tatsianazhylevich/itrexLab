import signUpPage from "./signUp.js";
import signInPage from './signIn.js';
import restorePasswordPage from './restorePassword.js';
import restoredPasswordPage from './restoredPassword.js';
import doctorViewEmpty from "./doctorViewEmpty.js";
import errorPage from './errorPage.js';
import handleChange from "../handleChange.js";

import {passwordControl} from '../passwordControl/passwordControl.js'

const root = document.getElementById("root");

const routes = [
    { path: '/', component: signUpPage },
    { path: '/sign-in', component: signInPage},
    { path: '/restore-password', component: restorePasswordPage},
    { path: '/restored-password', component: restoredPasswordPage},
    { path: '/patient-board', component: doctorViewEmpty},
    { path: '/error404', component: errorPage},
]

console.log(location)
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';


const router = () => {

    const path = parseLocation();

    const findMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })
    const match = findMatches.find(potentialMatch => potentialMatch.isMatch);
 
    const matchComponent = match.route;
    const component = matchComponent.component;
   
    root.innerHTML = component.render();


    const container = document.querySelector('.container');
    const form = document.querySelector('form');
    container.addEventListener('click', handleChange);
    form.addEventListener('click', passwordControl);
    
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

export default router;