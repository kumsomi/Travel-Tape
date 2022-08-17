const videosReducerFunction = (prevVideosState, { type, payload }) => {
	// console.log("type",type, "payload:", payload);
	// console.log("in reducer",prevVideosState);
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

		case 'SET_SORTING_OPTION':
			return {
				...prevVideosState,
				videosSortOption: payload.videosSortOption,
			};
		case 'SET_SEARCH_TEXT':
			return {
				...prevVideosState,
				videosSearchText: payload.videosSearchText,
			};
		default:
			throw new Error("Unknown action type.");
	}
};

export { videosReducerFunction };