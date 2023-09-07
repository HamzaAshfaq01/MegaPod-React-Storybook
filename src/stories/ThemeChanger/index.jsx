import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../utils/store/slices/theme.slice";
import { changeFont, textSlice } from "../../utils/store/slices/textSlice";
const ThemeChanger = () => {
  const [isChecked, setIsChecked] = useState("light");
  const [activeButton, setActiveButton] = useState(1);
  const [open, setIsopen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <div className="relative">
        <div className={`style-switcher ${open ? "" : "close"}`}>
          <div
            className="toggle-style-switcher"
            onClick={() => setIsopen(!open)}
          >
            <i className="fa fa-cog"></i>
          </div>
          <h5 className="text-sm">Style Switcher</h5>

          <h6 className="h6 ">Body Skin</h6>
          <label className="mx-1">
            <input
              type="radio"
              name="body-style"
              className="body-skin mx-1"
              value="light"
              onChange={() => {
                dispatch(changeTheme(true));
                setIsChecked("light");
              }}
              checked={isChecked === "light"}
            />
            Light
          </label>
          <label className="mx-1">
            <input
              type="radio"
              name="body-style"
              className="body-skin mx-1"
              value={isChecked === "dark"}
              onChange={() => {
                setIsChecked("dark");
                dispatch(changeTheme(false));
              }}
            />
            Dark
          </label>
          <h6 className="h6 my-1">Font Size</h6>
          <div
            className="btn-group my-1"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              onClick={() => {
                setActiveButton(1);
                dispatch(changeFont("standard"));
              }}
              className={`btn theme-buttons m-0 ${activeButton === 1 ? 'active' : ''}`}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveButton(2);
                dispatch(changeFont("medium"));
              }}
              className={`btn theme-buttons m-0 ${activeButton === 2 ? 'active' : ''}`}
            >
              Medium
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveButton(3);
                dispatch(changeFont("large"));
              }}
              className={`btn theme-buttons m-0 ${activeButton === 3 ? 'active' : ''}`}
            >
              Large
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeChanger;
