import React from "react";

const RenderHtmlString = ({ htmlString }) => {
  const createMarkup = () => {
    return { __html: htmlString };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default RenderHtmlString;
