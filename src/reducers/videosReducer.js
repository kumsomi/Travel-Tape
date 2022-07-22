const videosReducerFunction = (prevVideosState, { type, payload }) => {
	switch (type) {
		case 'SUCCESS':
			return {
				...prevVideosState,
				videos: payload.videos,
				error: null,
				loading: false,
			};

		case 'ERROR':
			return {
				...prevVideosState,
				error: "Videos could not load. Please try again later.",
				loading: false,
			};

		case 'LOADER':
			return {
				...prevVideosState,
				loading: payload.videosLoading,
			};

		case 'SORTING_OPTION':
			return {
				...prevVideosState,
				sortOption: payload.videosSortOption,
			};

		case 'SEARCH_TEXT':
			return {
				...prevVideosState,
				searchText: payload.videosSearchText,
			};

		default:
			throw new Error("Unknown action type.");
	}
};

export { videosReducerFunction };