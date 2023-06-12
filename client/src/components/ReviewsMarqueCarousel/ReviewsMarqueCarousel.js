import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";
import certificateImage from "assets/images/certificateimage.jpeg";

const Photo = styled.img`
  width: ${(props) => props.scale * 368}px;
  height: ${(props) => props.scale * 200}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;

  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage, certificateImage];

const People = ({ size }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <div>
      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={25}>
          {times(7, Number).map((id) => (
            <Photo src={photos[id]} alt='' key={`marquee-example-people-${id}`} scale={scale} />
          ))}
        </Marquee>
      </div>

      <div style={{ height: scale * 60 }} />

      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={25}>
          {times(7, Number).map((id) => (
            <Photo src={photos[id + 7]} alt='' key={`marquee-example-people-${id + 7}`} offset='true' scale={scale} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default withSize()(People);
