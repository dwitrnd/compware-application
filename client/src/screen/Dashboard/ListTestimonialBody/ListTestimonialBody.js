import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";

import { Link } from "react-router-dom";

const ListTestimonialBody = () => {
  const [tableData, setTableData] = useState(null);

  const url = `${constant.base}/api/testimonial`;

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
      <Link to='/dashboard/create-testimonial'>
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
          Add Testimonial
        </button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Post</th>
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
                        <img
                          style={{ height: "4rem", width: "4rem" }}
                          src={`
                        ${constant.base}/storage/${data.image}`}
                        ></img>
                      </td>
                      <td>{data.name}</td>
                      <td>{data.description}</td>
                      <td>
                        <a href={`/dashboard/edit-testimonial/${data._id}`}>
                          <button style={{ padding: "0.35rem 0.95rem", margin: "0.25rem", color: "white", background: "#007bff", border: "none", outline: "none" }}>Edit</button>
                        </a>
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

export default ListTestimonialBody;
