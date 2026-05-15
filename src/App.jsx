import MySidebar from "./Components/MySidebar";
import MainContent from "./Components/MainContent";
import Player from "./Components/Player";
import MyFooter from "./Components/MyFooter";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="w-100" style={{ position: "relative" }}>
      <div className="sidebar-apple">
        <MySidebar />
      </div>

      <div className="main-content-offset">
        <MainContent />
        <MyFooter />
      </div>

      <div className="apple-player-container">
        <Player />
      </div>

      <Banner />
    </div>
  );
}

export default App;
