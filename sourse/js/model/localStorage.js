export class User {
    constructor(username, surname, email, password, passwordConfirm) {
        this.name = username;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }
    setUserToLS() {
        let patients = JSON.parse(localStorage.getItem('patients')) || [];
        patients.push(this)
        localStorage.setItem('patients', JSON.stringify(patients));
    }

}



