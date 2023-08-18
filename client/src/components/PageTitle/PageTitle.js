import React from "react";
import { useEffect } from "react";

// Modifications of title of each page
const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

export default PageTitle;
