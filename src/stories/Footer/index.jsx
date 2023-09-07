import React from "react";

const Footer = () => {
  return (
    <footer className="footer set-bg">
      <div className="container">
        <div className="footer__subscriber">
          <div className="row">
            <div className="col-lg-5">
              <div className="footer__subscriber__text">
                <h3>Sign up for our newsletter!</h3>
                <p>Subscribe to receive info on our latest news and episodes</p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2">
              <form action="#" className="footer__subscriber__form">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="site-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <div className="footer__widget">
              <div className="footer__logo">
                <a href="#">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <p className="footer__copyright__text">
                Copyright ©
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Hamza Ashfaq
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="footer__social">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
