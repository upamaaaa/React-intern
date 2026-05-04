import React, { useEffect, useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "../../components/Button/Button";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get(
          "https://69e9fab115c7e2d512691fa5.mockapi.io/api/projects",
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetch:", error);
      }
    };

    getProjects();
  }, []);

  const sortedProjects = useMemo(() => {
    let data = [...projects];

    // SEARCH
    data = data.filter((p) =>
      `Project ${p.id}`.toLowerCase().includes(search.toLowerCase()),
    );

    // SORTING
    if (sortType === "BookingStatusHigh") {
      data.sort((a, b) => b.BookingStatus - a.BookingStatus);
    }

    if (sortType === "BookingStatusLow") {
      data.sort((a, b) => a.BookingStatus - b.BookingStatus);
    }

    if (sortType === "start") {
      data.sort((a, b) => a.start - b.start);
    }

    return data;
  }, [projects, search, sortType]);

  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = sortedProjects.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < projects.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getProgressColor = (BookingStatus) => {
    if (BookingStatus <= 25) return "bg-danger";
    if (BookingStatus <= 50) return "bg-warning";
    if (BookingStatus <= 75) return "bg-info";
    return "bg-success";
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search "
          className="form-control w-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select
        className="form-select w-25"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="BookingStatusHigh">Booking Status (DESC)</option>
        <option value="BookingStatusLow">Booking Status (ASC)</option>
        <option value="start">Start Date</option>
      </select>

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table mb-0 align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Destination</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Booking Status</th>
                  <th>Available</th>
                  <th>Priority</th>
                  <th>Guide</th>
                </tr>
              </thead>

              <tbody>
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No data found
                    </td>
                  </tr>
                ) : (
                  currentData.map((p) => (
                    <tr key={p.id}>
                      <td className="fw-semibold">Project {p.id}</td>
                      <td>{new Date(p.start * 1000).toDateString()}</td>
                      <td>{new Date(p.end * 1000).toDateString()}</td>

                      <td>
                        <div className="progress">
                          <div
                            className={`progress-bar ${getProgressColor(p.BookingStatus)}`}
                            style={{ width: `${p.BookingStatus}%` }}
                          >
                            {p.BookingStatus}%
                          </div>
                        </div>
                      </td>

                      <td>
                        <span
                          className={`badge ${p.status ? "bg-success" : "bg-secondary"}`}
                        >
                          {p.status ? "On Track" : "On Hold"}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`badge ${p.priority ? "bg-danger" : "bg-warning text-dark"}`}
                        >
                          {p.priority ? "High" : "Low"}
                        </span>
                      </td>

                      <td>
                        <img
                          src={p.Guide}
                          alt="user"
                          className="rounded-circle"
                          style={{ width: "32px", height: "32px" }}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <Button
          text={`prev`}
          onClick={handlePrev}
          disabled={currentPage === 0}
          style={{ backgroundColor: "black", color: "white" }}
        />
        <span className="align-self-center">Page {currentPage + 1}</span>

        <Button
          text={`next`}
          onClick={handleNext}
          disabled={endIndex >= projects.length}
          style={{ backgroundColor: "black", color: "white" }}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
