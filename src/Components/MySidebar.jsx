const MySidebar = () => {
  return (
    <nav
      className="col-md-3 col-lg-2 d-none d-md-flex flex-column p-4"
      style={{
        backgroundColor: "#FAFAFB",
        borderRight: "1px solid #E5E5E5",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="mb-4 ps-2 d-flex align-items-center"
        style={{ color: "#000000" }}
      >
        <i className="bi bi-apple fs-2"></i>
        <span className="fw-bold fs-4 ms-1" style={{ letterSpacing: "-1px" }}>
          Music
        </span>
      </div>

      <div className="nav flex-column mb-auto">
        <div
          className="mb-2 py-2 px-2 d-flex align-items-center"
          style={{ color: "#3c3c43", cursor: "pointer", fontWeight: "500" }}
        >
          <i className="bi bi-search me-3 fs-5"></i> Cerca
        </div>
        <div
          className="mb-2 py-2 px-2 d-flex align-items-center"
          style={{ color: "#3c3c43", cursor: "pointer", fontWeight: "500" }}
        >
          <i className="bi bi-house me-3 fs-5"></i> Home
        </div>

        <div
          className="mb-2 py-2 px-2 d-flex align-items-center rounded-3 shadow-sm"
          style={{
            backgroundColor: "#EBEBED",
            color: "#fa243c",
            fontWeight: "700",
          }}
        >
          <i className="bi bi-grid-fill me-3 fs-5"></i> Novità
        </div>

        <div
          className="mb-2 py-2 px-2 d-flex align-items-center"
          style={{ color: "#3c3c43", cursor: "pointer", fontWeight: "500" }}
        >
          <i className="bi bi-radio me-3 fs-5"></i> Radio
        </div>
      </div>

      <div className="mt-auto pb-4">
        <div
          className="mb-3 ps-2 d-flex align-items-center"
          style={{
            color: "#fa243c",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          <i className="bi bi-arrow-up-right-square me-2"></i> Apri in Musica
        </div>
        <button
          className="btn w-100 rounded-pill fw-bold py-2 border-0 shadow-sm"
          style={{ backgroundColor: "#fa243c", color: "white" }}
        >
          Accedi
        </button>
      </div>
    </nav>
  );
};

export default MySidebar;
