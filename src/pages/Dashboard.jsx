import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
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

      <div className="container mt-5">
        <div className="row text-center">

          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://i.pinimg.com/736x/a6/04/39/a60439d0c6592b91b4078156604f5480.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Nature</h5>
                <p className="card-text">
                  Explore beautiful landscapes and nature views.
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://i.pinimg.com/736x/a6/04/39/a60439d0c6592b91b4078156604f5480.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Adventure</h5>
                <p className="card-text">
                  Discover exciting outdoor adventures.
                </p>
                <button className="btn btn-success">Start</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://i.pinimg.com/736x/a6/04/39/a60439d0c6592b91b4078156604f5480.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Travel</h5>
                <p className="card-text">
                  Plan your next travel destination easily.
                </p>
                <button className="btn btn-danger">Go</button>
              </div>
            </div>
          </div>
          <button onClick={handleLogout} className="btn btn-secondary">
            logout
          </button>

        </div>
      </div>

      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p className="mb-0"> React Dashboard</p>
      </footer>
    </div>
  );
}

export default Dashboard;