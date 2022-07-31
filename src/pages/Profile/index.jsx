import {FaUserCircle} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useToast } from "../../custom-hooks";
import "./style.css";

const Profile=()=>{
    const {authUser, authDispatch}=useAuth();
    const {showToast}=useToast();
    const navigate=useNavigate();
    // const firstName= authUser.firstName;
    const handleLogoutUser = () => {
		authDispatch({ action: { type: "RESET_AUTH" } });
		showToast("Logged out successfully", "success");
		localStorage.removeItem("stream-tunes-token");
		localStorage.removeItem("stream-tunes-user");
		navigate("/login");
	};
    return(
        <div className="profile">
            {/* <FaUserCircle/> */}
            <h2 className="h-2">User details</h2>
            <table className="para-4 table-user p-1 m-1" >
                <tr>
                    <td>Name:</td>
                    <td>{`${authUser.firstName} ${authUser.lastName}`}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{authUser.email}</td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        {/* <button>Logout</button> */}
                        <button className="btn user-logout"
                            onClick={handleLogoutUser}>Logout</button>
                    </td>
                </tr>
            </table>
            {/* <div className="para-4">Name: {`${authUser.firstName} ${authUser.lastName}`}</div>
            <div className="para-4">Email: {authUser.email}</div> */}
            
        </div>
    );
}
export {Profile};