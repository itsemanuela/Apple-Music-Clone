import MySidebar from "./components/MySidebar";
import MainContent from "./Components/MainContent";
import MyBottomNav from "./Components/MyBottomNav";
import Player from "./Components/Player";

function App() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0 bg-white text-dark overflow-hidden">
      <div className="row g-0 flex-grow-1 overflow-hidden">
        <MySidebar />

        <MainContent />
      </div>

      <MyBottomNav />

      <Player />
    </div>
  );
}

export default App;
