
import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";

const ListEnrollStudent = () => {
  // use useeffect

  const [tableData, setTableData] = useState(null);

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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Phone Number</th>
            <th>Enquiry Date</th>
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
                      <td>{data.status}</td>
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

import React, { useEffect } from "react";

const ListEnrollStudent = () => {
  return (
    <div>
     
     <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Course</th>
                    <th>Enquiry Date</th>
                    <th>Status</th>
                    <th className="action-column">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>123-456-7890</td>
                    <td>React 101</td>
                    <td>2023-08-02</td>
                    <td>Open</td>
                    <td className="action-column">
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                    </td>
                </tr>
                {/* Add more rows dynamically using React state or props */}
            </tbody>
        </table>
     
     </div>
  );
};

export default ListEnrollStudent;
