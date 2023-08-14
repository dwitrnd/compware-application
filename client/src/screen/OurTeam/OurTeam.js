import { Container } from "@material-ui/core";
import React, { Suspense, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import OurTeamLayout from "./OurTeamLayout";
import { constant } from "constants/contants";
import axios from "axios";

const OurTeam = () => {
  const [tableData, setTableData] = useState([]);

  const url = `${constant.base}/api/team`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setTableData(res.data.msg);
    });
  }, []);

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
