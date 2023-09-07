import React from "react";
import podcast1 from "../../assets/img/podcast/podcast-1.jpg";
import podcast2 from "../../assets/img/podcast/podcast-2.jpg";
import podcast3 from "../../assets/img/podcast/podcast-3.jpg";
import podcast4 from "../../assets/img/podcast/podcast-4.jpg";
import $ from "jquery";
import initSinglePlayer from "../../assets/js/jplayerInit";

const Podcast = () => {
  React.useEffect(() => {
    // jPlayer Initialization
    initSinglePlayer();

    // function currentTimeAlign() {
    //   $(".jp-progress").each(function () {
    //     var jpPBarW = $(this).find(".jp-play-bar").innerWidth();
    //     if (jpPBarW > 40) {
    //       $(this).addClass("middle");
    //     } else {
    //       $(this).removeClass("middle");
    //     }
    //   });
    // }
    // setInterval(currentTimeAlign, 10);

    // $(".single_player").each(function () {
    //   var ffaction;
    //   var rwaction,
    //     rewinding,
    //     fastforward,
    //     thisItem = $(this),
    //     player = thisItem.find(".jplayer");

    //   thisItem.find(".jp-next").click(function (e) {
    //     FastforwardTrack();
    //   });

    //   thisItem.find(".jp-prev").click(function (e) {
    //     RewindTrack();
    //   });

    //   function GetPlayerProgress() {
    //     return (
    //       (thisItem.find(".jp-play-bar").width() / $(".jp-seek-bar").width()) *
    //       100
    //     );
    //   }

    //   function RewindTrack() {
    //     //Get current progress and decrement
    //     var currentProgress = GetPlayerProgress();
    //     var futureProgress = currentProgress - 5;
    //     //If it goes past the starting point - stop rewinding and pause
    //     if (futureProgress <= 0) {
    //       rewinding = false;
    //       window.clearInterval(rwaction);
    //       player.jPlayer("pause", 0);
    //     }
    //     //Continue rewinding
    //     else {
    //       player.jPlayer("playHead", parseInt(futureProgress, 10));
    //     }
    //   }

    //   function FastforwardTrack() {
    //     //Get current progress and increment
    //     var currentProgress = GetPlayerProgress();
    //     var futureProgress = currentProgress + 5;
    //     //If the percentage exceeds the max - stop fast forwarding at the end.
    //     if (futureProgress >= 100) {
    //       fastforward = false;
    //       window.clearInterval(ffaction);
    //       player.jPlayer(
    //         "playHead",
    //         parseInt($(".jp-duration").text().replace(":", ""))
    //       );
    //     } else {
    //       player.jPlayer("playHead", parseInt(futureProgress, 10));
    //     }
    //   }
    // });
  }, []);
  return (
    <>
      <section className="podcast spad">
        <div className="container">
          <div className="podcast__top">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <h2>Live & Upcoming</h2>
              </div>
              <div className="col-lg-7 col-md-7">
                <ul className="filter__controls">
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".entrepreneurship">Entrepreneurship</li>
                  <li data-filter=".media">Media</li>
                  <li data-filter=".tech">Tech</li>
                  <li data-filter=".tutorials">Tutorials</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row podcast-filter">
            <div className="col-lg-12 mix entrepreneurship">
              <div className="podcast__item">
                <div className="podcast__item__pic">
                  <img src={podcast1} alt="" />
                </div>
                <div className="podcast__item__text">
                  <a href="#" className="heart-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                  <ul>
                    <li>
                      <span className="icon_calendar"></span> 7 Jun 2019{" "}
                    </li>
                    <li>
                      <span className="icon_profile"></span> by John Smith
                    </li>
                    <li>
                      <span className="icon_tags_alt"></span> Radio, Musican,
                      Camp
                    </li>
                  </ul>
                  <h4>
                    Episode 01: 6 Powerful Tips To Creating Testimonials That
                    Sell Your
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <div className="track__option">
                    <div
                      className="jp-jplayer jplayer"
                      data-ancestor=".jp_container-1"
                      data-url={
                        "https://hamzaashfaq01.github.io/MegaPod/music-files/3.mp3"
                      }
                    ></div>
                    <div
                      className="jp-audio jp_container-1"
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
            <div className="col-lg-12 mix media">
              <div className="podcast__item">
                <div className="podcast__item__pic">
                  <img src={podcast2} alt="" />
                </div>
                <div className="podcast__item__text">
                  <a href="#" className="heart-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                  <ul>
                    <li>
                      <span className="icon_calendar"></span> 7 Jun 2019{" "}
                    </li>
                    <li>
                      <span className="icon_profile"></span> by John Smith
                    </li>
                    <li>
                      <span className="icon_tags_alt"></span> Radio, Musican,
                      Camp
                    </li>
                  </ul>
                  <h4>
                    Episode 01: 6 Powerful Tips To Creating Testimonials That
                    Sell Your
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <div className="track__option">
                    <div
                      className="jp-jplayer jplayer"
                      data-ancestor=".jp_container-2"
                      data-url="https://hamzaashfaq01.github.io/MegaPod/music-files/4.mp3"
                    ></div>
                    <div
                      className="jp-audio jp_container-2"
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
            <div className="col-lg-12 mix tech">
              <div className="podcast__item ">
                <div className="podcast__item__pic">
                  <img src={podcast3} alt="" />
                </div>
                <div className="podcast__item__text">
                  <a href="#" className="heart-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                  <ul>
                    <li>
                      <span className="icon_calendar"></span> 7 Jun 2019{" "}
                    </li>
                    <li>
                      <span className="icon_profile"></span> by John Smith
                    </li>
                    <li>
                      <span className="icon_tags_alt"></span> Radio, Musican,
                      Camp
                    </li>
                  </ul>
                  <h4>
                    Episode 01: 6 Powerful Tips To Creating Testimonials That
                    Sell Your
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <div className="track__option">
                    <div
                      className="jp-jplayer jplayer"
                      data-ancestor=".jp_container-3"
                      data-url="https://hamzaashfaq01.github.io/MegaPod/music-files/5.mp3"
                    ></div>
                    <div
                      className="jp-audio jp_container-3"
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
            <div className="col-lg-12 mix tutorials">
              <div className="podcast__item">
                <div className="podcast__item__pic">
                  <img src={podcast4} alt="" />
                </div>
                <div className="podcast__item__text">
                  <a href="#" className="heart-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                  <ul>
                    <li>
                      <span className="icon_calendar"></span> 7 Jun 2019{" "}
                    </li>
                    <li>
                      <span className="icon_profile"></span> by John Smith
                    </li>
                    <li>
                      <span className="icon_tags_alt"></span> Radio, Musican,
                      Camp
                    </li>
                  </ul>
                  <h4>
                    Episode 01: 6 Powerful Tips To Creating Testimonials That
                    Sell Your
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <div className="track__option">
                    <div
                      className="jp-jplayer jplayer"
                      data-ancestor=".jp_container-4"
                      data-url="https://hamzaashfaq01.github.io/MegaPod/music-files/6.mp3"
                    ></div>
                    <div
                      className="jp-audio jp_container-4"
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
        </div>
      </section>
    </>
  );
};

export default Podcast;
