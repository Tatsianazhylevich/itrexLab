export class User {
    constructor(username, surname, email, password, passwordConfirm) {
        this.name = username;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }
    setUserToLS() {
        localStorage.setItem(this.email, JSON.stringify(this));
    }

}



