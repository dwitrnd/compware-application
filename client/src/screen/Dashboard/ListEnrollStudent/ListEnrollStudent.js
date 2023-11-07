import axios from "axios";
import React, { useEffect, useState } from "react";
import { constant } from "constants/contants";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Box, Typography } from "@mui/material";
const ListEnrollStudent = () => {
  const [tableData, setTableData] = useState(null);
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [filterTableData, setFilterTableData] = useState();
  const [endDate, setEndDate] = useState();

  const [statusChangeLoadingState, setStatusChangeLoadingState] =
    useState(false);

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
  const headers = [
    { label: "Name", key: "name" },
    { label: "Course", key: "course" },
    { label: "Phone Number", key: "phoneNum" },
    { label: "Email", key: "email" },
    { label: "Enquiry Date", key: "enquiryDate" },
    { label: "Form Submitted", key: "formSubmited" },
    { label: "Status", key: "status" },
  ];

  const url = `${constant.base}/api/enquiry`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.msg);
      setTableData(res.data.msg);
    });
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      // Filter tableData based on selected date range
      console.log(startDate);
      const filteredData = tableData.filter((data) => {
        const formattedDate = new Date(data.formSubmited).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );
        const currentDate = new Date(formattedDate);
        return currentDate >= startDate && currentDate <= endDate;
      });
      setFilterTableData(filteredData);
    }
  }, [startDate, endDate]);

  const handleDateChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const deleteRequest = (id) => {
    axios.delete(`${url}/${id}`).then((res) => {
      window.location.reload();
    });
  };

  const changeStatusHandler = async (data) => {
    setStatusChangeLoadingState(true);
    let { id, email, status, courseName, courseLink, name } = data;

    if (status === "not approved") {
      status = "approved";
    } else if (status === "approved") {
      status = "not approved";
    }

    console.log("Course Link: ", courseLink);

    await axios
      .patch(`${constant.base}/api/enrollmentStatus/status/${id}`, {
        email: email,
        status: status,
        courseName: courseName,
        courseLink: courseLink,
        name: name,
      })
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          setStatusChangeLoadingState(false);
          window.location.reload();
        } else {
          setStatusChangeLoadingState(false);
          alert("Something went wrong");
        }
      });
  };

  const findCourseLinkByName = async (courseName) => {
    // axios request where in body i pass courseName
    console.log("Course Name finder: ", courseName);
    const courseURL = await axios
      .post(`${constant.base}/api/course/find-by-name`, {
        courseName: courseName,
      })
      .then((res) => {
        const { _id } = res.data.msg;
        return `${constant.client}/course-detail/${_id}`;
      });
    return courseURL;
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Box>
          <Typography variant="button">Select Start Date: </Typography>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Box>
        <Box>
          <Typography variant="button">Select End Date: </Typography>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </Box>
      </div>
      {filterTableData && filterTableData.length > 0 && (
        <button style={{ margin: "1rem 0" }}>
          <CSVLink
            data={filterTableData ?? ""}
            headers={headers}
            filename={"enroll_data.csv"}
          >
            Download CSV
          </CSVLink>
        </button>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Schedule Time</th>
            <th>Form Submitted</th>
            <th>Status</th>
            <th className="action-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            let datas = filterTableData;
            if (datas ? filterTableData : (datas = tableData)) {
              console.log(datas);
              if (datas.length > 0) {
                return datas.map((data, index) => {
                  const formattedDate = new Date(
                    data.formSubmited
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                  return (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.course}</td>
                      <td>{data.phoneNum}</td>
                      <td>{data.email}</td>
                      <td>{data.enquiryDate}</td>
                      <td>{formattedDate}</td>
                      <td>
                        {(() => {
                          if (statusChangeLoadingState) {
                            return <span>Loading...</span>;
                          } else {
                            return (
                              <StatusTag
                                onClick={async () => {
                                  const courseLink = await findCourseLinkByName(
                                    data.course
                                  );

                                  changeStatusHandler({
                                    id: data._id,
                                    email: data.email,
                                    status: data.status,
                                    courseName: data.course,
                                    courseLink: courseLink,
                                    name: data.name,
                                  });
                                }}
                                status={data.status}
                              >
                                {data.status}
                              </StatusTag>
                            );
                          }
                        })()}
                      </td>
                      <td>
                        {/* <button style={{ padding: "0.35rem 0.95rem", margin: "0.25rem", color: "white", background: "#007bff", border: "none", outline: "none" }}>Edit</button> */}

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

export default ListEnrollStudent;
