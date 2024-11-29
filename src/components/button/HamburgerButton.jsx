import "./hamburgerButton.css";
import React, { useState } from "react";
import Hamburger from "hamburger-react";

export const HamburgerButton = () => {
  const [open, setOpen] = useState(false);
  return <div>
    <Hamburger />
  </div>;
};

export default HamburgerButton;
