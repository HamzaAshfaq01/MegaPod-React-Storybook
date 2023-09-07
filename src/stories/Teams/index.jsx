import React from "react";
import team1 from "../../assets/img/team/team-1.jpg";
import team2 from "../../assets/img/team/team-2.jpg";
import team3 from "../../assets/img/team/team-3.jpg";
const Teams = () => {
  return (
    <>
      <section className="team spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Guests</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team__item">
                <img src={team2} alt="" />
                <h4>Alfred Day</h4>
                <span>PRODUCER</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team__item">
                <img src={team1} alt="" />
                <h4>Jayden White</h4>
                <span>Drummer</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team__item">
                <img src={team2} alt="" />
                <h4>Vincent Reid</h4>
                <span>Enterpreneur</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
