import React from "react";
import blog1 from "../../assets/img/blog/blog-1.jpg";
import blog2 from "../../assets/img/blog/blog-2.jpg";
import blog3 from "../../assets/img/blog/blog-3.jpg";
import blog4 from "../../assets/img/blog/blog-4.jpg";
import blog5 from "../../assets/img/blog/blog-5.jpg";

const BlogSection = () => {
  return (
    <>
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog__item__list">
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{
                      backgroundImage: `url(${blog1})`,
                    }}
                  >
                    <div className="label">Radio</div>
                  </div>
                  <div className="blog__item__text">
                    <div className="blog__date">
                      <span className="icon_calendar"></span> 17 Jun 2020
                    </div>
                    <h4>Going Wireless With Your Headphones</h4>
                    <ul>
                      <li>
                        <span className="icon_profile"></span> Joe Fylan
                      </li>
                      <li>
                        <span className="fa fa-comments-o"></span> 06 Comments
                      </li>
                    </ul>
                    <p>
                      It seems like a good place to start. You might notice
                      there’s a bit of a variety, almost as if one lifestyle
                      doesn’t fit all. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna
                    </p>
                    <a href="#">
                      Readmore{" "}
                      <span className="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{
                      backgroundImage: `url(${blog2})`,
                    }}
                  >
                    <div className="label">Radio</div>
                  </div>
                  <div className="blog__item__text">
                    <div className="blog__date">
                      <span className="icon_calendar"></span> 17 Jun 2020
                    </div>
                    <h4>Impotance Of The Custom Company Logo Design</h4>
                    <ul>
                      <li>
                        <span className="icon_profile"></span> Joe Fylan
                      </li>
                      <li>
                        <span className="fa fa-comments-o"></span> 06 Comments
                      </li>
                    </ul>
                    <p>
                      It seems like a good place to start. You might notice
                      there’s a bit of a variety, almost as if one lifestyle
                      doesn’t fit all. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna
                    </p>
                    <a href="#">
                      Readmore{" "}
                      <span className="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{
                      backgroundImage: `url(${blog3})`,
                    }}
                  >
                    <div className="label">Radio</div>
                  </div>
                  <div className="blog__item__text">
                    <div className="blog__date">
                      <span className="icon_calendar"></span> 17 Jun 2020
                    </div>
                    <h4>What Is The Big R For Marketing Your Business</h4>
                    <ul>
                      <li>
                        <span className="icon_profile"></span> Joe Fylan
                      </li>
                      <li>
                        <span className="fa fa-comments-o"></span> 06 Comments
                      </li>
                    </ul>
                    <p>
                      It seems like a good place to start. You might notice
                      there’s a bit of a variety, almost as if one lifestyle
                      doesn’t fit all. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna
                    </p>
                    <a href="#">
                      Readmore{" "}
                      <span className="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{
                      backgroundImage: `url(${blog4})`,
                    }}
                  >
                    <div className="label">Radio</div>
                  </div>
                  <div className="blog__item__text">
                    <div className="blog__date">
                      <span className="icon_calendar"></span> 17 Jun 2020
                    </div>
                    <h4>Cleaning And Organizing Your Computer</h4>
                    <ul>
                      <li>
                        <span className="icon_profile"></span> Joe Fylan
                      </li>
                      <li>
                        <span className="fa fa-comments-o"></span> 06 Comments
                      </li>
                    </ul>
                    <p>
                      It seems like a good place to start. You might notice
                      there’s a bit of a variety, almost as if one lifestyle
                      doesn’t fit all. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna
                    </p>
                    <a href="#">
                      Readmore{" "}
                      <span className="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{
                      backgroundImage: `url(${blog5})`,
                    }}
                  >
                    <div className="label">Radio</div>
                  </div>
                  <div className="blog__item__text">
                    <div className="blog__date">
                      <span className="icon_calendar"></span> 17 Jun 2020
                    </div>
                    <h4>
                      Choosing The Best Audio Player Software For Your Computer
                    </h4>
                    <ul>
                      <li>
                        <span className="icon_profile"></span> Joe Fylan
                      </li>
                      <li>
                        <span className="fa fa-comments-o"></span> 06 Comments
                      </li>
                    </ul>
                    <p>
                      It seems like a good place to start. You might notice
                      there’s a bit of a variety, almost as if one lifestyle
                      doesn’t fit all. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna
                    </p>
                    <a href="#">
                      Readmore{" "}
                      <span className="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">Next</a>
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

export default BlogSection;
