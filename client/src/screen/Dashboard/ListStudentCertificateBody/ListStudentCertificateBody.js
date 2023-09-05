import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";

import { Link } from "react-router-dom";

const ListStudentCertificateBody = () => {
  const [tableData, setTableData] = useState(null);

  const url = `${constant.base}/api/student`;

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
      <Link to='/dashboard/create-team'>
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
          create
        </button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>photo</th>
            <th>fullName</th>
            <th>startDuration</th>
            <th>endDuration</th>
            <th>course</th>
            <th>courseDuration</th>
            <th>trainer</th>
            <th>trainerTitle</th>
            <th>verificationId</th>
            {/* <th>email</th> */}
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
                  {
                    /* if(data.Post){

                  }
                   */
                  }
                  return (
                    <tr key={index}>
                      <td>
                        {(() => {
                          if (!data.photo) {
                            return <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvKYGexBwzDSVXsx2PtJV8s_p7rWwNwJONTNQIf7q&s"} alt='student' style={{ width: "50px", height: "50px" }} />;
                          } else {
                            return <img src={data.photo} alt='student' style={{ width: "50px", height: "50px" }} />;
                          }
                        })()}
                      </td>
                      <td>{data.fullName}</td>
                      <td>{data.startDuration}</td>
                      <td>{data.endDuration}</td>
                      <td>{data.course}</td>
                      <td>{data.courseDuration}</td>
                      <td>{data.trainer}</td>
                      <td>{data.trainerTitle}</td>
                      <td>{data.verificationId}</td>
                      {/* <td>{data.email === "" ? null : data.email}</td> */}
                      <td>
                        <Link to={`/dashboard/edit-team/${data._id}`}>
                          <button style={{ padding: "0.35rem 0.95rem", margin: "0.25rem", color: "white", background: "#007bff", border: "none", outline: "none" }}>Edit</button>
                        </Link>

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

export default ListStudentCertificateBody;
