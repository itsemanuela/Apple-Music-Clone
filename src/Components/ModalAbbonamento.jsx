import { Modal, Button, Row, Col, Card } from "react-bootstrap";

const ModalAbbonamento = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="rounded-4 border-0 shadow-lg"
    >
      <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>
      <Modal.Body className="px-4 pb-5">
        <div className="text-center mb-5">
          <i className="bi bi-apple fs-1 text-dark mb-2"></i>
          <h2 className="fw-bold">Scegli il piano perfetto per te.</h2>
          <p className="text-muted">Musica senza limiti, ovunque tu sia.</p>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 text-center p-3 py-4">
              <Card.Body className="d-flex flex-column">
                <h5 className="fw-bold">Studenti</h5>
                <h3 className="my-3 fw-bold">5,99€</h3>
                <p className="small text-muted flex-grow-1">
                  Tutti i vantaggi di Apple Music a un prezzo ridotto per
                  studenti universitari.
                </p>
                <Button
                  variant="outline-danger"
                  className="rounded-pill fw-bold border-2 mt-3"
                >
                  Scegli
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className="h-100 border-0 shadow-lg rounded-4 text-center p-3 py-4 text-white"
              style={{
                backgroundColor: "#fa243c",
                transform: "scale(1.05)",
                zIndex: 1,
              }}
            >
              <Card.Body className="d-flex flex-column">
                <h5 className="fw-bold">Individuale</h5>
                <h3 className="my-3 fw-bold">10,99€</h3>
                <p className="small flex-grow-1">
                  100 milioni di brani e la tua libreria su tutti i dispositivi.
                  1 mese gratis.
                </p>
                <Button
                  variant="light"
                  className="rounded-pill fw-bold text-danger mt-3"
                >
                  Prova Gratis
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 text-center p-3 py-4">
              <Card.Body className="d-flex flex-column">
                <h5 className="fw-bold">Famiglia</h5>
                <h3 className="my-3 fw-bold">16,99€</h3>
                <p className="small text-muted flex-grow-1">
                  Accesso per un massimo di sei persone. Ognuno ha il suo
                  account personale.
                </p>
                <Button
                  variant="outline-danger"
                  className="rounded-pill fw-bold border-2 mt-3"
                >
                  Scegli
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <p className="extra-small text-muted" style={{ fontSize: "0.7rem" }}>
            L'abbonamento si rinnova automaticamente. Puoi disdire quando vuoi.{" "}
            <br />
            Soggetto a termini e condizioni.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAbbonamento;
