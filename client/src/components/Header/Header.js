import React from "react";
import styled from "styled-components";

const Header = ({ subTitle, preTitle, postTitle, paragraph }) => {
  const HeaderContainer = styled.div`
    h6,
    h2,
    p {
      text-align: center;
    }

    h6 {
      font-size: 1rem;
      /*provide gradient color */

      background: linear-gradient(90deg, #02a28b, #067f87 52.4%, #0a5f82);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      margin: 0.2rem 0rem;
      font-size: 2.5rem;
    }
    p {
      margin-bottom: 3rem;
      font-size: 1.1rem;
    }
  `;

  return (
    <HeaderContainer>
      <header>
        <h6 className="roboto_300">{subTitle}</h6>
        <h2 className="roboto_400">
          {preTitle}
          <div style={{ display: "inline", marginLeft: ".5rem" }}>
            {postTitle}
          </div>
        </h2>
        <p className="grey-color">{paragraph}</p>
      </header>
    </HeaderContainer>
  );
};

export default Header;
