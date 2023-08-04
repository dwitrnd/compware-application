import { Container } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import OurTeamLayout from "./OurTeamLayout";
import CompwareTeacher from "./CompwareTeacher";
import { constant } from "constants/contants";
import axios from "axios";

=======
import React from "react";
import { Typography } from "@mui/material";
import OurTeamLayout from "./OurTeamLayout";

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
          <Typography variant='h3' color='primary'>
            Meet the Team
          </Typography>
        </div>
        <div>
          {(() => {
            if (tableData.length > 0) {
              return <OurTeamLayout title='Our Team' datas={tableData} />;
            }
          })()}
        </div>
      </Container>
    </>
  );
};

export default OurTeam;
