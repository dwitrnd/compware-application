import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";

const ListRequestCertificate = () => {
  // use useeffect

  const [tableData, setTableData] = useState(null);

  const url = `${constant.base}/api/request-certificate`;

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
      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>Contact number</th>
            <th>Email</th>
            <th>Course</th>
            <th>Course trainer</th>
            <th>Start time</th>
            <th>End time</th>
            <th className='action-column'>Actions</th>
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
                  return (
                    <tr key={index}>
                      <td>{data.fullName}</td>
                      <td>{data.contactNumber}</td>
                      <td>{data.email}</td>
                      <td>{data.course}</td>
                      <td>{data.courseTrainer}</td>
                      <td>{data.startTime}</td>
                      <td>{data.endTime}</td>
                      <td>
                        <button style={{ padding: "0.35rem 0.95rem", margin: "0.25rem", color: "white", background: "#007bff", border: "none", outline: "none" }}>Edit</button>
                        <button
                          onClick={() => {
                            deleteRequest(data._id);
                          }}
                          style={{ padding: "0.35rem 0.95rem", margin: "0.25rem", color: "white", background: "#dc3545", border: "none", outline: "none" }}
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

export default ListRequestCertificate;
