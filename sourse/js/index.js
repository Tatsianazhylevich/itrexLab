import handleChange from "./model/handleChange.js";
// import {passwordControl} from './controller/passwordControl/passwordControl.js';
import patientController from "./controller/patientController.js";
import { Model } from "./model/Model.js";
import signUpPage from "./view/signUp.js";
import signInPage from './view/signIn.js';
import restorePasswordPage from './view/restorePassword.js';
import restoredPasswordPage from './view/restoredPassword.js';
import doctorViewEmpty from "./view/doctorViewEmpty.js";
import errorPage from './view/errorPage.js';
import DoctorViewCard from "./view/doctorViewCard.js";

const root = document.getElementById("root");
const patientsMVC = new patientController(new Model(),new DoctorViewCard())

export const routes = [
    { path: '/', component: signUpPage },
    { path: '/sign-in', component: signInPage},
    { path: '/restore-password', component: restorePasswordPage},
    { path: '/restored-password', component: restoredPasswordPage},
    { path: '/empty-board', component: doctorViewEmpty},
    { path: '/patient-board', component: patientsMVC},
    { path: '/error404', component: errorPage},
]

const router = () => {
  
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
    container.addEventListener('click', handleChange);
    // const eyes = document.querySelectorAll('.password-control');
    // eyes.forEach((eye) => eye.addEventListener('click', passwordControl));  
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

export default router;