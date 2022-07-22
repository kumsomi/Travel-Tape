const initialAuthState = {
	isAuth: false,
	authToken: "",
	authLoading: false,
	authError: null,
	authUser: {},
};

const authReducerFunction = (prevAuthState, { action: { type, payload } }) => {
	switch (type) {
		case "AUTH":
			return {
				...prevAuthState,
				isAuth: true,
				authError: null,
				authUser: payload.authUser,
				authToken: payload.authToken,
			};

		case "AUTH_LOADING":
			return {
				...prevAuthState,
				authLoading: payload.authLoading,
			};

		case "RESET_AUTH":
			return initialAuthState;

		default:
			throw new Error("Invalid Dispatch action type!");
	}
};

export { authReducerFunction, initialAuthState };