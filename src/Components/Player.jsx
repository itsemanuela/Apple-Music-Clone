const Player = () => {
  return (
    <div className="fixed-bottom d-flex justify-content-center pb-4 pointer-events-none">
      <div
        className="d-flex align-items-center justify-content-between px-4 py-2 rounded-pill shadow-lg border"
        style={{
          width: "600px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(0,0,0,0.1)",
          pointerEvents: "auto",
        }}
      >
        <div className="d-flex align-items-center text-secondary gap-3">
          <i className="bi bi-shuffle"></i>
          <i className="bi bi-skip-start-fill fs-4"></i>
          <i className="bi bi-play-fill fs-1 text-dark"></i>
          <i className="bi bi-skip-end-fill fs-4"></i>
          <i className="bi bi-repeat"></i>
        </div>

        <i className="bi bi-apple fs-4 text-dark opacity-50"></i>

        <div className="d-flex align-items-center text-secondary gap-3">
          <i className="bi bi-list-ul"></i>
          <i className="bi bi-volume-up-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Player;
