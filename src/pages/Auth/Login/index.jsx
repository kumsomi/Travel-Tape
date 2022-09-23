import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth} from "../../../contexts";
import { useToast, usePageTitle } from "../../../custom-hooks";
import { loginService } from "../../../service";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import "../style.css";

const Login = () => {  
    usePageTitle('Travel Tape | Login');

    const initialFormData = {
		email: "",
		password: "",
		rememberMe: false,
	};

	const [formData, setFormData] = useState(initialFormData);

	const [showPassword, setShowPassword]=useState(false);
	const showPasswordIcon = showPassword?(
	<AiFillEye/>):(<AiFillEyeInvisible/>);
	const handleChangePasswordVisibility=()=>{
		setShowPassword((prev)=>!prev);
	}
	const navigate = useNavigate();
	const location = useLocation();

	const [isLoggingIn, setIsLoggingIn] = useState(false);

	const { authDispatch, isAuth, authLoading } = useAuth();
	const { showToast } = useToast();


	useEffect(() => {
		if (isAuth) {
			navigate(-1, { replace: true });
		}
	}, []);

	const handleFormDataChange = (event) => {
		const { name, value, checked } = event.target;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: name === "rememberMe" ? checked : value,
		}));
	};

	

	const handleFormSubmit = async (event) => {
		setIsLoggingIn(true);
		event.preventDefault();
		try {
			const { data } = await loginService(formData);
			const { encodedToken, foundUser } = data;
			
			authDispatch({
				action: {
					type: "AUTH_LOADING",
					payload: { authLoading: true },
				},
			});

			authDispatch({
				action: {
					type: "AUTH",
					payload: { authUser: foundUser, authToken: encodedToken },
				},
			});
			if (rememberMe) {
				localStorage.setItem("token", encodedToken);
				localStorage.setItem(
					"user",
					JSON.stringify(foundUser)
				);
				localStorage.setItem("travel-tape-token", encodedToken);
				localStorage.setItem("travel-tape-user",JSON.stringify(foundUser));
			}

			setFormData(initialFormData);
			
			showToast("Login successfull.", "success");
			authDispatch({
				action: {
					type: "AUTH_LOADING",
					payload: { authLoading: false },
				},
			});
			navigate(location?.state?.from ?? -1);
		} catch (error) {
			setIsLoggingIn(false);
			if (error.message.includes("404"))
				showToast("Username not found!", "error");
			else showToast(`Login Failed. Please try again later:${error}`, "error");
		}
	};

	const { email, password, rememberMe } = formData;
	// setShowPassword((prevShowPassword) => !prevShowPassword);

	const handleLoginWithTestCredentials = (event) => {
		setFormData({
			email: process.env.REACT_APP_GUEST_USER_EMAIL,
			password: process.env.REACT_APP_GUEST_USER_PASSWORD,
			rememberMe: true,
		});
		// showToast("credentials set","info");
	};


  return (
    <div class="login">
      <h3>Login page</h3>
      <div>
        <form action="" className="form" onSubmit={handleFormSubmit}>
            <div class="form-div">
                <label htmlFor="">Email address</label>
                <input 
                    type="email" 
                    name="email"
                    id="input-login-email"
                    placeholder="jane@gmail.com"
                    value={email}
                    disabled={isLoggingIn}
                    onChange={handleFormDataChange}
                    required                
                    className="login-input primary-color"
                />
            </div>
            <div class="form-div">
                <label htmlFor="">Password</label>
				<span className="login-input-container">
					<input 
						type= {`${showPassword?"text":"password"}`}
						 
						id="input-login-psd"
						disabled={isLoggingIn}
						placeholder="********"
						name="password"
						value={password}
						onChange={handleFormDataChange}
						required            
						className="login-input password-input primary-color"
					/>
					<div className="show-psd-btn" onClick={handleChangePasswordVisibility}>
						{showPasswordIcon}
					</div>
				</span>
            </div>
            <div class="form-div">
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
            {/* <div class="psw" >Forgot password?</div> */}
            </div>
            
            <input 
                type="submit"
                disabled={isLoggingIn}
				value="Login"
                className="btn primary-btn login-btn"
            />
            <input 
                type="submit"
                value="Login with Test Credentials"
                disabled={isLoggingIn}
                onClick={handleLoginWithTestCredentials} 
                className="btn secondary-btn login-btn"
            />

            <Link className="new-account" to="/signup">
            <span >Create new account</span>
            </Link>
        </form>
      </div>
    </div>
  );
};

export { Login };