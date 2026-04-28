import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Dashboard.scss";
import { useState } from "react";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    {
      title: "Nature",
      text: "Explore beautiful landscapes and nature views.",
      btn: "Explore",
      color: "primary",
      image:
        "https://i.pinimg.com/736x/a6/04/39/a60439d0c6592b91b4078156604f5480.jpg",
    },
    {
      title: "Adventure",
      text: "Discover exciting outdoor adventures.",
      btn: "Start",
      color: "success",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.UWbB8T23yf62W-kXWygrKgHaEJ?pid=Api&h=220&P=0",
    },
    {
      title: "Travel",
      text: "Plan your next travel destination easily.",
      btn: "Go",
      color: "danger",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.UWbB8T23yf62W-kXWygrKgHaEJ?pid=Api&h=220&P=0",
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
    <div className="dashboard">
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://wallpapercave.com/wp/wp5848452.jpg" />
          </div>

          <div className="carousel-item">
            <img src="https://wallup.net/wp-content/uploads/2016/06/23/383074-New_Zealand-landscape.jpg" />
          </div>

          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      {/* --------------------pagination------------------------------------------------------------------- */}
      <div className="dashboard__card">
        <img src={cards[currentPage].image} className="card-img-top" alt="card" />

        <div className="dashboard-card-content">
          <h5>{cards[currentPage].title}</h5>
          <p>{cards[currentPage].text}</p>

        
          <button className="dashboard__button">{cards[currentPage].btn}</button>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------*/}
      <div className="dashboard__pagination">
        <button onClick={handlePrev} disabled={currentPage === 0}>
          Prev
        </button>

        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={currentPage === index ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button className="dashboard__pagination-button"
          onClick={handleNext}
          disabled={currentPage === cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
