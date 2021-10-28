import router from './view/route.js';

const handleChange = (event) => {
   
    if (event.target.nodeName !== 'A') {
        return;
    }
    event.preventDefault();
    

    history.pushState({}, null, `${event.target.dataset.name}`);

    router();
};

export default handleChange;