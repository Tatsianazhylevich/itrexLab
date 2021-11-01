import { routes } from "./view/routes.js";
import handleChange from "./model/handleChange.js";

import {passwordControl} from './controller/passwordControl/passwordControl.js'

const root = document.getElementById("root");

console.log(location)
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';


const router = () => {

    // const path = parseLocation();

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