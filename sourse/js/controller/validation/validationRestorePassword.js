export function validationRestorePassword () {
    const restoreEmail = document.getElementById('emailrestorePassword');
    const warningTextEmail = document.querySelector('.warningRestore-text_email')
    
    let usersFromLocalStorage = Object.keys(localStorage);

    for(let user of usersFromLocalStorage) {
        if( user !== restoreEmail.value) {
            restoreEmail.classList.add('warningInput');
            warningTextEmail.classList.add('active');
            return false;
        } else {
            restoreEmail.classList.remove('warningInput');
            warningTextEmail.classList.remove('active');
        }
    }
    return true;
}