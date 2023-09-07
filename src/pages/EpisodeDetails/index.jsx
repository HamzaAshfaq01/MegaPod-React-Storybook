import React, { useEffect } from "react";
import Eps1 from "../../assets/img/episodes-single/eps-1.jpg";
import Eps2 from "../../assets/img/episodes-single/eps-2.jpg";
import Eps3 from "../../assets/img/episodes-single/eps-3.jpg";
import kyle from "../../assets/img/hero/hero-track.jpg";
import breadcrumbBg from "../../assets/img/breadcrumb-bg.jpg";
import $ from "jquery";
import initSinglePlayer from "../../assets/js/jplayerInit";
const EpisodeDetails = () => {
  useEffect(() => {
    initSinglePlayer();
  }, []);
  return (
    <>
      <section
        className="breadcrumb-option spad set-bg"
        style={{
          background: `url(${breadcrumbBg})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text episodes__breadcrumb__text">
                <ul>
                  <li>
                    <span className="icon_calendar"></span> 7 Jun 2019{" "}
                  </li>
                  <li>
                    <span className="icon_profile"></span> by John Smith
                  </li>
                  <li>
                    <span className="icon_tags_alt"></span> Radio, Musican, Camp
                  </li>
                </ul>
                <h2>Episodes22: Low Cost Advertising</h2>
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
                      <div className="player_controls_box">
                        <button
                          className="jp-play player_button"
                          tabIndex="0"
                        ></button>
                      </div>

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
      <section className="episodes-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="episodes__details__content">
                <div className="episodes__details__text">
                  <p>
                    About 64% of all on-line teens say that do things online
                    that they wouldn’t want their parents to know about. 11% of
                    all adult internet users visit dating websites and spend
                    their time in chatrooms. Some of the classify their behavior
                    as “cyber affair” More then 60% of employees use company PC
                    for the personal needs during their work hours as long as 80
                    minutes per day. Do the math.
                  </p>
                  <p>
                    It’s an essential time and money waste That’s why today the
                    question of controlling the internet usage is on the rise.
                    The best way to verify the proper usage of your PC is to use
                    the software known as monitoring, spy or surveillance
                    software, developed to record user’s activities on a
                    computer. Such software can be easily purchased and
                    downloaded from vendor’s websites. But sometimes the word
                    “spy” appeals to our ethical issues. Can such software be
                    classified as spyware?
                  </p>
                  <h4>Microsoft Patch Management For Home Users</h4>
                  <p>
                    As soon as we ask this question we might have the reason to
                    use spy software. And, first of all we should ask ourselves
                    what do we need it for: to protect or to attack. If we have
                    good intentions, all means are good. The thing is that any
                    tool can be used for very different purposes. Imagine what
                    can be done with bread knife other then slicing bread for
                    family dinner. We shouldn’t be afraid of a weapon we should
                    be afraid of a man carrying it. MG WAY CORP launched its
                    pilot version of computer monitoring software MG-Shadow last
                    year. Though there is a big number of monitoring programs on
                    the market, MG-Shadow can be easily classified as one of the
                    fastest, stable and very easy to use programs. And coming on
                    the market recently it has already gained its popularity.
                    MG-Shadow’s features that highlight it from the crowd of
                    competitors are:{" "}
                  </p>
                  <ul>
                    <li>V7 Digital Photo Printing</li>
                    <li>5 Reasons To Choose A Notebook Over A Computer</li>
                    <li>Sony Laptops Are Still Part Of The Sony Family</li>
                    <li>Help Finding Information Online</li>
                  </ul>
                </div>
                <div className="episodes__details__pic">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <img src={Eps1} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <img src={Eps2} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <img src={Eps3} alt="" />
                    </div>
                  </div>
                </div>
                <div className="episodes__details__desc">
                  <p>
                    If you are looking at blank cassettes on the web, you may be
                    very confused at the difference in price. You may see some
                    for as low as $.17 each. You may be saying to yourself,
                    “Wow, what a deal!”. But be careful, check out the quality
                    before you make your purchase. Make sure the tape will fit
                    your needs.
                  </p>
                </div>
                <div className="episodes__details__btns">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <a href="#" className="episodes__details__btns__item">
                        <p>
                          <span className="arrow_left"></span> Previous Pod
                        </p>
                        <h5>Episode 02: WordPress Version</h5>
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <a
                        href="#"
                        className="episodes__details__btns__item episodes__details__btns__item--next"
                      >
                        <p>
                          Next Pod <span className="arrow_right"></span>
                        </p>
                        <h5>Episode 02: Help Finding Information</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="episodes__details__form">
                  <h4>Leave A Reply</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Email Address" />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Your Comment"></textarea>
                        <button type="submit" className="site-btn">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar">
                <div className="sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="sidebar__categories">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right"></i>{" "}
                        Entrepreneurship
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right"></i> Media
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right"></i> Tech
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right"></i> Tutorials
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right"></i> Business
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right"></i>{" "}
                        Entertainment
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar__recent">
                  <h4>Recent Posts</h4>
                  <a href="#" className="sidebar__recent__item">
                    <h6>Episode 02: How To Boost Your Traffic Of Your Blog</h6>
                    <p>
                      <span className="icon_calendar"></span> 03 Sep 2020
                    </p>
                  </a>
                  <a href="#" className="sidebar__recent__item">
                    <h6>
                      Episode 02: Using Banner Stands To Increase Trade Show
                      Traffic
                    </h6>
                    <p>
                      <span className="icon_calendar"></span> 03 Sep 2020
                    </p>
                  </a>
                  <a href="#" className="sidebar__recent__item">
                    <h6>
                      Episode 02: What Is The Big R For Marketing Your Business
                    </h6>
                    <p>
                      <span className="icon_calendar"></span> 03 Sep 2020
                    </p>
                  </a>
                  <a href="#" className="sidebar__recent__item">
                    <h6>
                      Episode 02: Enhance Your Brand Potential With Giant
                      Advertising
                    </h6>
                    <p>
                      <span className="icon_calendar"></span> 03 Sep 2020
                    </p>
                  </a>
                </div>
                <div
                  className="sidebar__banner set-bg"
                  data-setbg="img/episodes-single/sidebar-banner.jpg"
                >
                  <span>THE BEST Theme</span>
                  <h2>Podcast</h2>
                </div>
                <div className="sidebar__tags">
                  <h4>Popular Tags</h4>
                  <a href="#">Episodes</a>
                  <a href="#">Ideas</a>
                  <a href="#">Podcasts</a>
                  <a href="#">Video</a>
                  <a href="#">Creative</a>
                  <a href="#">Unique</a>
                  <a href="#">Audio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EpisodeDetails;
