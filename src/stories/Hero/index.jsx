import React from "react";
import kyle from "../../assets/img/hero/hero-track.jpg";
import videoBg from "../../assets/img/hero/hero-video.png";
import playBtn from "../../assets/img/play.png";
import ReactAudioPlayer from "react-audio-player";
import heroTrack from "../../assets/music/1.mp3";
import { Link } from "react-router-dom";
import initSinglePlayer from "../../assets/js/jplayerInit";
const Hero = () => {
  React.useEffect(() => {
    initSinglePlayer();
  }, []);
  return (
    <>
      <section className="hero spad set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__text">
                <h5>
                  <span className="icon_calendar"></span> 10 Dec 2019
                </h5>
                <h2>Ep 05: Astronomy Binoculars A Great</h2>
                <Link to="#" className="primary-btn">
                  Subscribe with iTunes
                </Link>
                <Link to="#" className="primary-btn white-btn">
                  Subscribe with RSS
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero__pic set-bg"
                style={{
                  backgroundImage: `url(${videoBg})`,
                }}
              >
                <a
                  href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249690664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="play-btn video-popup"
                >
                  <img src={playBtn} alt="" />
                </a>
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
                    data-url="https://hamzaashfaq01.github.io/MegaPod/music-files/2.mp3"
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
    </>
  );
};

export default Hero;
