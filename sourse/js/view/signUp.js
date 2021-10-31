const signUpPage = {
    render: () => {
        return`
        <div class="container">
            <div class="form form-signUp">
                <div class="form-title title-signUp">
                    <p>Sign Up</p>
                </div>
    
                <div class="form-body">
    
                    <form action="https://jsonplaceholder.typicode.com/posts" method="POST" >
                        <div>
                            <input class="input-name" id="id" type="text" placeholder="First Name" name="firstName" required>
                        </div>
                        <div>
                            <input class="input-name" id="surname" type="text" placeholder="Last Name" name="lastName" >
                        </div>
                        <div>
                            <input class="input-email" id="email" type="text" placeholder="Email" name="email" required>
                        </div>
                        <div class="password">
                            <input class="input-password" id="password" type="password" placeholder="Password" name="password" required>
                            <a href="#" class="password-control"></a>
                            <div class="warning hidden"><p class="warning-text">Password contain unsupported characters</p></div>
                        </div>
                        <div class="password">
                            <input class="input-confirmPassword" id="passwordControl" type="password" placeholder="Confirm Password" required>
                            <a href="#" class="password-control"></a>
                        </div>
                    
                        <button class="input-submit submit__signUp" type="submit" value="Sign Up">Sign Up</button>
                    </form>
                </div> 
                <div class="footer footer-signUp">
                    <span>Already have an account?</span>
                    <a href="#" class="link-signIn" data-name="/sign-in">Sign in</a>
                </div>
                
            </div>
        </div>
    `
    }
};

export default signUpPage;