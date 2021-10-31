export class User {
    constructor(username, surname, email, password) {
        this.name = username;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
    setUserToLS() {
        localStorage.setItem(this.email, JSON.stringify(this));
    }

}



