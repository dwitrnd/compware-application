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
