export class Patient {
    constructor({avatar, firstName,lastName, status, description, time}) {
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        this.description = description;
        this.time = time;
    }

    render() {
        return`
                <li class="card-item">
                    <div class="card_header">
                        <div class="card_header-info">
                            <img class="card_header-foto" src=${this.avatar}/>
                            <div class="card_header-about">
                                <h4 class="card_header-name">${this.firstName} ${this.lastName}</h4>
                                 <div class="card_header-status">
                                    <div class="status"></div>
                                    <p class="status-text">${this.status}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card_header-more"></div>
                     </div>

                    <div class="card_main">
                        <div class="card_main-date">
                            <div class="date-icon"></div>
                            <p class="date-text">${this.time}</p>
                        </div>
                        <div class="card_main-note">
                            <div class="note-icon"></div>
                            <div class="note-text">${this.description}</div>
                        </div>
                    </div>
                </li>`
    }
}