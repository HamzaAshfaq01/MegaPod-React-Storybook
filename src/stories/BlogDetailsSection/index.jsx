import React from "react";
import blogDetail1 from "../../assets/img/blog/details/bd-item-1.jpg";
import blogDetail2 from "../../assets/img/blog/details/bd-item-2.jpg";
import comment1 from "../../assets/img/blog/details/comment-1.jpg";
import comment2 from "../../assets/img/blog/details/comment-2.jpg";
const BlogDetailsSection = () => {
  return (
    <>
      <section className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__text">
                  <p className="top-text">
                    <span className="letter-cap">l</span> Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                  </p>
                  <div className="blog__details__text__item">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                    </ul>
                  </div>
                  <div className="blog__details__text__item">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="blog__details__pic">
                  <img src="img/blog/details/blog-details.jpg" alt="" />
                </div>
                <div className="blog__details__text">
                  <p className="top-text">
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="blog__details__text__item">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="blog__details__quote">
                  <div className="icon">
                    <span className="icon_quotations"></span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                  <h6>- Katie Cruz</h6>
                </div>
                <div className="blog__details__pic__list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <img src={blogDetail1} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <img src={blogDetail2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="blog__details__desc">
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="blog__details__tags">
                  <span>Share:</span>
                  <a href="#">
                    <i className="social_facebook"></i>
                  </a>
                  <a href="#">
                    <i className="social_twitter"></i>
                  </a>
                  <a href="#">
                    <i className="social_youtube"></i>
                  </a>
                </div>
                <div className="blog__details__btns">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <a href="" className="blog__details__btns__item">
                        <p>
                          <span className="arrow_left"></span> Previous Pod
                        </p>
                        <h5>Popular Uses Of The Ianternet</h5>
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <a
                        href=""
                        className="blog__details__btns__item blog__details__btns__item--next"
                      >
                        <p>
                          Next Pod <span className="arrow_right"></span>
                        </p>
                        <h5>Help Finding Information Online</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog__details__comment">
                  <h4>12 Comment</h4>
                  <div className="blog__details__comment__item">
                    <div className="blog__details__comment__item__pic">
                      <img src={comment1} alt="" />
                    </div>
                    <div className="blog__details__comment__item__text">
                      <div className="comment__date">May 14, 2018</div>
                      <h5>Brandon Kelley</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <a href="#">Like</a>
                      <a href="#">Reply</a>
                    </div>
                  </div>
                  <div className="blog__details__comment__item blog__details__comment__item--reply">
                    <div className="blog__details__comment__item__pic">
                      <img src={comment2} alt="" />
                    </div>
                    <div className="blog__details__comment__item__text">
                      <div className="comment__date">May 14, 2018</div>
                      <h5>Brandon Kelley</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <a href="#">Like</a>
                      <a href="#">Reply</a>
                    </div>
                  </div>
                </div>
                <div className="blog__details__comment__form">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsSection;
