import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";
import { Link } from "react-router-dom";

const ListGalleryBody = () => {
  // use useeffect

  const [tableData, setTableData] = useState(null);
  const[image, setImage]=useState([]);
  const [visible, setVisible] = useState(4);

  const url = `${constant.base}/api/gallery`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setTableData(res.data.msg);
      setImage(res.data.msg);
      console.log(image);
    });
  }, []);

  const deleteRequest = (id) => {
    axios.delete(`${url}/${id}`).then((res) => {
      window.location.reload();
    });
  };
  const showMoreItems = () => {
    setVisible((preValue) => preValue + 8);
    console.log()
  };

  const showLessItems=()=>{
    setVisible(4);
  };

  return (
    <div>
      <Link to="/dashboard/create-gallery">
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
          create gallery
        </button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Image Category</th>

            <th className="action-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            {
              /* tableData is a state with value []  */
            }
            if (tableData) {
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
                      {/* { 
            image.slice(0, visible).map((image) => (
              <img
                          style={{ width: "4rem" }}
                          src={`
                        ${constant.base}/storage/${data.images}`}
                        ></img>
            ))}
          {visible==4?
          <button className="font-semibold text-blue-400 mt-10 text-center w-screen pb-5 hover:text-blue-500" onClick={showMoreItems}>
            View more {">"}
          </button>
          :
          <button className="font-semibold text-blue-400 mt-10 text-center w-screen pb-5 hover:text-blue-500" onClick={showLessItems}>
            View less {">"}
          </button>
          }
                         */}
                      </td>
                      <td>{data.galleryCategoryName}</td>

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

export default ListGalleryBody;
