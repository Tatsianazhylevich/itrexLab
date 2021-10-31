let restoredPasswordPage = {
    render: () => {
        return `
        <div class="container">
            <div class="form form-restorePassword">
                <div class="form-title title-restorePassword">
                <a data-name="/sign-in" class="arrowLeft"></a>
                    <p class="title-text">Restore Password</p>
                </div>
                <div class="form-text text-restorePassword">
                    <p>An email has been sent to example@exam.com. Check your inbox, and click the reset link provided.</p>
                </div>
            </div>
        </div>
    `
    }
};
export default restoredPasswordPage;