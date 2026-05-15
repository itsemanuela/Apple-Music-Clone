import img1a from "../assets/1a.png";
import img1b from "../assets/1b.png";
import img2a from "../assets/2a.png";
import img2b from "../assets/2b.png";
import img2c from "../assets/2c.png";
import img2d from "../assets/2d.png";
import img2e from "../assets/2e.png";
import img2f from "../assets/2f.png";

const MainContent = () => {
  // Array pulito con le tue 6 immagini della serie "2"
  const immaginiNuoviArrivi = [img2a, img2b, img2c, img2d, img2e, img2f];

  return (
    <main>
      <section className="mb-5">
        <div className="d-flex align-items-center mb-4">
          <h2 className="fw-bold m-0" style={{ letterSpacing: "-1px" }}>
            Novità
          </h2>
          <i className="bi bi-chevron-right ms-2 fs-4 text-muted opacity-50"></i>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="border-top pt-2 mb-3">
              <p className="text-muted small fw-bold mb-1">IN PRIMO PIANO</p>
              <h5 className="fw-bold mb-0 text-truncate">Il meglio di oggi</h5>
            </div>
            <div className="hero-card-container shadow-sm">
              <img
                src={img1a}
                alt="Novità 1"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border-top pt-2 mb-3">
              <p className="text-muted small fw-bold mb-1">RADIO</p>
              <h5 className="fw-bold mb-0 text-truncate">Apple Music Radio</h5>
            </div>
            <div className="hero-card-container shadow-sm">
              <img
                src={img1b}
                alt="Novità 2"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
          <h4 className="fw-bold m-0">Nuovi Arrivi</h4>
          <span
            className="text-danger small fw-bold"
            style={{ cursor: "pointer" }}
          >
            Vedi tutti
          </span>
        </div>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4">
          {immaginiNuoviArrivi.map((immagine, index) => (
            <div className="col" key={index}>
              <div className="card border-0 bg-transparent h-100">
                <div className="square-card-container shadow-sm mb-2">
                  <img
                    src={immagine}
                    className="w-100 h-100 object-fit-cover"
                    alt={`Brano ${index + 1}`}
                  />
                </div>
                <div className="ps-1">
                  <p
                    className="mb-0 fw-medium text-dark text-truncate"
                    style={{ fontSize: "15px" }}
                  >
                    Titolo Brano
                  </p>
                  <p className="text-muted small text-truncate">Artista</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
