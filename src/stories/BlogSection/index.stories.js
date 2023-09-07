import BlogSection from ".";
import "bootstrap/scss/bootstrap.scss";
// import "../../styles/css/magnific-popup.css";
import "../../styles/css/font-awesome.min.css";
import "../../styles/css/elegant-icons.css";
// import "../../styles/sass/style.scss";
// import sectionImage from "../../assets/img/about-pic.jpg";

export default {
  component: BlogSection,
  tags: ["autodocs"],
  title: "Component/BlogSection",
  layout: "centered",
  parameters: {
    // layout: "centered",
    parameters: {
      background: {
        default: "dark",
        options: ["light", "dark"],
      },
    },
  },
};

export const Primary = {};
