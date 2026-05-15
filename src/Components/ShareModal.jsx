import { Modal, Row, Col, Button } from "react-bootstrap";

const ShareModal = ({ show, handleClose, song }) => {
  if (!song) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-top-position"
      contentClassName="share-modal-red border-0 shadow-lg"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Modal.Header closeButton className="border-0 pb-0 px-4 pt-4">
        <Modal.Title
          className="w-100 text-center text-white fw-bold fs-5 pt-1 uppercase"
          style={{ letterSpacing: "1px" }}
        >
          Invia a
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <div className="d-flex align-items-center song-preview-red p-3 rounded-4 mb-4 shadow-sm">
          <img
            src={song.album?.cover_medium}
            alt="cover"
            className="rounded-3 shadow-sm"
            style={{ width: "55px", height: "55px", objectFit: "cover" }}
          />
          <div className="ms-3 text-truncate">
            <h6 className="mb-0 song-title-modal text-truncate text-white">
              {song.title}
            </h6>
            <p className="mb-0 artist-name-modal text-truncate">
              {song.artist?.name}
            </p>
          </div>
        </div>

        <Row className="text-center mb-5 gx-0 align-items-center">
          <Col>
            <a
              href={`https://wa.me/?text=Ascolta ${song.title}: ${song.preview}`}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <i className="bi bi-whatsapp icon-social-giant"></i>
              <div className="share-label-white">WhatsApp</div>
            </a>
          </Col>
          <Col>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${song.preview}`}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <i className="bi bi-facebook icon-social-giant"></i>
              <div className="share-label-white">Facebook</div>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <i className="bi bi-instagram icon-social-giant"></i>
              <div className="share-label-white">Stories</div>
            </a>
          </Col>
        </Row>

        <div className="text-center pb-2">
          <Button
            className="btn-share-main w-100 rounded-pill py-3 border-0 mb-3 shadow d-flex align-items-center justify-content-center"
            onClick={() => {
              navigator.clipboard.writeText(song.preview);
            }}
          >
            <i className="bi bi-link-45deg fs-4 me-2"></i>
            Condividi
          </Button>

          <button
            className="btn btn-link text-white text-decoration-none opacity-50 fw-bold small"
            onClick={handleClose}
          >
            Annulla
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShareModal;
