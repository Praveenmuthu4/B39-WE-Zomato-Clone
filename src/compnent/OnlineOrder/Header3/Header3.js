import React, { useRef, useState } from "react";
import './Header3.css'
import Data from "./Data";

export default function Header3() {


  return (
    <div className="sc-emjYpo jYGboT">
      <div className="sc-1mo3ldo-0 fihUGr">
        <h3 color="#1C1C1C" className="sc-1sv4741-0 sc-feWbDf fAXPk">
          Inspiration for your first order
        </h3>
        <section
          tabindex="0"
          aria-roledescription="carousel"
          className="sc-w2q7gn-0 jrsdDz"
        >
          <section className="sc-w2q7gn-4 dpmxcg">
          
                <Data/>
              
            <div className="sc-1krzjx0-0 UxzDv carousel-arrow" default="">

       <section
                tabindex="0"
                role="button"
                aria-controls="carousel-items"
                aria-label="Next Slide"
                className="sc-1krzjx0-2 bPeSFW"
                
              ></section>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
