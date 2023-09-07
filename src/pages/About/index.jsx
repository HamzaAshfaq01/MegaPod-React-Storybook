import React from "react";
import { CTA, Breadcrumb, AboutSection, Teams } from "../../stories";
import CTAbg from "../../assets/img/call-about-bg.jpg";
const About = () => {
  return (
    <>
      <Breadcrumb pageName={"About"} />
      <AboutSection />
      <CTA bgImage={CTAbg} />
      <Teams />
    </>
  );
};

export default About;
