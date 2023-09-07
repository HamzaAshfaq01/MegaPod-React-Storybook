import React from "react";
import kyle from "../../assets/img/hero/hero-track.jpg";
import BreadcrumbBg from "../../assets/img/breadcrumb-bg.jpg";
import { Breadcrumb, Podcast } from "../../stories";
const Episodes = () => {
  return (
    <>
      <section
        className="breadcrumb-option spad set-bg"
        style={{
          backgroundImage: `url(${BreadcrumbBg})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Episodes</h2>
                <div className="breadcrumb__links">
                  <a href="#">
                    <i className="fa fa-home"></i> Home
                  </a>
                  <span>Podcasts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single__track">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single__track__item">
                  <div className="single__track__item__pic">
                    <img src={kyle} alt="" />
                  </div>
                  <div className="single__track__item__text">
                    <h5>Understanding Operating</h5>
                    <span>Kyle Hawkins</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="single__track__option">
                  <div
                    className="jp-jplayer jplayer"
                    data-ancestor=".jp_container"
                    data-url="https://hamzaashfaq01.github.io/MegaPod/music-files//2.mp3"
                  ></div>
                  <div
                    className="jp-audio jp_container"
                    role="application"
                    aria-label="media player"
                  >
                    <div className="jp-gui jp-interface">
                      {/* <!-- Player Controls --> */}
                      <div className="player_controls_box">
                        <button
                          className="jp-play player_button"
                          tabIndex="0"
                        ></button>
                      </div>
                      {/* <!-- Progress Bar --> */}
                      <div className="player_bars">
                        <div className="jp-progress">
                          <div className="jp-seek-bar">
                            <div>
                              <div className="jp-play-bar">
                                <div
                                  className="jp-current-time"
                                  role="timer"
                                  aria-label="time"
                                >
                                  0:00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="jp-duration ml-auto"
                          role="timer"
                          aria-label="duration"
                        >
                          00:00
                        </div>
                      </div>
                      {/* <!-- Volume Controls --> */}
                      <div className="jp-volume-controls">
                        <button className="jp-mute" tabIndex="0">
                          <span className="icon_volume-high"></span>
                        </button>
                        <div className="jp-volume-bar">
                          <div
                            className="jp-volume-bar-value"
                            style={{ width: 0 }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="jp-btns">
                      <a href="#">
                        <i className="social_share"></i> Share
                      </a>
                      <a href="#">
                        <i className="fa fa-download"></i> Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Podcast />
      <div className="row">
        <div className="col-lg-12  text-center" style={{ marginBottom: 100 }}>
          <div className="load__more">
            <a href="#">Load More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
