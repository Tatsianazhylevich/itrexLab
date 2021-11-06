let signInPage = {
    render: () => {
        return `
        <div class="container">
            <div class="form form-signIn">
                <div class="form-title title-signIn">
                    <p>Sign In</p>
                </div>
        
                <div class="form-body">
        
                    <form action="#" >
                        <div class="email">
                            <input class="input-email" id="emailSignIn" type="text" placeholder="Email" name="email" required>
                            <p class="warningSignIn-text_email">Email not found. Please check the spelling</p>
                        </div>
                        <div class="password">
                            <input class="input-password" id="passwordSignIn" type="password" placeholder="Password" name="password" required>
                            <button href="#" class="password-control"></button>
                            <p class="warningSignIn-text_pass">Password contain unsupported characters</p>
                        </div>
                    
                        <button class="input-submit submit__signIn" type="submit" value="Sign In" data-name="/patient-board">Sign In</button>
                        <a class="link-forgotPassword" href="#/restore-password" id="ForgotPassword" data-name="/restore-password">Forgot password?</a>
                    </form>
                </div>
        
                <div class="footer footer_signIn">
                    <span>Don't have an account?</span>
                    <a href="#/" class="link-signUp" data-name="/">Sign up</a>
                </div>
                
            </div>
        </div>
        `
    }
};

export default signInPage;