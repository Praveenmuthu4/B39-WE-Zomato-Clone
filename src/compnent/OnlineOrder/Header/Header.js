import React from "react";
import "./Header.css";
import Header1 from "../Header1/Header1";
import Header2 from "../Header2/Header2";
import Header3 from "../Header3/Header3";
import BottomContent from "../BottomContent/BottomContent";

export default function Header() {
  return (
    <div>
      <div className="gwpgN">
        <header className="bVMVXt">
          <nav className="ifdVMV">
            <ul className="gpdnUW">
              <li className="sc-yvzia9-4 bmbqmX">
                <div
                  aria-label="Menu"
                  aria-controls="navigation_clh5r5ux3000w1snkcvfve76e"
                  aria-expanded="false"
                  role="button"
                  tabindex="0"
                  className="sc-3o0n99-0 hKuLnY"
                >
                  <span className="sc-3o0n99-1 kkPOQi"></span>
                  <span className="sc-3o0n99-1 kkPOQi"></span>
                  <span className="sc-3o0n99-1 kkPOQi"></span>
                </div>
              </li>
              <li className="sc-yvzia9-4 bmbqmX">
                <img
                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                  tabindex="0"
                  className="sc-yvzia9-6 sc-yvzia9-7 fvCyAU"
                />
              </li>
            </ul>
            <div className="sc-yvzia9-0 lngwlA">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                tabindex="0"
                className="sc-yvzia9-6 hxTfPc"
              />
            </div>
            <ul
              id="navigation_clh5r5ux3000w1snkcvfve76e"
              role="none"
              aria-label="navbar"
              aria-expanded="false"
              className="sc-3o0n99-3 fIVbKv"
            >
              <li tabindex="0" className="sc-3o0n99-4 kAUthO">
                <div tabindex="-1" className="sc-iLyPtt kQGLYb">
                  <div className="sc-eghKGU jjDooz">
                    <div className="sc-18n4g8v-0 gAhmYY sc-igwadP hUwOJh">
                      <i
                        className="sc-rbbb40-1 iFnyeo"
                        color="#FF7E8B"
                        size="20"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FF7E8B"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          aria-labelledby="icon-svg-title- icon-svg-desc-"
                          role="img"
                          className="sc-rbbb40-0 iRDDBk"
                        >
                          <title>location-fill</title>
                          <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
                        </svg>
                      </i>
                      <input
                        placeholder="Ekkaduthangal, Chennai, India"
                        className="sc-ckYZGd fVrIQH"
                        value=""
                      />
                      <i
                        className="sc-rbbb40-1 iFnyeo sc-dUcZlc jWRoci"
                        color="#4F4F4F"
                        size="12"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#4F4F4F"
                          width="12"
                          height="12"
                          viewBox="0 0 20 20"
                          aria-labelledby="icon-svg-title- icon-svg-desc-"
                          role="img"
                          className="sc-rbbb40-0 ezrcri"
                        >
                          <title>down-triangle</title>
                          <path d="M20 5.42l-10 10-10-10h20z"></path>
                        </svg>
                      </i>
                      {/* <div className="sc-iNovjJ cbqhcE">
                      <div className="sc-dCaJBF sc-cXHFlN jZWYCm">
                        <div className="sc-dchYKM fJNHIt">
                          <div className="sc-hAcydR gtZnFi">
                            <i
                              className="sc-rbbb40-1 iFnyeo"
                              color="#EF4F5F"
                              size="14"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#EF4F5F"
                                width="14"
                                height="14"
                                viewBox="0 0 20 20"
                                aria-labelledby="icon-svg-title- icon-svg-desc-"
                                role="img"
                                className="sc-rbbb40-0 kyPUnV"
                              >
                                <title>current-location</title>
                                <path d="M13.58 10c0 1.977-1.603 3.58-3.58 3.58s-3.58-1.603-3.58-3.58c0-1.977 1.603-3.58 3.58-3.58v0c1.977 0 3.58 1.603 3.58 3.58v0zM20 9.52v0.96c0 0.265-0.215 0.48-0.48 0.48v0h-1.72c-0.447 3.584-3.256 6.393-6.802 6.836l-0.038 0.004v1.72c0 0.265-0.215 0.48-0.48 0.48v0h-0.96c-0.265 0-0.48-0.215-0.48-0.48v0-1.72c-3.575-0.455-6.375-3.262-6.816-6.802l-0.004-0.038h-1.74c-0.265 0-0.48-0.215-0.48-0.48v0-0.96c0-0.265 0.215-0.48 0.48-0.48v0h1.74c0.445-3.578 3.245-6.385 6.781-6.836l0.039-0.004v-1.72c0-0.265 0.215-0.48 0.48-0.48v0h0.96c0.265 0 0.48 0.215 0.48 0.48v0 1.72c3.584 0.447 6.393 3.256 6.836 6.802l0.004 0.038h1.72c0.265 0 0.48 0.215 0.48 0.48v0zM15.96 10c0-3.292-2.668-5.96-5.96-5.96s-5.96 2.668-5.96 5.96c0 3.292 2.668 5.96 5.96 5.96v0c3.292 0 5.96-2.668 5.96-5.96v0z"></path>
                              </svg>
                            </i>
                          </div>
                          <p
                            color="#EF4F5F"
                            className="sc-1hez2tp-0 sc-eAyhxF iLWlIB"
                          >
                            Detect current location
                          </p>
                        </div>
                        <p className="sc-1hez2tp-0 sc-eVrGFk bNyCmq">Using GPS</p>
                      </div>
                      <div className="sc-BOulX jDGYJT">Recent Locations</div>
                      <div className="sc-dCaJBF sc-iBfVdv bjkyoN">
                        <div className="sc-eomEcv jEsoUy">
                          <i
                            className="sc-rbbb40-1 iFnyeo"
                            size="15"
                            color="#1C1C1C"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#1C1C1C"
                              width="15"
                              height="15"
                              viewBox="0 0 20 20"
                              aria-labelledby="icon-svg-title- icon-svg-desc-"
                              role="img"
                              className="sc-rbbb40-0 jKmKoK"
                            >
                              <title>time</title>
                              <path d="M14.76 9.040h-4.22l-2.58-4.28c-0.147-0.354-0.489-0.598-0.889-0.598-0.53 0-0.96 0.43-0.96 0.96 0 0.227 0.079 0.436 0.211 0.6l-0.001-0.002 2.86 4.76c0.172 0.278 0.474 0.46 0.82 0.46 0 0 0 0 0.001 0h4.76c0.467-0.070 0.822-0.469 0.822-0.95s-0.354-0.88-0.817-0.949l-0.005-0.001zM10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10v0zM10 18.58c-4.739 0-8.58-3.841-8.58-8.58s3.841-8.58 8.58-8.58c4.739 0 8.58 3.841 8.58 8.58v0c0 4.739-3.841 8.58-8.58 8.58v0z"></path>
                            </svg>
                          </i>
                        </div>
                        <div className="sc-cCbPEh kWbxMJ">
                          Ekkaduthangal, Chennai, India
                        </div>
                      </div>
                    </div> */}
                    </div>
                    <div className="sc-csuNZv wttIZ"></div>
                    <div className="sc-18n4g8v-0 gAhmYY sc-ccbnFN dmIOAw">
                      <div className="sc-ccvjgv liWVud">
                        <i
                          className="sc-rbbb40-1 iFnyeo"
                          color="#828282"
                          size="18"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#828282"
                            width="18"
                            height="18"
                            viewBox="0 0 20 20"
                            aria-labelledby="icon-svg-title- icon-svg-desc-"
                            role="img"
                            className="sc-rbbb40-0 iwHbVQ"
                          >
                            <title>Search</title>
                            <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
                          </svg>
                        </i>
                      </div>
                      <input
                        placeholder="Search for restaurant, cuisine or a dish"
                        className="sc-hSmEHG iwuCpN"
                        value=""
                      />
                      <div className="sc-fyjYeE dMUNKY"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li tabindex="0" className="sc-3o0n99-4 kAUthO">
                <a src="" className="sc-3o0n99-5 jqszCs">
                  Log in
                </a>
              </li>
              <li tabindex="0" className="sc-3o0n99-4 kAUthO">
                <a src="" className="sc-3o0n99-5 jqszCs">
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div class="sc-1mo3ldo-0 fihUGr">
        <div class="sc-iRGnHV eRYAXk">
          <div aria-label="Breadcrumb" class="sc-ukj373-1 imaLvs">
            <a
              href="https://www.zomato.com"
              tabindex="0"
              title="Home"
              class="sc-ks3f96-0 dlAMFr sc-ukj373-3 jbMQQg"
              target="_self"
              role="link"
              color="#EF4F5F"
            >
              <span
                tabindex="-1"
                title="Home"
                target="_self"
                role="link"
                color="#EF4F5F"
                class="sc-ks3f96-1 gETRUR"
              >
                Home<div class="sc-ukj373-0 epCaSO">/</div>
              </span>
            </a>
            <a
              href="https://www.zomato.com/india"
              tabindex="0"
              title="India"
              class="sc-ks3f96-0 dlAMFr sc-ukj373-3 jbMQQg"
              target="_self"
              role="link"
              color="#EF4F5F"
            >
              <span
                tabindex="-1"
                title="India"
                target="_self"
                role="link"
                color="#EF4F5F"
                class="sc-ks3f96-1 gETRUR"
              >
                India<div class="sc-ukj373-0 epCaSO">/</div>
              </span>
            </a>
            <a
              href="https://www.zomato.com/chennai/restaurants"
              tabindex="0"
              title="Chennai"
              class="sc-ks3f96-0 dlAMFr sc-ukj373-3 jbMQQg"
              target="_self"
              role="link"
              color="#EF4F5F"
            >
              <span
                tabindex="-1"
                title="Chennai"
                target="_self"
                role="link"
                color="#EF4F5F"
                class="sc-ks3f96-1 gETRUR"
              >
                Chennai<div class="sc-ukj373-0 epCaSO">/</div>
              </span>
            </a>
            <h1 class="sc-7kepeu-0 sc-fPCuyW jwgGpN">
              <a
                href=""
                tabindex="0"
                title="Ekkaduthangal Restaurants"
                class="sc-ks3f96-0 dlAMFr sc-ukj373-3 jbMQQg"
                target="_self"
                role="link"
                color="#EF4F5F"
              >
                <span
                  tabindex="-1"
                  title="Ekkaduthangal Restaurants"
                  target="_self"
                  role="link"
                  color="#EF4F5F"
                  class="sc-ks3f96-1 gETRUR"
                >
                  Ekkaduthangal Restaurants
                  <div class="sc-ukj373-0 epCaSO">/</div>
                </span>
              </a>
            </h1>
          </div>
        </div>
      </div>
      <Header1/>
      <Header2/>
      <div class="sc-1mo3ldo-0 fihUGr"></div>
      <Header3/>
      <BottomContent/>
    </div>
  );
}
