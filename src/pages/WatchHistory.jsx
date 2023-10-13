import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHistory, removeHistory } from "../services/allAPI";

function WatchHistory() {
  const [deleteHistoryStatus, setDeleteHistoryStatus] = useState(false);
  const [history, setHistory] = useState([]);
  const getWatchHistory = async () => {
    const { data } = await getHistory();
    setHistory(data);
  };

  useEffect(() => {
    setDeleteHistoryStatus(false);
    getWatchHistory();
  }, [deleteHistoryStatus]);
  // console.log(history);

  const deleteAHistory = async (id) => {
    const response = await removeHistory(id);
    setDeleteHistoryStatus(true);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mt-5 mb-5 container">
        <h3>Watch History</h3>
        <Link
          to={"/home"}
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          <i className="fa-solid fa-arrow-left me-2"></i>Back to Home
        </Link>
      </div>

      <div className="border border-secondary rounded mt-5 p-5 container mb-5 ">
        <table className="table rounded shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.caption} </td>
                  <td>
                    <a href={item?.embbedLink} target="_blank">
                      {item?.embbedLink}
                    </a>
                  </td>
                  <td>{item?.timeStamp}</td>
                  <td>
                    <button
                      onClick={() => deleteAHistory(item?.id)}
                      className="btn text-danger "
                    >
                      <i className="fa-solid fa-trash-can fs-6"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p className="fw-bolder fs-5 text-danger mt-3">
                Sorry Nothing to Display
              </p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
