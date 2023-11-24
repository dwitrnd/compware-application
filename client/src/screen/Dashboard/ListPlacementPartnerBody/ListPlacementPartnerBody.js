import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";
import { Link } from "react-router-dom";

const ListPlacementPartnerBody = () => {
  const [tableData, setTableData] = useState(null);
  const url = `${constant.base}/api/placement`;

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
      <Link to="/dashboard/create-placement">
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
          create partner
        </button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>ImageName</th>
            <th>ImageAltText</th>

            <th className="action-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            if (tableData) {
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

export default ListPlacementPartnerBody;
