import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { constant } from "constants/contants";

const PopupStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(5px);
`;

const PopUp = () => {
  const [popupData, setPopupData] = useState(null);
  const url = `${constant.base}/api/popup`;

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        const response = await axios.get(url);
        setPopupData(response.data.msg);
      } catch (error) {
        console.error("Error fetching popup data:", error);
      }
    };

    fetchPopupData();
  }, []);

  return (
    <>
      {popupData && popupData.length > 0 && (
        <PopupStyle>
          <div style={{ height: "50vh", margin: "auto" }}>
            <img
              src={`${constant.base}/storage/${popupData[0].Image}`}
              alt={popupData[0].ImageAltText}
              style={{ maxWidth: "60vw", maxHeight: "60vh" }}
            />
          </div>
        </PopupStyle>
      )}
    </>
  );
};

export default PopUp;
