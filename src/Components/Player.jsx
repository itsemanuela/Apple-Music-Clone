import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglePlayAction } from "../Redux/Actions";

const Player = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const currentSong = useSelector((state) => state.player.currentSong);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && currentSong?.preview) {
        audioRef.current.load();
        audioRef.current.play().catch((err) => {
          console.warn(
            "Riproduzione multimediale bloccata o interrotta dal browser:",
            err,
          );
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  if (!currentSong) return null;

  return (
    <div className="fixed-bottom d-flex justify-content-center pb-4 pointer-events-none">
      <audio
        ref={audioRef}
        src={currentSong.preview}
        onEnded={() => dispatch(togglePlayAction())}
      />

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
        <div
          className="d-flex align-items-center"
          style={{ maxWidth: "180px" }}
        >
          <img
            src={currentSong.album?.cover_small}
            alt="cover"
            className="rounded"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <div className="ms-2 text-truncate">
            <p
              className="mb-0 text-dark fw-bold small text-truncate"
              style={{ fontSize: "13px" }}
            >
              {currentSong.title}
            </p>
            <p
              className="mb-0 text-muted extra-small text-truncate"
              style={{ fontSize: "11px" }}
            >
              {currentSong.artist?.name}
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center text-secondary gap-3">
          <i className="bi bi-shuffle" style={{ cursor: "pointer" }}></i>
          <i
            className="bi bi-skip-start-fill fs-4"
            style={{ cursor: "pointer" }}
          ></i>

          <i
            className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"} fs-1 text-dark`}
            onClick={() => dispatch(togglePlayAction())}
            style={{ cursor: "pointer" }}
          ></i>

          <i
            className="bi bi-skip-end-fill fs-4"
            style={{ cursor: "pointer" }}
          ></i>
          <i className="bi bi-repeat" style={{ cursor: "pointer" }}></i>
        </div>

        <i className="bi bi-apple fs-4 text-dark opacity-50 d-none d-sm-inline"></i>

        <div className="d-flex align-items-center text-secondary gap-2">
          <i className="bi bi-list-ul" style={{ cursor: "pointer" }}></i>
          <i className="bi bi-volume-up-fill me-1"></i>
          <input
            type="range"
            className="form-range"
            style={{ width: "80px", accentColor: "#000" }}
            min="0"
            max="1"
            step="0.05"
            defaultValue="0.5"
            onChange={(e) => {
              if (audioRef.current) audioRef.current.volume = e.target.value;
            }}
            text-secondary
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
