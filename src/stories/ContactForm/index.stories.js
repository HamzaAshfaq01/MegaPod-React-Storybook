import ContactForm from ".";
import "bootstrap/scss/bootstrap.scss";
import "../../styles/css/magnific-popup.css";
import "../../styles/css/font-awesome.min.css";
import "../../styles/css/elegant-icons.css";
import "../../styles/sass/style.scss";
export default {
  component: ContactForm,
  tags: ["autodocs"],
  title: "Component/ContactForm",
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
