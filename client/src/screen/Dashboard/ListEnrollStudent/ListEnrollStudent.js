import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";
import styled from "styled-components";

const ListEnrollStudent = () => {
  const [tableData, setTableData] = useState(null);

  const StatusTag = styled.span`
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
    background: ${(props) => {
      if (props.status === "not approved") {
        return "#ffc107";
      } else if (props.status === "approved") {
        return "#28a745";
      }
    }};
  `;

  const url = `${constant.base}/api/enquiry`;

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

  const changeStatusHandler = (id, email, status) => {
    if (status === "not approved") {
      status = "approved";
    } else if (status === "approved") {
      status = "not approved";
    }

    axios.patch(`${constant.base}/api/enrollmentStatus/status/${id}`, { email: email, status: status }).then((res) => {
      window.location.reload();
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Phone Number</th>
            <th>Schedule Time</th>
            <th>Status</th>
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
                      <td>{data.name}</td>
                      <td>{data.course}</td>
                      <td>{data.phoneNum}</td>
                      <td>{data.enquiryDate}</td>
                      <td>
                        <StatusTag
                          onClick={() => {
                            changeStatusHandler(data._id, data.email, data.status);
                          }}
                          status={data.status}
                        >
                          {data.status}
                        </StatusTag>
                      </td>
                      <td>
                        {/* <button style={{ padding: "0.35rem 0.95rem", margin: "0.25rem", color: "white", background: "#007bff", border: "none", outline: "none" }}>Edit</button> */}

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

export default ListEnrollStudent;
