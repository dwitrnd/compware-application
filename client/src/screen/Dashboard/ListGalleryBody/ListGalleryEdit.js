import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ListGalleryEdit = () => {
  const { id } = useParams();
  const [tableData, setTableData] = useState(null);

  const url = `${constant.base}/api/gallery/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.data);
      setTableData(res.data.data);
    });
  }, [url]);

  const deleteRequest = (id, imageName) => {
    axios.delete(`${url}/images/${imageName}`).then((res) => {
      // Reload the data or update the state as needed
      window.location.reload();
    });
  };

  return (
    <div>
      <Link to='/dashboard/create-gallery'>
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
            <th className='action-column'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.images &&
            tableData.images.map((image, index) => (
              <tr key={index}>
                <td>
                  <img
                    style={{ width: "4rem", marginRight: "5px" }}
                    src={`${constant.base}/storage/${image}`}
                    alt={`Image ${index + 1}`}
                  />
                </td>
                <td>{tableData.galleryCategoryName}</td>
                <td>
                  <button
                    onClick={() => {
                      const confirmed = window.confirm(
                        "Are you sure you want to delete this image?"
                      );
                      if (confirmed) {
                        deleteRequest(tableData._id, image);
                      }
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
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListGalleryEdit;
