import { Modal, Row, Col, Button } from "react-bootstrap";

const ShareModal = ({ show, handleClose, song }) => {
  if (!song) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(song.preview);
    // Magari un alert veloce o un feedback visivo
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      // TOGLIAMO 'centered'
      size="sm"
      dialogClassName="modal-top-position" // CLASSE PER IL POSIZIONAMENTO
      contentClassName="share-modal-red border-0 shadow-lg"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <Modal.Header closeButton className="border-0 pb-0 px-4 pt-4">
        <Modal.Title
          className="w-100 text-center fs-6 fw-bold text-white uppercase"
          style={{ letterSpacing: "1px" }}
        >
          Condividi Brano
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        {/* Anteprima Brano compatta per stare più alti */}
        <div className="d-flex align-items-center song-preview-red p-2 rounded-4 mb-4">
          <img
            src={song.album?.cover_medium}
            alt="cover"
            className="rounded-3 shadow-sm"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <div className="ms-3 text-truncate">
            <h6
              className="mb-0 fw-bold text-truncate text-white"
              style={{ fontSize: "0.85rem" }}
            >
              {song.title}
            </h6>
            <p
              className="mb-0 extra-small"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}
            >
              {song.artist?.name}
            </p>
          </div>
        </div>

        {/* Griglia Social */}
        <Row className="text-center g-0 mb-2">
          <Col xs={4}>
            <a
              href={`https://wa.me/?text=${song.preview}`}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <div className="bubble-social-white">
                <i className="bi bi-whatsapp"></i>
              </div>
              <div className="share-label-white">WhatsApp</div>
            </a>
          </Col>
          <Col xs={4}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${song.preview}`}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <div className="bubble-social-white">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="share-label-white">Facebook</div>
            </a>
          </Col>
          <Col xs={4}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <div className="bubble-social-white">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="share-label-white">Stories</div>
            </a>
          </Col>
        </Row>

        <div className="mt-4 pt-2 text-center">
          <Button
            className="btn-copy-white w-100 rounded-pill py-2 border-0 mb-3 d-flex align-items-center justify-content-center shadow-sm"
            onClick={copyToClipboard}
          >
            <i className="bi bi-link-45deg fs-5 me-2"></i>
            Copia Link
          </Button>
          <button
            className="btn btn-link text-white text-decoration-none p-0 small opacity-75"
            onClick={handleClose}
            style={{ fontSize: "12px" }}
          >
            Chiudi
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShareModal;
