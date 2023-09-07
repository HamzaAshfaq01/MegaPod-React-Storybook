import BlogdetailBreadCrumb from ".";
import "../../styles/sass/style.scss";
import blogImage from "../../assets/img/blog/blog-1.jpg";
export default {
  component: BlogdetailBreadCrumb,
  tags: ["autodocs"],
  title: "Component/BlogdetailBreadCrumb",
  parameters: {
    background: {
      default: "light",
      options: ["light", "dark"],
    },
  },
};

export const Primary = {
  args: {
    title: "Blog Title",
    Image: blogImage,
  },
};
