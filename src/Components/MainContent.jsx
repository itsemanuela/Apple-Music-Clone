import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsAction } from "../Redux/Actions";
import { Spinner, Row, Col } from "react-bootstrap";

import { setCurrentSongAction } from "../Redux/Actions";

import img1a from "../assets/1a.png";
import img1b from "../assets/1b.png";
import img2a from "../assets/2a.png";
import img2b from "../assets/2b.png";
import img2c from "../assets/2c.png";
import img2d from "../assets/2d.png";
import img2e from "../assets/2e.png";
import img2f from "../assets/2f.png";

const MainContent = () => {
  const dispatch = useDispatch();

  const immaginiNuoviArrivi = [img2a, img2b, img2c, img2d, img2e, img2f];

  const musicState = useSelector((state) => state.music) || {};
  const nuoveUscite = musicState.nuoveUscite || [];
  const altroScoprire = musicState.altroScoprire || [];
  const isLoading = musicState.isLoading || false;

  useEffect(() => {
    dispatch(fetchSongsAction("ghali", "nuoveUscite"));
    dispatch(fetchSongsAction("luche", "altroScoprire"));
  }, [dispatch]);

  return (
    <main>
      <div>
        <section className="mb-5">
          <div className="d-flex align-items-center mb-4 border-bottom pb-3">
            <h1
              className="fw-bold m-0 display-4"
              style={{ letterSpacing: "-2px" }}
            >
              Novità
            </h1>
            <i className="bi bi-chevron-right ms-2 fs-2 text-muted opacity-50"></i>
          </div>
          <Row className="g-4">
            <Col xs={12} md={6}>
              <div className="border-top pt-2 mb-3">
                <p className="text-muted small fw-bold mb-1">IN PRIMO PIANO</p>
                <h5 className="fw-bold mb-0">Il meglio di oggi</h5>
              </div>
              <div className="hero-card-container shadow-sm">
                <img
                  src={img1a}
                  alt="Hero 1"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="border-top pt-2 mb-3">
                <p className="text-muted small fw-bold mb-1">RADIO</p>
                <h5 className="fw-bold mb-0">Apple Music Radio</h5>
              </div>
              <div className="hero-card-container shadow-sm">
                <img
                  src={img1b}
                  alt="Hero 2"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
          </Row>
        </section>

        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold m-0">Nuovi Arrivi</h4>
            <span
              className="text-danger small fw-bold"
              style={{ cursor: "pointer" }}
            >
              Vedi tutti
            </span>
          </div>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
            {immaginiNuoviArrivi.map((immagine, index) => (
              <Col key={index}>
                <div className="square-card-container shadow-sm mb-2">
                  <img
                    src={immagine}
                    className="w-100 h-100 object-fit-cover"
                    alt="Novità"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </section>

        <hr className="my-5 opacity-10" />

        <section className="mb-5">
          <h4 className="fw-bold mb-4">Scelti per te (Ghali)</h4>
          {isLoading ? (
            <div className="w-100 text-center py-4">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
              {nuoveUscite.slice(0, 5).map((song) => (
                <Col key={song.id}>
                  <div
                    className="square-card-container shadow-sm mb-2 img-thumbnail p-0"
                    onClick={() => dispatch(setCurrentSongAction(song))}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={song.album.cover_big}
                      className="w-100 h-100 object-fit-cover"
                      alt="cover"
                    />
                  </div>
                  <p className="mb-0 fw-medium text-dark text-truncate small">
                    {song.title}
                  </p>
                  <p className="text-muted small text-truncate">
                    {song.artist.name}
                  </p>
                </Col>
              ))}
            </Row>
          )}
        </section>

        <section className="mb-5 pb-5">
          <h4 className="fw-bold mb-4">Altro da scoprire (Luchè)</h4>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
            {altroScoprire.slice(0, 5).map((song) => (
              <Col key={song.id}>
                <div
                  className="square-card-container shadow-sm mb-2 img-thumbnail p-0"
                  onClick={() => dispatch(setCurrentSongAction(song))}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={song.album.cover_big}
                    className="w-100 h-100 object-fit-cover"
                    alt="cover"
                  />
                </div>
                <p className="mb-0 fw-medium text-dark text-truncate small">
                  {song.title}
                </p>
                <p className="text-muted small text-truncate">
                  {song.artist.name}
                </p>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
