import React, { useState } from "react";
import "./Navbar.css";
import LocationSearch from "../../LocationSearch/LocationSearch";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function NavBar() {

  const [toggle, setToggle] = useState(true);
  const locationStyle = {
    display: toggle ? "block" : "none",
  };

  return (
    <div>
      <div className="top-container">
        <header className="home-header">
          <nav className="home-container">
            <ul className="header-container">
              <li tabIndex="0" className="mobile-icon">
                <a href="/mobilepage" className="mobile-content">
                  <i className="fa fa-mobile">Get the App</i>
                </a>
              </li>
              <li tabIndex="0" className="list-icon">
                <a src="true" tabIndex="-1" className="list-content">
                  Investor Relations
                </a>
              </li>
              <li tabIndex="0" className="list-icon">
                <a className="link-style list-content" href="createRestaurant">
                Add Restaruant
            </a>
              </li>
              <li tabIndex="0" className="list-icon">
                <a src="true" tabIndex="-1" className="list-content" href="/login">
                  Login
                </a>
              </li>
              <li tabIndex="0" className="list-icon">
                <a src="true" tabIndex="-1" className="list-content" href='/signup'>
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="whole-home-img">
        <div
          className="home-img-container"
          height="calc(100vh - 30rem)"
          width="100%"
        >
          <div className="home-img">
            <img
              src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
              className="high-resolution-img"
            />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="whole-logo" >
            <div className="zomato-logo">
              <img
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                className="low-resolution-img"
              />
            </div>
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              className="high-resolution-img"
            />
          </div>
          <h1 className="description">Discover the best foods & drinks in</h1>
          <div className="whole-search-container">
            <div className="search-container">
              <div className="first-box-search">
                <i
                  className="fa fa-map-marker search-icon1"
                  size="20"
                  color="#FF7E8B"
                ></i>
                <input className="input-search" />
                {/* <i className="btn dropdown-toggle search-icon2" size="12"></i> */}
                <IconButton
            aria-label="Toggle content"
            onClick={() => setToggle(!toggle)}
            color="primary"
          >
            {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {toggle ? (
        <div className="" style={locationStyle}>
          <LocationSearch/>
        </div>
      ) : null}
          
              </div>
              <div className="middle-line"></div>
              <div className="main-search-container">
                <div className="main-search">
                <i className="fa fa-search search-icon3" size="18"></i>
                </div>
                <input placeholder="Search for a restaurant,cuisine or a dish" className="input-search2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
