let restorePasswordPage = {
    render: () => {
        return `
        <div class="container">
            <div class="form form-restorePassword">
                <div class="form-title title-restorePassword">
                    <a data-name="/sign-in" class="arrowLeft"></a>
                    <p class="title-text">Restore Password</p>
                </div>
        
                <div class="form-text text-restorePassword">
                    <p>Please use your email address, and we’ll send you the link to reset your password</p>
                </div>
        
                <div class="form-body body_restorePassword">
        
                    <form>
                        <div>
                            <input class="input-email" id="emailrestorePassword" type="text" placeholder="Email">
                        </div>
                    
                        <button class="input-submit submit-restorePassword" id="submit-restorePassword" type="submit" value="Send Reset Link" data-name="/restored-password">Send Reset Link</button>
                    </form>
                </div>
        
            </div>
        </div>
    `
    }
};

export default restorePasswordPage;