import { useContext, createContext, useReducer } from "react";
import { authReducerFunction, initialAuthState } from "../reducers";

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
	const setInitialAuthState = () => {
		const travelTapeToken = localStorage.getItem("travel-tape-token");
		const travelTapeUser = localStorage.getItem("travel-tape-user");
		if (travelTapeToken) {
			return {
				...initialAuthState,
				authToken: travelTapeToken,
				isAuth: true,
				authUser: JSON.parse(travelTapeUser),
			};
		}
		return initialAuthState;
	};

	const [authState, authDispatch] = useReducer(
		authReducerFunction,
		setInitialAuthState()
	);
	return (
		<Provider value={{ ...authState, authDispatch }}>{children}</Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };