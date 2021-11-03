const signUpPage = {
    render: () => {
        return`
        <div class="container">
            <div class="form form-signUp">
                <div class="form-title title-signUp">
                    <p>Sign Up</p>
                </div>
    
                <div class="form-body">
    
                    <form action="#">
                        <div>
                            <input class="input-name" id="id" type="text" placeholder="First Name" name="firstName" required>
                            <p class="warning-text_name">Name contain unsupported characters</p>
                        </div>
                        <div>
                            <input class="input-name" id="surname" type="text" placeholder="Last Name" name="lastName" >
                            <p class="warning-text_surname">Surname contain unsupported characters</p>
                        </div>
                        <div>
                            <input class="input-email" id="email" type="text" placeholder="Email" name="email" required>
                            <p class="warning-text_email">Email contain unsupported characters</p>
                        </div>
                        <div class="password">
                            <input class="input-password" id="password" type="password" placeholder="Password" name="password" required>
                            <a href="#" class="password-control"></a>
                            <p class="warning-text_pass">Password contain unsupported characters</p>
                        </div>
                        <div class="password">
                            <input class="input-confirmPassword" id="passwordControl" type="password" placeholder="Confirm Password" required>
                            <a href="#" class="password-control"></a>
                            <p class="warning-text_confirm">Password confirmation does not match</p>
                        </div>
                    
                        <button class="input-submit submit__signUp" type="submit" value="Sign Up" data-name="/patient-board">Sign Up</button>
                    </form>
                </div> 
                <div class="footer footer-signUp">
                    <span>Already have an account?</span>
                    <a href="/sign-in" class="link-signIn" data-name="/sign-in">Sign in</a>
                </div>
                
            </div>
        </div>
    `
    }
};

export default signUpPage;