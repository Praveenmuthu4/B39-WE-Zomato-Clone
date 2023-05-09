import React from "react";

import "./search.css";

export default function Header(){


  return (
    <div className="header max-width">
     
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <span
                style={{ fontSize: "1.5em", color: "#d92662" }}
                className="iconify"
                data-icon="ci:location"
              ></span>
              <div>Allahabad</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <span
              style={{ fontSize: "2em" }}
              className="iconify"
              data-icon="ei:search"
            ></span>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

