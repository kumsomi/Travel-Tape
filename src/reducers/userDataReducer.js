const userDataReducerFunction = (prevUserDataState, { type, payload }) => {
	switch (type) {
		case 'SET_LOADER':
			return {
				...prevUserDataState,
				userDataLoading: payload.loading,
			};

		case 'SET_ERROR':
			return {
				...prevUserDataState,
				userDataError: {
					...prevUserDataState.userDataError,
					...payload.error,
				},
				userDataLoading: payload.loading,
			};

		case 'SET_WATCH_LATER':
			return {
				...prevUserDataState,
				watchlater: [...payload.watchlater],
			};

		case 'SET_LIKES':
			return {
				...prevUserDataState,
				likes: [...payload.likes],
			};

		case 'SET_PLAYLISTS':
			return {
				...prevUserDataState,
				playlists: [...payload.playlists],
			};

		case 'UPDATE_PLAYLISTS':
			return {
				...prevUserDataState,
				playlists: prevUserDataState.playlists.map((prevPlaylist) =>
					prevPlaylist._id === payload.playlist._id
						? { ...payload.playlist }
						: { ...prevPlaylist }
				),
			};

        case 'SET_HISTORY':
            return {
                ...prevUserDataState,
                history: [ ...payload.history ]
            }

		default:
			throw new Error("Unknown action type.");
	}
};

export { userDataReducerFunction };