import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Button from "../../components/Button/Button.jsx";

import "./Dashboard.scss";

import { useState } from "react";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 3;

  const cards = [
    {
      title: "Nature",
      text: "Nature’s landscapes offer a quiet kind of beauty that feels both vast and deeply personal at the same time.",
      btn: "Explore",
      image: "https://wallpapercave.com/wp/wp5848452.jpg",
    },

    {
      title: "Adventure",
      text: "Discover exciting outdoor adventures and thrilling experiences around the world.",
      btn: "Start",
      image:
        "https://wallup.net/wp-content/uploads/2016/06/23/383074-New_Zealand-landscape.jpg",
    },

    {
      title: "Travel",
      text: "Plan your next travel destination and create unforgettable memories today.",
      btn: "Go",
      image: "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg",
    },

    {
      title: "Mountains",
      text: "Explore breathtaking mountain ranges and stunning hiking trails.",
      btn: "Visit",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },

    {
      title: "Ocean",
      text: "Relax beside crystal clear waters and peaceful beach destinations.",
      btn: "Relax",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
  ];

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const startIndex = currentPage * cardsPerPage;

  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
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
      {/* HERO SECTION */}

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://wallpapercave.com/wp/wp5848452.jpg" alt="hero" />

            <div className="carousel-caption">
              <h1>Welcome to Dashboard</h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://wallup.net/wp-content/uploads/2016/06/23/383074-New_Zealand-landscape.jpg"
              alt="hero"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg"
              alt="hero"
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

      {/* SECTION */}

      <div className="dashboard__section-title">
        <h2>Discover More Destinations</h2>
      </div>
      
      <div className="dashboard__cards">
        {visibleCards.map((card, index) => (
          <div key={index} className="dashboard__card">
            <img src={card.image} alt={card.title} />

            <div className="dashboard__card-content">
              <h5>{card.title}</h5>

              <p>{card.text}</p>

              <Button text={card.btn} />
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard__pagination">
        {Array.from({
          length: totalPages,
        }).map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={currentPage === index ? "active" : ""}
          >
            {index + 1}
          </button>
          
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
