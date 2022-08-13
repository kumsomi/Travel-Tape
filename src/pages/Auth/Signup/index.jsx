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
				showToast("Email already registered.", "error");
			} else
				showToast("Sign up failed. Please try again later.", "error");
		}
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
                />
                </div>
                <div class="form-div">
                <label htmlFor="">Last Name</label>
                <input type="text" className="login-input primary-color"
                    name="lastName"
                    onChange={handleFormDataChange}
                    value={lastName}
                />
                </div>
                <div class="form-div">
                <label htmlFor="">Email address</label>
                <input type="email" className="login-input primary-color"
                    name="email"
                    onChange={handleFormDataChange}
                    value={email}
                />
                </div>
                <div class="form-div">
                <label htmlFor="">Password
                </label>
                <input type="password" className="login-input primary-color"
                    name="password"
                    onChange={handleFormDataChange}
                    value={password}
                />
                </div>
                {/* <div class="form-div">
                <label>
                <input type="checkbox" name="remember"/> Remember me
                </label>
                <div class="psw" >Forgot password?</div>
                </div> */}
                <button className="btn primary-btn login-btn">Signup</button>
                <Link to="/login">
                <span >Already have an account</span>
                </Link>
            </form>
        </div>
    </div>
    )
}
export {Signup};