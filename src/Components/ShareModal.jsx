import { Modal, Row, Col, Button } from "react-bootstrap";

const ShareModal = ({ show, handleClose, song }) => {
  if (!song) return null;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=Ascolta ${song.title} di ${song.artist.name}: ${song.preview}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${song.preview}`,

    instagram: `https://www.instagram.com/`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(song.preview);
    alert("Link copiato negli appunti!");
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="sm"
      contentClassName="rounded-4 border-0 shadow-lg"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="w-100 text-center fs-6 fw-bold text-dark pt-2">
          Condividi
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <div className="text-center mb-4">
          <img
            src={song.album?.cover_medium}
            alt="cover"
            className="rounded-3 shadow-sm mb-2"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <h6 className="mb-0 fw-bold text-truncate">{song.title}</h6>
          <p className="small text-muted">{song.artist?.name}</p>
        </div>

        <hr className="opacity-10" />

        <Row className="text-center g-3 my-2">
          <Col xs={4}>
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-dark"
            >
              <div className="share-icon-wrapper mb-1">
                <i className="bi bi-whatsapp fs-2 text-success"></i>
              </div>
              <p style={{ fontSize: "10px" }}>WhatsApp</p>
            </a>
          </Col>
          <Col xs={4}>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-dark"
            >
              <div className="share-icon-wrapper mb-1">
                <i className="bi bi-facebook fs-2 text-primary"></i>
              </div>
              <p style={{ fontSize: "10px" }}>Facebook</p>
            </a>
          </Col>
          <Col xs={4}>
            <a
              href={shareLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-dark"
            >
              <div className="share-icon-wrapper mb-1">
                <i
                  className="bi bi-instagram fs-2"
                  style={{ color: "#E1306C" }}
                ></i>
              </div>
              <p style={{ fontSize: "10px" }}>Instagram</p>
            </a>
          </Col>
        </Row>

        <Button
          variant="light"
          className="w-100 rounded-pill mt-3 py-2 fw-bold small border-0"
          style={{ backgroundColor: "#f2f2f7" }}
          onClick={copyToClipboard}
        >
          <i className="bi bi-link-45deg me-2"></i>
          Copia link
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ShareModal;
