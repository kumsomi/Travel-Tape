import "./App.css";
import {useLocation} from "react-router-dom";
// import {Login, Signup, Explore, History, Home, Likes, NotFound, Playlist, PlaylistVideos, SingleVideo, WatchLater} from "./pages";
import { Footer, Navbar } from "./Components";
import { NavRoutes } from "./routes/NavRoutes";
// import {ProtectedRoutes} from "./routes/ProtectedRoutes";
function App() {
  // const {pathname} = useLocation();
  return (
    <div className="app">
      <Navbar className="nav-mode"/>
      <div className="mode">
      {/* <Routes>
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
      </Routes> */}
      <NavRoutes/>
      </div>
      <Footer className="footer-mode"/>
    </div>

  );
}

export default App;
