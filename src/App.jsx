import MySidebar from "./Components/MySidebar";
import MainContent from "./Components/MainContent";
import MyBottomNav from "./Components/MyBottomNav";
import Player from "./Components/Player";

function App() {
  return (
    <div className="container-fluid p-0 bg-white min-vh-100">
      <MySidebar />
      <div className="main-content-offset">
        <MainContent />
      </div>

      <MyBottomNav />

      <Player />
    </div>
  );
}

export default App;
