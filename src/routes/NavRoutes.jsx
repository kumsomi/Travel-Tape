import {Routes, Route, useLocation} from "react-router-dom";
import {Login, Signup, Explore, History, Home, Likes, NotFound, Playlist, PlaylistVideos, SingleVideo, WatchLater, Profile} from "../pages";
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
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
)
}
export {NavRoutes};