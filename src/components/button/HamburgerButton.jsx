import "./hamburgerButton.css";
import React, { useState, useNavigate, handleMapClick } from "react";
import Hamburger from "hamburger-react";
import { FloatButton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faMessage, faPlus } from "@fortawesome/free-solid-svg-icons";



export const HamburgerButton = () => {
  const navigate = useNavigate();

  const handleMapClick = () => {
    navigate("/map"); // Navigate to the map page
  };
  return (
    <div>

      <FloatButton.Group
        icon={<FontAwesomeIcon icon={faPlus} />}
        trigger="click"
      >
        <FloatButton
          icon={<FontAwesomeIcon icon={faMessage} />}
          tooltip="Contact us"
        />
        <FloatButton
          icon={<FontAwesomeIcon icon={faAddressBook} />}
          tooltip="Your Account"
          onClick={handleMapClick}
        />
      </FloatButton.Group>
    </div>
  );
};

export default HamburgerButton;
