import React from "react";

const CTA = ({ bgImage }) => {
  return (
    <section
      className="callto spad "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="callto__text">
              <h2>Support The Show</h2>
              <p>Enjoy listening to our podcast? Consider making a donation!</p>
              <a href="#" className="primary-btn">
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
