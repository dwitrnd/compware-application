import React, { useEffect, useState } from "react";
import axios from "axios";
import { constant } from "constants/contants";
import { Link } from "react-router-dom";

const ListTrainer = () => {
  const [tableData, setTableData] = useState(null);

  const url = `${constant.base}/api/trainer`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.msg);

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
      <Link to="/dashboard/add-trainer">
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
          Add Trainer
        </button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Signature</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            {
              /* tableData is a state with value []  */
            }
            if (tableData) {
              console.log(tableData);

              if (tableData.length > 0) {
                return tableData.map((data, index) => {
                  {
                    /* if(data.Post){

                  }
                   */
                  }
                  return (
                    <tr key={index}>
                      <td>{data.trainerName}</td>
                      <td>
                        <img
                          style={{ height: "4rem", width: "4rem" }}
                          src={`
                        ${constant.base}/storage/${data.signature}`}
                        ></img>
                      </td>
                      <td>{data.trainerTitle}</td>

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

export default ListTrainer;
