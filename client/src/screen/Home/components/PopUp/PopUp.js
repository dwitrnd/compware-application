import styled from "styled-components";
import { Button } from "@mui/material";
import Image1 from "../../../../assets/images/welcome.jpeg";
import { useState } from "react";
const PopupStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* Adjust the alpha value here */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopUp = () => {
  return (
    <>
      <PopupStyle>
        <div style={{ height: "50vh", margin: "auto" }}>
          <img src={Image1} />
        </div>
        {/* <div>
            <Button variant="contained">Learn More</Button>
          </div> */}
      </PopupStyle>
    </>
  );
};
export default PopUp;
