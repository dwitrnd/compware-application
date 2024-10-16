import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";
import { Link } from "react-router-dom";

const ListTestimonialBody = () => {
  const [tableData, setTableData] = useState(null);
  const url = `${constant.base}/api/hardware`;

  useEffect(() => {
    axios.get(url).then((res) => {
      /* The line `// setTableData(res.data.msg);` is commented out, which means it is not currently
      being executed. However, if it were to be uncommented, it would set the value of the
      `tableData` state variable to `res.data.msg`. This means that the data received from the API
      response would be stored in the `tableData` state variable, which can then be used to render
      the table rows in the component. */
      setTableData(res.data.msg);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteRequest = (id) => {
    axios.delete(`${url}/${id}`).then((res) => {
      window.location.reload();
    });
  };

  return (
    <div>
      <Link to="/dashboard/create-hardware">
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
          Create hardware
        </button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Model</th>
            <th>Specification</th>
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
                        ${constant.base}/storage/${data.photo}`}
                        ></img>
                      </td>
                      <td>{data.name}</td>
                      <td>{data.model}</td>
                      <td>{data.specification}</td>

                      <td>
                        <a href={`/dashboard/update-hardware/${data._id}`}>
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
                            Edit
                          </button>
                        </a>

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

export default ListTestimonialBody;
