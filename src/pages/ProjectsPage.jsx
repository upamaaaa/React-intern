import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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


  const filteredProjects = projects.filter((p) =>
    `Project ${p.id}`.toLowerCase().includes(search.toLowerCase()),
  );


  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortType === "progress") {
      return b.progress - a.progress;
    }
    if (sortType === "start") {
      return a.start - b.start;
    }
    return 0;
  });


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

  
  const getProgressColor = (progress) => {
    if (progress <= 25) return "bg-danger";
    if (progress <= 50) return "bg-warning";
    if (progress <= 75) return "bg-info";
    return "bg-success";
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search project..."
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
        <option value="progress">Progress</option>
        <option value="start">Start Date</option>
      </select>

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table mb-0 align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Project</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Owner</th>
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
                            className={`progress-bar ${getProgressColor(p.progress)}`}
                            style={{ width: `${p.progress}%` }}
                          >
                            {p.progress}%
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
                          src={p.avatar}
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
        <button
          className="btn btn-secondary me-2"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Prev
        </button>

        <span className="align-self-center">Page {currentPage + 1}</span>

        <button
          className="btn btn-secondary ms-2"
          onClick={handleNext}
          disabled={endIndex >= projects.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
