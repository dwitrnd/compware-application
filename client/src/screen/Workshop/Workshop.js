import { Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { WorkshopData } from "./WorkshopData";
import axios from "axios";
import { constant } from "constants/contants";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0f5288",
};
const Workshop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 3;
  const [pageNumber, setPageNumber] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [allTableData, setAllTableData] = useState([]);
  const url = `${constant.base}/api/workshop`;

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setAllTableData(res.data.msg);
      setTableData(res.data.msg);
      console.log(tableData);
      setIsLoading(false);
    });
  }, []);

  const handlePageChange = (event, page) => {
    setPageNumber(page);
  };

  if (isLoading) {
    return (
      <div
        style={{
          paddingTop: "10rem",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ClipLoader
          cssOverride={override}
          color={"red"}
          loading={true}
          size={90}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if(tableData){
    return (
      <>
        <Container>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "40px",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="primary">
              Workshops
            </Typography>
          </section>
          {
            tableData &&
            tableData
              .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage) // Slice the data for the current page
              .map((item) => {
                return (
                  <>
                    <WorkshopData
                      id={item._id}
                      title={item.title}
                      date={item.date}
                      
                      logo={`${constant.base}/storage/${item.logo}`}
                      article={item.article}
                    />
                  </>
                );
              })}
          <Stack
            spacing={2}
            direction="row"
            alignItems="flex-end"
            justifyContent="center"
            marginTop={3}
            marginBottom={3}
          >
            <Pagination
              onChange={handlePageChange}
              count={Math.ceil(tableData.length / itemsPerPage)}
              color="primary"
              shape="rounded"
              style={{ marginTop: "3rem" }}
            />
          </Stack>
        </Container>
      </>
    );
  }
else{
return(
  <>
        <Container>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "40px",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="primary">
              Workshops
            </Typography>
          </section>
          <p style={{ textAlign:"center", paddingTop:"25px", fontWeight:"900" }}>No workshops found.</p>
          
        </Container>
      </>
)
}
};

export default Workshop;
