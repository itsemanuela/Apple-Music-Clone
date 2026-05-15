import { useState } from "react";
import MySidebar from "./Components/MySidebar";
import MainContent from "./Components/MainContent";
import Player from "./Components/Player";
import MyFooter from "./Components/MyFooter";
import Banner from "./Components/Banner";
import FavoriteSidebar from "./Components/FavoriteSidebar";
import ModalAbbonamento from "./Components/ModalAbbonamento";

function App() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);

  return (
    <div className="w-100" style={{ position: "relative" }}>
      <div className="sidebar-apple">
        <MySidebar onOpenFavorites={() => setShowFavorites(true)} />
      </div>

      <div className="main-content-offset">
        <MainContent />
        <MyFooter />
      </div>

      <div className="apple-player-container">
        <Player />
      </div>

      <Banner onOpenSub={() => setShowSubscription(true)} />

      <FavoriteSidebar
        show={showFavorites}
        handleClose={() => setShowFavorites(false)}
      />

      <ModalAbbonamento
        show={showSubscription}
        handleClose={() => setShowSubscription(false)}
      />
    </div>
  );
}

export default App;
