import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListClientBody = () => {
  // use useeffect

  const [tableData, setTableData] = useState(null);

  const url = `${constant.base}/api/client`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.msg);
      /* The line `// setTableData(res.data.msg);` is commented out, which means it is not currently
      being executed. However, if it were to be uncommented, it would set the value of the
      `tableData` state variable to `res.data.msg`. This means that the data received from the API
      response would be stored in the `tableData` state variable, which can then be used to render
      the table rows in the component. */
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
      <Link to='/dashboard/create-client'>
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
          create client
        </button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>ImageName</th>
            <th>ImageAltText</th>

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

export default ListClientBody;
