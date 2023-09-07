import Navbar from ".";
import "../../styles/sass/style.scss";
export default {
  component: Navbar,
  tags: ["autodocs"],
  title: "Component/Navbar",
  parameters: {
    background: {
      default: "light",
      options: ["light", "dark"],
    },
  },
};

export const Primary = {};
