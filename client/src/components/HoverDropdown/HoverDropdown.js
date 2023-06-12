import React from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
  position: relative;
  background: red;
`;

const DropDownContent = styled.div`
  position: absolute;
  top: 2rem;
  width: 100%;
  background: white;
  border-radius: 0.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const MegaMenu = () => {
  return (
    <>
      <DropDownContainer>
        <div>Dropdown Menu</div>
        <DropDownContent>
          <ul>
            <li>this is a menu with long name</li>
            <li>this is a menu with long name</li>
            <li>this is a menu with long name</li>
            <li>this is a menu with long name</li>
          </ul>
        </DropDownContent>
      </DropDownContainer>
    </>
  );
};

export default MegaMenu;
