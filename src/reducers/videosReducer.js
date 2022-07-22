const videosReducerFunction = (prevVideosState, { type, payload }) => {
	switch (type) {
		case 'SUCCESS':
			return {
				...prevVideosState,
				videos: payload.videos,
				videosError: null,
				videosLoading: false,
			};

		case 'ERROR':
			return {
				...prevVideosState,
				videosError: "Videos could not load. Please try again later.",
				videosLoading: false,
			};

		case 'LOADER':
			return {
				...prevVideosState,
				videosLoading: payload.videosLoading,
			};

		default:
			throw new Error("Unknown action type.");
	}
};

export { videosReducerFunction };