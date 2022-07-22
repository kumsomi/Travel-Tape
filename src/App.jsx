import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Login, Signup, Explore, History, Home, Likes, NotFound, Playlist, PlaylistVideos, SingleVideo, WatchLater} from "./pages";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/explore/:videoId" element={<SingleVideo/>}/>
        <Route path="*" element={<NotFound/>}/>
        {/* Protected Routes */}
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/likes" element={<Likes/>}/>
        <Route path="/playlists" element={<Playlist/>}/>
        <Route path="/playlists/:playlistsId" element={<PlaylistVideos/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
