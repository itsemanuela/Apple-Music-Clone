import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Offcanvas, ListGroup, Button } from "react-bootstrap";
import {
  removeFromFavoritesAction,
  setCurrentSongAction,
} from "../Redux/Actions";
import ShareModal from "./ShareModal";

const FavoriteSidebar = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);

  const [songToShare, setSongToShare] = useState(null);
  const [showShare, setShowShare] = useState(false);

  const handleOpenShare = (song) => {
    setSongToShare(song);
    setShowShare(true);
  };

  const handleCloseShare = () => {
    setShowShare(false);
    setSongToShare(null);
  };

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(15px)",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Brani Preferiti</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {favorites.length === 0 ? (
            <p className="text-muted text-center mt-4">La tua lista è vuota.</p>
          ) : (
            <ListGroup variant="flush">
              {favorites.map((song) => (
                <ListGroup.Item
                  key={song.id}
                  className="d-flex align-items-center bg-transparent border-0 px-0 mb-3"
                >
                  <img
                    src={song.album?.cover_small}
                    alt="cover"
                    className="rounded shadow-sm me-3"
                    style={{ width: "50px", cursor: "pointer" }}
                    onClick={() => dispatch(setCurrentSongAction(song))}
                  />

                  <div
                    className="flex-grow-1 text-truncate"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(setCurrentSongAction(song))}
                  >
                    <p className="mb-0 fw-bold small text-truncate">
                      {song.title}
                    </p>
                    <p className="mb-0 text-muted extra-small text-truncate">
                      {song.artist?.name}
                    </p>
                  </div>

                  <Button
                    variant="link"
                    className="text-dark p-0 ms-2 opacity-75"
                    onClick={() => handleOpenShare(song)}
                  >
                    <i
                      className="bi bi-reply-fill fs-5"
                      style={{
                        transform: "scaleX(-1)",
                        display: "inline-block",
                      }}
                    ></i>
                  </Button>

                  <Button
                    variant="link"
                    className="text-danger p-0 ms-3"
                    onClick={() => dispatch(removeFromFavoritesAction(song.id))}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <ShareModal
        show={showShare}
        handleClose={handleCloseShare}
        song={songToShare}
      />
    </>
  );
};

export default FavoriteSidebar;
