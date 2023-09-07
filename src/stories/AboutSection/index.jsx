import React from "react";
import AboutPic from "../../assets/img/about-pic.jpg";
const AboutSection = () => {
  return (
    <>
      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about__text">
                <span>We Are Meeapod</span>
                <h2>About Us</h2>
                <p>
                  Enjoy listening to our podcast? Consider making a donation!
                </p>
                <a href="#" className="primary-btn">
                  Make A Donation
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about__item">
                <h6>
                  This article is floated online with an aim to help you find
                  the best dvd printing solution.
                </h6>
                <p>
                  Your DVDs usually come coated with directly printable lacquer
                  films with ability to absorb ink, and the process of directly
                  printing the lacquer films on your DVDs is technically known
                  as dvd printing. Your dvd printing solution lies in – inkjet
                  dvd printing, thermal transfer dvd printing, screen dvd
                  printing, and offset dvd printing – which you may choose
                  according to need and requirement.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about__item">
                <h6>
                  This article is floated online with an aim to help you find
                  the best dvd printing solution.
                </h6>
                <p>
                  Your DVDs usually come coated with directly printable lacquer
                  films with ability to absorb ink, and the process of directly
                  printing the lacquer films on your DVDs is technically known
                  as dvd printing. Your dvd printing solution lies in – inkjet
                  dvd printing, thermal transfer dvd printing, screen dvd
                  printing, and offset dvd printing – which you may choose
                  according to need and requirement.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="about__pic">
                <img src={AboutPic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
