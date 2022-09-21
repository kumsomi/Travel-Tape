import { VideoListing } from "../../Components";
import { usePageTitle, useToast } from "../../custom-hooks";
import { Link } from "react-router-dom";
import { useAuth, useUserData } from "../../contexts";
import { clearVideosFromHistoryService } from "../../service";


const History=()=>{
    usePageTitle('Travel Tape | History');
    const {
		userDataLoading,
		userDataError: { historyError },
		history,
		userDataDispatch,
	} = useUserData();

	const { authToken } = useAuth();
	const { showToast } = useToast();

    const handleClearHistory = async (event) => {
		userDataDispatch({
			type: "SET_LOADER",
			payload: { loading: true },
		});

		try {
			const {
				data: { history },
			} = await clearVideosFromHistoryService(authToken);
			userDataDispatch({ type: "SET_HISTORY", payload: { history } });
			showToast("Successfully deleted your watch history.", "success");
		} catch (error) {
			showToast("Failed to clear your watch history.", "error");
		}

		userDataDispatch({
			type: "SET_LOADER",
			payload: { loading: false },
		});
	};

    return(
        <div>
            <h1 className="text-center">Videos in history: {history.length}</h1>
            {
                history?.length ?( 
                    <div>
						<div className="page-btn">
							<button onClick={handleClearHistory} className="btn primary-btn ">Clear history</button>
						</div>
                    <VideoListing videos={history}/>
                    </div>
                ):(
                    <div>
                        <div className="m-3">There are no videos in history list. Explore more.</div>
                            <Link to="/explore" className="btn">
                                Explore now
                            </Link> 
                    </div>
                )
            } 

        
        </div>
    )
}
export {History};