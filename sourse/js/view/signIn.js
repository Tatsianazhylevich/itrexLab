let signInPage = {
    render: () => {
        return `
        <div class="container">
            <div class="form form-signIn">
                <div class="form-title title-signIn">
                    <p>Sign In</p>
                </div>
        
                <div class="form-body">
        
                    <form action="https://jsonplaceholder.typicode.com/posts" method="POST" >
                        <div class="email">
                            <input class="input-email" id="emailSignIn" type="text" placeholder="Email" name="email" required>
                            <div class="warning hidden"><p class="warning-text">Email not found. Please check the spelling</p></div>
                        </div>
                        <div class="password">
                            <input class="input-password" id="passwordSignIn" type="password" placeholder="Password" name="password" required>
                            <a href="#" class="password-control"></a>
                            <div class="warning hidden"><p class="warning-text">Password contain unsupported characters</p></div>
                        </div>
                    
                        <button class="input-submit submit__signIn" type="submit" value="Sign In">Sign In</button>
                        <a class="link-forgotPassword" href="#" id="ForgotPassword" data-name="/restore-password">Forgot password?</a>
                    </form>
                </div>
        
                <div class="footer footer_signIn">
                    <span>Don't have an account?</span>
                    <a href="#" class="link-signUp" data-name="/">Sign up</a>
                </div>
                
            </div>
        </div>
        `
    }
};

export default signInPage;