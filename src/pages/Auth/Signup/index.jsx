import { Link } from "react-router-dom";
import { usePageTitle } from "../../../custom-hooks";
const Signup=()=>{

    usePageTitle('Travel Tape | Login');

    return(
    <div class="login">
        <h3>Signup page</h3>
        <div>
            <form action="" className="form">
                <div class="form-div">
                <label htmlFor="">Email address</label>
                <input type="email" className="login-input primary-color"/>
                </div>
                <div class="form-div">
                <label htmlFor="">Password
                </label>
                <input type="password" className="login-input primary-color"/>
                </div>
                <div class="form-div">
                <label>
                <input type="checkbox" name="remember"/> Remember me
                </label>
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