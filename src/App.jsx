import { useState } from "react";
import MySidebar from "./Components/MySidebar";
import MainContent from "./Components/MainContent";
import Player from "./Components/Player";
import MyFooter from "./Components/MyFooter";
import Banner from "./Components/Banner";
import FavoriteSidebar from "./Components/FavoriteSidebar";

function App() {
  const [showFavorites, setShowFavorites] = useState(false);

  const handleOpenFavorites = () => setShowFavorites(true);
  const handleCloseFavorites = () => setShowFavorites(false);

  return (
    <div className="w-100" style={{ position: "relative" }}>
      <div className="sidebar-apple">
        <MySidebar onOpenFavorites={handleOpenFavorites} />
      </div>

      <div className="main-content-offset">
        <MainContent />
        <MyFooter />
      </div>

      <div className="apple-player-container">
        <Player />
      </div>

      <Banner />

      <FavoriteSidebar
        show={showFavorites}
        handleClose={handleCloseFavorites}
      />
    </div>
  );
}

export default App;
