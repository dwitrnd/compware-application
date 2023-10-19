import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";
import { Link } from "react-router-dom";

const ListPopUp = () => {
  const [tableData, setTableData] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const url = `${constant.base}/api/popup`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setTableData(res.data.msg);
    });
  }, []);

  const deleteRequest = (id) => {
    axios.delete(`${url}/${id}`).then((res) => {
      window.location.reload();
    });
  };
  return (
    <div>
      {isPopupVisible && (
        <Link to="/dashboard/create-popup">
          <button
            style={{
              padding: "0.35rem 0.95rem",
              margin: "0.25rem",
              color: "white",
              background: "#007bff",
              border: "none",
              outline: "none",
            }}
          >
            Create Popup
          </button>
        </Link>
      )}
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Image Name</th>
            <th>Image Alt Name</th>
            <th className="action-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            if (tableData) {
              console.log(tableData);

              if (tableData.length > 0) {
                return tableData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          style={{ width: "4rem" }}
                          src={`
                        ${constant.base}/storage/${data.Image}`}
                        ></img>
                      </td>
                      <td>{data.ImageName}</td>
                      <td>{data.ImageAltText}</td>

                      <td>
                        <button
                          onClick={() => {
                            deleteRequest(data._id);
                          }}
                          style={{
                            padding: "0.35rem 0.95rem",
                            margin: "0.25rem",
                            color: "white",
                            background: "#dc3545",
                            border: "none",
                            outline: "none",
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                });
              }
            }
          })()}
        </tbody>
      </table>
    </div>
  );
};

export default ListPopUp;
