import { useAuth, useUserData } from "../../../../contexts";
import { useToast } from "../../../../custom-hooks";
import { deleteVideoFromPlaylistService, postVideoToPlaylist } from "../../../../service";

const PlaylistOption=({video, playlist})=>{
    const { userDataDispatch, userDataLoading } = useUserData();
	const { showToast } = useToast();
	const { authToken } = useAuth();

	const isVideoEmpty = !video || !Object.keys(video).length;
	// const [isOnGoingNetworkCall, setIsOnGoingNetworkCall] = useState(false);

	const isVideoInPlaylist =
		!isVideoEmpty &&
		playlist.videos.find(
			(playlistVideo) => playlistVideo._id === video._id
		) === undefined
			? false
			: true;

	const handleChangePlaylist = async (e) => {
		// setIsOnGoingNetworkCall(true);
		try {
			const {
				data: { playlist: updatedPlaylist },
			} = isVideoInPlaylist
				? await deleteVideoFromPlaylistService(
						authToken,
						playlist._id,
						video._id
				  )
				: await postVideoToPlaylist(authToken, playlist._id, video);
			userDataDispatch({
				type: "UPDATE_PLAYLISTS",
				payload: { playlist: updatedPlaylist },
			});
			showToast(
				isVideoInPlaylist
					? "Video removed from playlist."
					: "Video added to playlist.",
				"success"
			);
		} catch (error) {
			showToast(
				isVideoInPlaylist
					? "Failed to remove video playlist."
					: "Failed to add video to playlist.",
				"error"
			);
		}
		// setIsOnGoingNetworkCall(false);
	};
    return(
        <div>
            <label
                key={playlist._id}
				video={video}
				playlist={playlist}
                // className="playlist-option text-sm flex-row flex-align-start flex-justify-start"
            >
				{console.log(video)}
                {isVideoEmpty ? null : (
                    <input
                        // className="text-sm mr-0-25"
                        type="checkbox"
                        name={`playlist-${playlist.title}`}
                        id={playlist._id}
                        checked={isVideoInPlaylist}
                        onChange={handleChangePlaylist}
                        // disabled={userDataLoading || isOnGoingNetworkCall}
                    />
                )}
									{/* <input type="checkbox" name="" id=""  className="mr-1"/> */}
                <span className="label-text">{playlist.title}</span>
            </label>
        </div>
    )
}
export {PlaylistOption};