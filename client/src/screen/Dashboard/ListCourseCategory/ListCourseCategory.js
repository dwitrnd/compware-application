import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { constant } from "constants/contants";

const ListCourseCategory = () => {
  const [tableData, setTableData] = useState(null);
  const url = "http://localhost:5001/api/courseCategory";

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
      <Link to="/dashboard/create-course-category">
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
          Create Category
        </button>
      </Link>
      <Suspense fallback={<Loading />}>
        <table>
          <thead>
            <tr>
              <th>Category Name</th>
              <th className="action-column">Actions</th>
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
                        <td>{data.categories}</td>

                        <td>
                          <a
                            href={`/dashboard/update-course-category/${data._id}`}
                          >
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
      </Suspense>
    </div>
  );
};

const Loading = () => {
  return <h2>Loading....</h2>;
};

export default ListCourseCategory;
