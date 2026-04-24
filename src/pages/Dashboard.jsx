import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    {
      title: "Nature",
      text: "Explore beautiful landscapes and nature views.",
      btn: "Explore",
      color: "primary",
      image:"https://i.pinimg.com/736x/a6/04/39/a60439d0c6592b91b4078156604f5480.jpg"
    },
    {
      title: "Adventure",
      text: "Discover exciting outdoor adventures.",
      btn: "Start",
      color: "success",
      image: "https://tse1.mm.bing.net/th/id/OIP.UWbB8T23yf62W-kXWygrKgHaEJ?pid=Api&h=220&P=0"
    },
    {
      title: "Travel",
      text: "Plan your next travel destination easily.",
      btn: "Go",
      color: "danger",
      image: "https://tse1.mm.bing.net/th/id/OIP.UWbB8T23yf62W-kXWygrKgHaEJ?pid=Api&h=220&P=0"
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };

  const handleNext = () => {
    if (currentPage < cards.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/original-landscape-art-birds-painting--alone-now-amy-giacomelli.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.UWbB8T23yf62W-kXWygrKgHaEJ?pid=Api&h=220&P=0"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ---------------------------------------------------------------- */}
      <div className="container mt-5 text-center">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src={cards[currentPage].image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{cards[currentPage].title}</h5>
                <p className="card-text">{cards[currentPage].text}</p>
                <button className={`btn btn-${cards[currentPage].color}`}>
                  {cards[currentPage].btn}
                </button>
              </div>
            </div>
          </div>

          {/* -----------------------------------------*/}
          <div className="col-md-4">
            <nav>
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 0 ? "disabled" : ""}`}
                >
                  <button className="page-link" onClick={handlePrev}>
                    Previous
                  </button>
                </li>

                {cards.map((card, index) => (
                  <li
                    key={index}
                    className={`page-item ${currentPage === index ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(index)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === cards.length - 1 ? "disabled" : ""
                  }`}
                >
                  <button className="page-link" onClick={handleNext}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
