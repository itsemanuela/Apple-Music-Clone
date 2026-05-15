import { useSelector, useDispatch } from "react-redux";
import { toggleSidebarAction } from "../redux/actions";
import musicLogo from "../assets/music.svg";
import "../App.css";

const MySidebar = () => {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.music.isSidebarOpen);

  const handleToggle = () => {
    dispatch(toggleSidebarAction());
  };

  return (
    <>
      <button
        className="btn btn-light d-lg-none position-fixed top-0 start-0 m-3 shadow-sm rounded-circle"
        onClick={handleToggle}
        style={{ width: "50px", height: "50px", zIndex: 1600 }}
      >
        <i className={`bi ${isSidebarOpen ? "bi-x-lg" : "bi-list"} fs-4`}></i>
      </button>

      <div
        className={`sidebar-overlay ${isSidebarOpen ? "show" : ""}`}
        onClick={handleToggle}
      />

      <nav className={`sidebar-apple ${isSidebarOpen ? "show" : ""}`}>
        <div className="mb-5 ps-2">
          <a href="/">
            <img
              src={musicLogo}
              alt="logo"
              style={{ width: "110px", cursor: "pointer" }}
            />
          </a>
        </div>

        <div className="nav flex-column mb-auto">
          <a
            href="#novita"
            className="mb-3 py-3 px-4 d-flex align-items-center rounded-pill shadow-sm text-decoration-none"
            onClick={() => isSidebarOpen && handleToggle()}
            style={{
              backgroundColor: "#D60017",
              color: "#ffffff",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-grid-fill me-3 fs-5"></i>
            <span>Novità</span>
          </a>

          <div className="mb-4 px-2">
            <div className="position-relative">
              <i
                className="bi bi-search position-absolute text-muted"
                style={{
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "14px",
                }}
              ></i>
              <input
                type="text"
                className="form-control border-0 shadow-none ps-5 py-2"
                placeholder="Cerca"
                style={{
                  backgroundColor: "#EBEBED",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#3c3c43",
                }}
              />
            </div>
          </div>

          <a
            href="#home"
            className="sidebar-link mb-2 py-2 px-4 d-flex align-items-center text-decoration-none"
            onClick={() => isSidebarOpen && handleToggle()}
          >
            <i className="bi bi-house me-3 fs-5 text-muted"></i>
            <span className="text-muted fw-medium">Home</span>
          </a>

          <a
            href="#radio"
            className="sidebar-link mb-2 py-2 px-4 d-flex align-items-center text-decoration-none"
            onClick={() => isSidebarOpen && handleToggle()}
          >
            <i className="bi bi-radio me-3 fs-5 text-muted"></i>
            <span className="text-muted fw-medium">Radio</span>
          </a>
        </div>

        <div className="mt-auto w-100">
          <button
            className="btn w-100 rounded-pill fw-bold py-2 border-0"
            style={{ backgroundColor: "#D60017", color: "white" }}
          >
            Accedi
          </button>
        </div>
      </nav>
    </>
  );
};

export default MySidebar;
