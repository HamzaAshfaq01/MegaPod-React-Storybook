import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import "./navbar.scss";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  // console.log(path);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [location]);
  return (
    <>
      {loader && <Loader />}
      {/* <!-- Offcanvas Menu Begin --> */}
      {mobileNav && (
        <>
          <div className="relative">
            <div className="offcanvas-menu-overlay active"></div>
            <div className="offcanvas-menu-wrapper active">
              <div className="cross" onClick={() => setMobileNav(false)}>
                <p>Close</p>
              </div>
              <div className="offcanvas__search">
                <form action="#">
                  <input type="text" placeholder="Search and hit enter..." />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="offcanvas__logo">
                <Link className="link" to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div id="mobile-menu-wrap">
                <nav className=" mobile-menu">
                  <ul>
                    <li className={`${path == "/" ? "active" : ""}`}>
                      <Link className="link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className={`${path == "/about" ? "active" : ""}`}>
                      <Link className="link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className={`${path == "/episodes" ? "active" : ""}`}>
                      <Link className="link" to="/episodes">
                        Episodes
                      </Link>
                    </li>
                    <li className={`${path == "/pages" ? "active" : ""}`}>
                      <Link className="link dropdown__link" to="#">
                        Pages
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link className="link" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link className="link" to="/episodes/1">
                            Episodes
                          </Link>
                        </li>
                        <li>
                          <Link className="link" to="/blog">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link className="link" to="/blog/1">
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={`${path == "/contact" ? "active" : ""}`}>
                      <Link className="link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="offcanvas__social">
                <Link className="link" to="#">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link className="link" to="#">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link className="link" to="#">
                  <i className="fa fa-pinterest"></i>
                </Link>
                <Link className="link" to="#">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link className="link" to="#">
                  <i className="fa fa-dribbble"></i>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* <!-- Offcanvas Menu End --> */}

      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="header__logo">
                <Link className="link" to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <nav className="header__menu main-header ">
                <ul>
                  <li className={`${path == "/" ? "active" : ""}`}>
                    <Link className="link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className={`${path == "/about" ? "active" : ""}`}>
                    <Link className="link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className={`${path == "/episodes" ? "active" : ""}`}>
                    <Link className="link" to="./episodes">
                      Episodes
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="#">
                      Pages
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <Link className="link" to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="link" to="/episodes/1">
                          Episodes
                        </Link>
                      </li>
                      <li>
                        <Link className="link" to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="link" to="/blog/1">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${path == "/contact" ? "active" : ""}`}>
                    <Link className="link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4  ">
              <div className="header__right">
                <div className="header__right__search">
                  <form action="#">
                    <input type="text" placeholder="Search and hit enter..." />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className="header__right__social">
                  <Link className="link" to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link className="link" to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                  <Link className="link" to="#">
                    <i className="fa fa-pinterest"></i>
                  </Link>
                  <Link className="link" to="#">
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link className="link" to="#">
                    <i className="fa fa-dribbble"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="canvas__open">
            <i
              onClick={() => setMobileNav(!mobileNav)}
              className="fa fa-bars"
            ></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}
    </>
  );
};

export default Navbar;
