import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  togglePlayAction,
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../Redux/Actions";

const Player = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const currentSong = useSelector((state) => state.player.currentSong);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  const favorites = useSelector((state) => state.favorites.list);
  const isFavorite =
    currentSong && favorites.some((s) => s.id === currentSong.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavoritesAction(currentSong.id));
    } else {
      dispatch(addToFavoritesAction(currentSong));
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && currentSong?.preview) {
        audioRef.current.load();
        audioRef.current.play().catch((err) => {
          console.warn("Riproduzione multimediale bloccata:", err);
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
          width: "650px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(0,0,0,0.1)",
          pointerEvents: "auto",
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{ maxWidth: "220px" }}
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

          <i
            className={`bi ${isFavorite ? "bi-heart-fill text-danger" : "bi-heart"} ms-3`}
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onClick={handleFavoriteClick}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          ></i>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
