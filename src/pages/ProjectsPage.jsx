import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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


  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = projects.slice(startIndex, endIndex);

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

  return (
    <div className="container py-4">
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
                            className="progress-bar"
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
