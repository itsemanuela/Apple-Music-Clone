import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  const categorie = [
    "Esplora per genere",
    "Worldwide",
    "Video musicali",
    "Decenni",
    "Classifiche",
    "Attività e stati d'animo",
    "Audio spaziale",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-5 border-top pt-5 pb-5">
      <Container fluid className="p-0">
        <Row className="mb-4">
          <Col>
            <h4 className="fw-bold">Esplora ancora</h4>
          </Col>
        </Row>

        <Row className="g-3 mb-5">
          {categorie.map((testo, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <div className="btn-esplora d-flex justify-content-between align-items-center p-3">
                <span className="text-danger fw-medium">{testo}</span>
                <i className="bi bi-chevron-right text-muted small"></i>
              </div>
            </Col>
          ))}
        </Row>

        <div className="border-top pt-4">
          <Row>
            <Col className="small text-muted">
              <div className="mb-2">
                <span className="text-dark fw-bold">Italia</span> |{" "}
                <span className="opacity-75">English (UK)</span>
              </div>
              <p className="mb-2">
                Copyright © {currentYear} <strong>Apple Inc.</strong> Tutti i
                diritti riservati.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <a href="#" className="footer-link">
                  Condizioni dei servizi internet
                </a>
                <span className="text-muted">|</span>

                <a href="#" className="footer-link">
                  Apple Music e privacy
                </a>
                <span className="text-muted">|</span>

                <a href="#" className="footer-link">
                  Avviso sui cookie
                </a>
                <span className="text-muted">|</span>

                <a href="#" className="footer-link">
                  Supporto
                </a>
                <span className="text-muted">|</span>

                <a href="#" className="footer-link">
                  Feedback
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default MyFooter;
