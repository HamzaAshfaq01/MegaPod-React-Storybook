import React from "react";
import { BlogDetailsSection, BlogdetailBreadCrumb } from "../../stories";
import BlogDetailImage from "../../assets/img/blog/details/detaills-hero.jpg";

const BlogDetails = () => {
  return (
    <>
      <BlogdetailBreadCrumb
        title={"Going Wireless With Your Headphones"}
        Image={BlogDetailImage}
      />
      <BlogDetailsSection />
    </>
  );
};

export default BlogDetails;
