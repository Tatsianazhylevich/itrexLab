let doctorViewEmpty = {
    render: () => {
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
            <section class="board_empty hidden">
                <div class="board_header">
                    <h2 class="board_title">My Patients</h2>
                </div>
                <div class="board_empty-main">
                    <div class="board_empty-image">
                        <img src="./sourse/images/medical-history.png" alt="medical_card">
                    </div>
                    <div class="board_empty-text">
                        <p class="empty-text">You have no patients yet. <br> To create a patient profile, please contact your administrator.</p>
                    </div> 
                </div>
            </section>

            <section class="board_card">
                <div class="board_header card-header">
                    <h2 class="board_title">My Patients</h2>
                </div>
                <ul class="card-list">
                    <li class="card-item">
                        <div class="card_header">
                            <div class="card_header-info">
                                <div class="card_header-foto"></div>
                                <div class="card_header-about">
                                    <h4 class="card_header-name">Jane Cooper</h4>
                                     <div class="card_header-status">
                                        <div class="status"></div>
                                        <p class="status-text">Appointment is confirmed</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card_header-more"></div>
                         </div>

                        <div class="card_main">
                            <div class="card_main-date">
                                <div class="date-icon"></div>
                                <p class="date-text"> Thu Sept 10, 2021 4 pm - 5 pm</p>
                            </div>
                            <div class="card_main-note">
                                <div class="note-icon"></div>
                                <div class="note-text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</div>
                            </div>
                        </div>
                    </li>
                </ul>
                  
            </section>
        </div>
    </div>
    `
    }
};
export default doctorViewEmpty;