import { Patient } from "./patient.js";


export default class DoctorViewCard {
    render (patients) {
        return `
        <div class="wrapper">
        <header class="header">
            <div class="header-logo">
                <img class="logo-img" src="./sourse/images/logo.png" alt="logo">
                <h2 class="logo-text">palm clinic</h2>
            </div>
            <div class="header_user">
                <div class="header_user-info">
                    <p class="header_user-name">Miranda Nelson</p>
                    <p class="header_user-profession">Doctor</p>
                </div>
                <div class="header_user-foto">
                    <div class="header_user-status"></div>
                </div>
            </div>
        </header>
        <div class="main">
            <nav class="menu">
                <ul class="menu_container">
                    <li class="menu_item activeMenuItem"><a class="item-link" href="#">Patients</a></li>
                    <li class="menu_item"><a  class="item-link" href="#">Resolutions</a></li>
                </ul>
            </nav>
            <section class="board_card">
                <div class="board_header card-header">
                    <h2 class="board_title">My Patients</h2>
                </div>
                <ul class="card-list">
                    ${patients.map((patient) => {
                        const newPatient = new Patient(patient);
                        return newPatient.render() 
                    }).join("")} 
                </ul> 
            </section>
        </div>
    </div>
    `
    }
};
