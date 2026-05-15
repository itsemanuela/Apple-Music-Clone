const MySidebar = () => {
  return (
    <nav
      className="col-md-3 col-lg-2 d-none d-md-flex flex-column p-3 border-end border-secondary h-100"
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <div className="d-flex align-items-center mb-4 px-2 text-white">
        <i className="bi bi-apple fs-3 text-danger me-2"></i>
        <span className="fw-bold fs-5">Music</span>
      </div>

      <div className="position-relative mb-4 px-2">
        <span className="position-absolute top-50 start-0 translate-middle-y ps-4 text-muted small">
          <i className="bi bi-search"></i>
        </span>
        <input
          className="form-control bg-dark border-0 text-white rounded-3 ps-5 shadow-none custom-sidebar-search"
          style={{
            backgroundColor: "#2b2b2c",
            fontSize: "14px",
            paddingBlock: "6px",
          }}
          type="search"
          placeholder="Cerca"
        />
      </div>

      <div className="nav flex-column nav-pills mb-auto px-1">
        <button className="nav-link text-white text-start active bg-danger mb-1 border-0 rounded-3">
          <i className="bi bi-house-door-fill me-3"></i>Ascolta ora
        </button>
        <button className="nav-link text-white text-start mb-1 border-0 rounded-3 custom-btn-sidebar">
          <i className="bi bi-compass me-3"></i>Scopri
        </button>
        <button className="nav-link text-white text-start mb-1 border-0 rounded-3 custom-btn-sidebar">
          <i className="bi bi-radio me-3"></i>Radio
        </button>
      </div>

      <div className="pt-3 border-top border-secondary text-muted small px-2">
        <span>Emanuela's Clone</span>
      </div>
    </nav>
  );
};

export default MySidebar;
