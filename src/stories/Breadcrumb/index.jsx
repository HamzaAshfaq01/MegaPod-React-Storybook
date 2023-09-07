import React from "react";
import breadcrumbBg from "../../assets/img/breadcrumb-bg.jpg";
import { Link } from "react-router-dom";
const Breadcrumb = ({ pageName }) => {
  return (
    <>
      <section
        className="breadcrumb-option normal-breadcrumb spad set-bg"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>{pageName}</h2>
                <div className="breadcrumb__links">
                  <a to="/">
                    <i className="fa fa-home"></i> Home
                  </a>
                  <span>{pageName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
