import "./App.scss";
import "bootstrap/scss/bootstrap.scss";
import {
  Home,
  About,
  Contact,
  Blog,
  Episodes,
  EpisodeDetails,
  BlogDetails,
  NoPage,
} from "../pages";
import { Navbar, Footer, ThemeChanger } from "../stories";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const textTheme = useSelector((state) => state.text.value);
  useEffect(() => {
    console.log("color theme ", textTheme);
  }, [textTheme]);
  return (
    <>
      <div
        className={`${theme ? "" : "dark"} ${
          textTheme === "medium" ? "text-medium" : ""
        } ${textTheme === "large" && "text-large"}`}
      >
        <Navbar />
        <ThemeChanger />
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<EpisodeDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
