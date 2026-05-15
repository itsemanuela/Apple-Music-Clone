import { Container, Row, Col, Button } from "react-bootstrap";

const Banner = ({ onOpenSub }) => {
  return (
    <div className="red-banner-fixed shadow-lg">
      <Container fluid className="px-4 h-100">
        <Row className="h-100 align-items-center">
          <Col xs={12} md={8} lg={9} className="text-white">
            <h6 className="fw-bold mb-1">
              Ascolta oltre 100 milioni di brani gratis per 1 mese
            </h6>
            <p className="mb-0 small opacity-90 d-none d-md-block">
              Inoltre puoi ascoltare la tua intera libreria musicale su tutti i
              tuoi dispositivi. 1 mese gratis, poi a 10,99 €/mese.
            </p>
          </Col>
          <Col xs={12} md={4} lg={3} className="text-end">
            <Button
              variant="light"
              className="text-danger fw-bold px-4 rounded-3 border-0"
              onClick={onOpenSub}
            >
              Prova gratis
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
