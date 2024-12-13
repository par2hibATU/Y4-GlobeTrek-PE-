import "./hamburgerButton.css";
import React, { useState, handleMapClick } from "react";
import { useNavigate } from "react-router-dom";
import { FloatButton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMessage, faPlus } from "@fortawesome/free-solid-svg-icons";



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
          icon={<FontAwesomeIcon icon={faLocation} />}
          tooltip="Location"
          onClick={handleMapClick}
        />
      </FloatButton.Group>
    </div>
  );
};

export default HamburgerButton;
