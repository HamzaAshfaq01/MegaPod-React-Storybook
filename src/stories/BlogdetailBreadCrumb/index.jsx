import React from "react";

const BlogdetailBreadCrumb = ({ title, Image }) => {
  return (
    <>
      <section
        className="blog-details-hero spad set-bg"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="blog__hero__text">
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
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogdetailBreadCrumb;
