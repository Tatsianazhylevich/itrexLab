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
                    <li class="menu_item activeMenuItem"><a class="item-link" href="#" data-name="/patient-board">Patients</a></li>
                    <li class="menu_item"><a  class="item-link" href="#">Resolutions</a></li>
                </ul>
            </nav>
            <section class="board_empty">
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
        </div>
    </div>
    `
    }
};
export default doctorViewEmpty;