import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Dashboard.scss";
import { useState } from "react";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    {
      title: "Nature",
      text: "Nature’s landscapes offer a quiet kind of beauty that feels both vast and deeply personal at the same time. From towering mountains draped in morning mist to calm lakes reflecting the sky like a mirror, every scene carries a sense of balance and harmony that’s hard to replicate anywhere else. ",
      btn: "Explore",
      image:
        "https://sp.yimg.com/ib/th/id/OIP.MhAVj10KCQgX-pYM3ciudwHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    },
    {
      title: "Adventure",
      text: "Discover exciting outdoor adventures near you! From hiking and biking to kayaking and rock climbing, there’s something for every thrill-seeker. Explore new trails, conquer challenging terrains, and experience the rush of adrenaline while connecting with nature. Whether you’re a beginner or an experienced adventurer, find your next unforgettable outdoor experience today!",
      btn: "Start",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.UWbB8T23yf62W-kXWygrKgHaEJ?pid=Api&h=220&P=0",
    },
    {
      title: "Travel",
      text: "Plan your next travel destination easily. Discover new places, find the best deals, and create unforgettable memories. Whether you're looking for a relaxing beach getaway, an adventurous mountain escape, or a vibrant city experience, our travel planning tools make it simple to organize your perfect trip. Start exploring the world today!",
      btn: "Go",
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
        <img
          src={cards[currentPage].image}
          className="card-img-top"
          alt="card"
        />

        <div className="dashboard__card-content">
          <h5>{cards[currentPage].title}</h5>
          <p>{cards[currentPage].text}</p>

          <button className="dashboard__button">
            {cards[currentPage].btn}
          </button>
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
            className={
              currentPage === index
                ? "dashboard__pagination-button active"
                : "dashboard__pagination-button"
            }
          >
            {index + 1}
          </button>
        ))}

        <button
          className="dashboard__pagination__button"
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
