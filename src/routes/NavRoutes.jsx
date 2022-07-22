import {Routes, Route, useLocation} from "react-router-dom";
import {Login, Signup, Explore, History, Home, Likes, NotFound, Playlist, PlaylistVideos, SingleVideo, WatchLater} from "../pages";
// import { Footer, Navbar } from "../Components";
import {ProtectedRoutes} from "./ProtectedRoutes";

const NavRoutes=()=>{
  const location = useLocation();
  return location.pathname === "/" ? (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
) : (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/explore/:videoId" element={<SingleVideo/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<ProtectedRoutes />}>
			<Route path="/watchlater" element={<WatchLater />} />
			<Route path="/likes" element={<Likes />} />
		    <Route path="/playlists" element={<Playlist />} />
    		<Route
    			path="/playlists/:playlistsId"
    			element={<PlaylistVideos />}
    		/>
    		<Route path="/history/" element={<History />} />
		</Route>
      </Routes>
)
}
export {NavRoutes};