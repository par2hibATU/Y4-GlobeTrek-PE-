import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navbarTitle">
          <span className="logo">GlobeTrek</span>
        </div>

        <div className="navItems">
          <div className="navbarRegisterItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>

          <div className="navbarList">
            <div className="navbarListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>

            <div className="navbarListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="navbarListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="navbarListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attraction</span>
            </div>
            <div className="navbarListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
            <div className="navbarListItem">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
