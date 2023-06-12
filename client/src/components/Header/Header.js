import React from "react";

const Header = ({ subTitle, preTitle, postTitle, paragraph }) => {
  return (
    <>
      <header>
        <h6 className='roboto_300'>{subTitle}</h6>
        <h2 className='roboto_400'>
          {preTitle}
          <div className='gradient-text' style={{ display: "inline", marginLeft: ".5rem" }}>
            {postTitle}
          </div>
        </h2>
        <p className='grey-color'>{paragraph}</p>
      </header>
    </>
  );
};

export default Header;
