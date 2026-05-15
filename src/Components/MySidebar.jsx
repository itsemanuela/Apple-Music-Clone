import musicLogo from "../assets/music.svg";
import "../App.css";

const MySidebar = () => {
  return (
    <nav className="sidebar-apple">
      <div className="mb-5 ps-2">
        <img src={musicLogo} alt="logo" style={{ width: "110px" }} />
      </div>

      <div className="nav flex-column mb-auto">
        <div
          className="mb-3 py-3 px-4 d-flex align-items-center rounded-pill shadow-sm"
          style={{
            backgroundColor: "#fa243c",
            color: "#ffffff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-grid-fill me-3 fs-5"></i>
          <span>Novità</span>
        </div>

        <div className="sidebar-item mb-2 py-2 px-4 d-flex align-items-center">
          <i className="bi bi-search me-3 fs-5 text-muted"></i>
          <span className="text-muted fw-medium">Cerca</span>
        </div>

        <div className="sidebar-item mb-2 py-2 px-4 d-flex align-items-center">
          <i className="bi bi-house me-3 fs-5 text-muted"></i>
          <span className="text-muted fw-medium">Home</span>
        </div>

        <div className="sidebar-item mb-2 py-2 px-4 d-flex align-items-center">
          <i className="bi bi-radio me-3 fs-5 text-muted"></i>
          <span className="text-muted fw-medium">Radio</span>
        </div>
      </div>

      <div className="mt-auto w-100">
        <button
          className="btn w-100 rounded-pill fw-bold py-2 border-0"
          style={{ backgroundColor: "#fa243c", color: "white" }}
        >
          Accedi
        </button>
      </div>
    </nav>
  );
};

export default MySidebar;
