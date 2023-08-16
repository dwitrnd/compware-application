import { Container } from "@material-ui/core";
import React, { Suspense, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import OurTeamLayout from "./OurTeamLayout";
import { constant } from "constants/contants";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0f5288",
};

const OurTeam = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `${constant.base}/api/team`;

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setTableData(res.data.msg);
      setIsLoading(false);
    });
  }, []);

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

  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h3"
            color="primary"
            style={{ marginBottom: "1.5rem" }}
          >
            Meet the Team
          </Typography>
        </div>
        <div>
          {(() => {
            if (tableData.length > 0) {
              return <OurTeamLayout title="Our Team" datas={tableData} />;
            }
          })()}
        </div>
      </Container>
    </>
  );
};

export default OurTeam;
