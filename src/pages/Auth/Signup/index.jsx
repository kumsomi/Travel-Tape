import { Link, useLocation, useNavigate } from "react-router-dom";
import { React, useEffect, useReducer, useState } from "react";
import { signupService } from "../../../service";
import { usePageTitle, useToast } from "../../../custom-hooks";
import { useAuth } from "../../../contexts";
const Signup=()=>{

    usePageTitle('Travel Tape | Sign up');


    
    
    return(
    <div class="login">
        <h3>Signup page</h3>
        <div>
            <form className="form" 
            // onSubmit={handleFormSubmit}
            >
                <div class="form-div">
                <label htmlFor="">Email address</label>
                <input type="email" className="login-input primary-color"
                    // onChange={handleFormDataChange}
                    // value={email}
                />
                </div>
                <div class="form-div">
                <label htmlFor="">Password
                </label>
                <input type="password" className="login-input primary-color"
                    // onChange={handleFormDataChange}
                    // value={password}
                />
                </div>
                <div class="form-div">
                {/* <label>
                <input type="checkbox" name="remember"/> Remember me
                </label> */}
                <div class="psw" >Forgot password?</div>
                </div>
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