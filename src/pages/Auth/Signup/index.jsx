import { Link, useLocation, useNavigate } from "react-router-dom";
import { React, useEffect, useReducer, useState } from "react";
import { signupService } from "../../../service";
import { usePageTitle, useToast } from "../../../custom-hooks";
import { useAuth } from "../../../contexts";

const Signup=()=>{

    usePageTitle('Travel Tape | Login');

    const initialFormData = {
        firstName:"",
        lastName:"",
		email: "",
		password: "",
	};
    const {authUser}=useAuth();
    const [formData, setFormData] = useState(initialFormData);
    const [isSigningUp, setIsSigningUp] = useState(false);
    
    const location = useLocation();
    const navigate = useNavigate();
    const { showToast } = useToast();
	
    const { authDispatch, isAuth } = useAuth();

    useEffect(() => {
		if (isAuth) {
			navigate(location?.state?.from ?? "/login", { replace: true });
		}
    },[]);

    const {firstName, lastName, email, password}=formData;

    const handleFormDataChange = (event) => {
		const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};
    const handleFormSubmit = async (event) => {
		event.preventDefault();
        
        try {
			const { data } = await signupService(formData);
			const { encodedToken, createdUser } = data;
			
            authDispatch({
				action: {
					type: "AUTH",
					payload: { authUser: createdUser, authToken: encodedToken },
				},
			});
            // console.log("created user in signup=",createdUser,encodedToken);
            setFormData(initialFormData);
			showToast("Sign up successful!", "success");
            navigate(location?.state?.from ?? "/login", { replace: true });
		} catch (error) {
			setIsSigningUp(false);
			if (error.message.includes("422")) {
				showToast("This email is already registered. Try login.", "success");
			} else
				showToast("Sign up failed. Please try again later.", "error");
		}
	};

    const handleSignupWithTestCredentials = (event) => {
		setFormData({
            
            // process.env.REACT_APP_GUEST_USER_NAME,
            
            // process.env.REACT_APP_GUEST_USER_LAST_NAME,
            firstName:process.env.REACT_APP_GUEST_USER_NAME,
            lastName:process.env.REACT_APP_GUEST_USER_LAST_NAME,
			email: process.env.REACT_APP_GUEST_USER_EMAIL,
			password: process.env.REACT_APP_GUEST_USER_PASSWORD,
			rememberMe: true,
		});
		// showToast("credentials set","info");
	};
    
    // const {
	// 	firstNameError,
	// 	lastNameError,
	// 	passwordError,
	// 	confirmPasswordError,
	// } = formDataError;

    return(
    <div class="login">
        <h3>Signup page</h3>
        <div>
            <form className="form" 
            onSubmit={handleFormSubmit}
            >

                <div class="form-div">
                <label htmlFor="">First Name</label>
                <input type="text" className="login-input primary-color"
                    name="firstName"
                    onChange={handleFormDataChange}
                    value={firstName}
                    placeholder="John"
                    required
                />
                </div>
                <div class="form-div">
                <label htmlFor="">Last Name</label>
                <input type="text" className="login-input primary-color"
                    name="lastName"
                    onChange={handleFormDataChange}
                    value={lastName}
                    placeholder="Milan"
                    required
                />
                </div>
                <div class="form-div">
                <label htmlFor="">Email address</label>
                <input type="email" className="login-input primary-color"
                    name="email"
                    onChange={handleFormDataChange}
                    value={email}
                    placeholder="johnmilan@gmail.com"
                    required

                />
                </div>
                <div class="form-div">
                <label htmlFor="">Password
                </label>
                <input type="password" className="login-input primary-color"
                    name="password"
                    onChange={handleFormDataChange}
                    value={password}
                    placeholder="****"
                    required
                />
                </div>
                {/* <div class="form-div">
                <label>
                    <input 
                        type="checkbox" 
                        id="checkbox-remember"
                        checked={rememberMe}
                        disabled={isLoggingIn}
                        name="rememberMe"
                        onChange={handleFormDataChange}
                    /> Remember me
                </label>
            </div> */}
                {/* <div class="form-div">
                <label>
                <input type="checkbox" name="remember"/> Remember me
                </label>
                <div class="psw" >Forgot password?</div>
                </div> */}
                <button className="btn primary-btn login-btn">Signup</button>
                <button className="btn secondary-btn login-btn"
                    onClick={handleSignupWithTestCredentials}
                >
                    Signup with Test Credential</button>
            
                <Link className="new-account" to="/login">
                <span>Already have an account</span>
                </Link>
            </form>
        </div>
    </div>
    )
}
export {Signup};