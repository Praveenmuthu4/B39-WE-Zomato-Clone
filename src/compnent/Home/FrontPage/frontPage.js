import React from "react";
import Navbar from "../NavBar/index";
import "./frontPage.css";
import MobilePage from "../MobileApp/MobilePage";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Explore from "../explore/explore";

export default function FrontPage() {
  const navigate = useNavigate();
  const handleLocation = () => {
    navigate("/OnlinePage");
  };
  const navigate2 = useNavigate();
  const handleLocation2 = () => {
    navigate2("/OnlinePage");
  };
  const navigate3 = useNavigate();
  const handleLocation3 = () => {
    navigate3("/OnlinePage");
  };
  const navigate4 = useNavigate();
  const handleLocation4 = () => {
    navigate4("/OnlinePage");
  };

  return (
    <>
      <Navbar />
      <div className=".top-container">
        <div className="top-container-content">
          <div
            class="containerP"
            onClick={() => {
              handleLocation();
            }}
          >
            <img
              className="icon1"
              src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?fit=around|402:360&crop=402:360;*,*"
              alt=""
            />
            <div class="tag">Order Online</div>
          </div>
          <div
            class="containerP"
            onClick={() => {
              handleLocation2();
            }}
          >
            <img
              className="icon1"
              src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?fit=around|402:360&crop=402:360;*,*"
              alt=""
            />
            <div class="tag">Dining Out</div>
          </div>
          <div
            class="containerP"
            onClick={() => {
              handleLocation3();
            }}
          >
            <img
              className="icon1"
              src="https://b.zmtcdn.com/webFrontend/7c5da5fa471e5e5f26745709f60498a71647365004.jpeg?fit=around|402:360&crop=402:360;*,*"
              alt=""
            />
            <div class="tag">Pro and Pro Plus</div>
          </div>
          <div
            class="containerP"
            onClick={() => {
              handleLocation4();
            }}
          >
            <img
              className="icon1"
              src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?fit=around|402:360&crop=402:360;*,*"
              alt=""
            />
            <div class="tag">Nightlife and Clubs</div>
          </div>
        </div>
        <div className="middle-container">
          <div className="middle-container-header">
            <h2 className="h2">Collections</h2>
            <div className="middle-container-content">
              <h6 className="h6">
                Explore curated lists of top restaurants, cafes, pubs, and bars
                in Chennai, based on trends
              </h6>
              <span className="middle-container-allCollection">
                All collections in Chennai
              </span>
            </div>
          </div>
          <div className="middle-card-container">
            <div className="card-1">
              <section className="card-section">
                <div className="card-image">
                  <img
                    className="icon11"
                    src="https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160631.png?output-format=webp"
                    alt=""
                  />
                </div>
                <section className="whole-bottom-card">
                  <section class="card-title">
                    <p className="card-title-content">
                      10 Thrilling Live Cricket Screenings
                    </p>
                    <div className="card-places">
                      <h6 class="card-places-content">10 Places</h6>
                    </div>
                  </section>
                </section>
              </section>
            </div>
            <div className="card-2">
              <section className="card-section">
                <div className="card-image">
                  <img
                    className="icon11"
                    src="https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675232834.jpg?output-format=webp"
                    alt=""
                  />
                </div>
                <section className="whole-bottom-card">
                  <section class="card-title">
                    <p className="card-title-content">18 Best Bars & Pubs</p>

                    <div class="card-places">
                      <h6 className="card-places-content">17 Places</h6>
                    </div>
                  </section>
                </section>
              </section>
            </div>
            <div className="card-3">
              <section className="card-section">
                <div className="card-image">
                  <img
                    className="icon11"
                    src="https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675233193.jpg?output-format=webp"
                    alt=""
                  />
                </div>
                <section className="whole-bottom-card">
                  <section class="card-title">
                    <p className="card-title-content">
                      16 Must-Visit Legendary Places
                    </p>

                    <div class="card-places">
                      <h6 className="card-places-content">16 Places</h6>
                    </div>
                  </section>
                </section>
              </section>
            </div>
            <div className="card-4">
              <section className="card-section">
                <div className="card-image">
                  <img
                    className="icon11"
                    src="https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675231466.jpg?output-format=webp"
                    alt=""
                  />
                </div>
                <section className="whole-bottom-card">
                  <section class="card-title">
                    <p className="card-title-content">9 Great Buffets</p>

                    <div class="card-places">
                      <h6 className="card-places-content">6 Places</h6>
                    </div>
                  </section>
                </section>
              </section>
            </div>
          </div>
        </div>
        <div className="pLocation">
          <div className="BSS">Popular localities in and around Chennai</div>
        </div>
        <div className="Lol">
          <div className="LolD">
            {" "}
            <p> T.Nagar (304 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Nungambakam (261 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Velachery (411 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Adyar (178 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Anna Nagar East (291 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Thuraipakkam (220 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Mylapore (156 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p>Alwarpet (119 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p>see more</p>
          </div>
        </div>

        <div className="PMob">
          <MobilePage />
        </div>
        <div className="KM">
          <Explore />
        </div>
        <div className="Ku">
          <Footer />
        </div>
      </div>
    </>
  );
}
