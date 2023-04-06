import { FcSearch } from "react-icons/fc";

import ApiContext from "../context/ApiContext";
import { useContext } from "react";

import "./navbar.css";
const Navbar = () => {
  const context = useContext(ApiContext);

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    context.i18n.changeLanguage(languageValue);

    if (languageValue === "fa") {
      document.body.style.direction = "rtl";
      document.body.classList.add("rtlStyle");
    } else if (languageValue === "en") {
      document.body.style.direction = "ltr";
      document.body.classList.remove("rtlStyle");
    }
  };

  function changeSearchValue(e) {
    const input = e.currentTarget;
    context.setSearchValue(input.value);
  }
  return (
    <>
      <nav className="navbar ">
        <ul className="w-100 d-flex align-items-center justify-content-between">
          <li>
            <h2 style={{ fontFamily: "central_bold" }} className="mx-3">
              Music
            </h2>
          </li>
          <li className="search_box">
            <FcSearch />
            <input
              placeholder="search"
              onChange={changeSearchValue}
              value={context.searchValue}
            />
          </li>

          <div className="d-flex">
            {/* toggle Language */}
            <select
              className="mx-lg-3 toggleLanguage"
              onChange={changeLanguageHandler}
            >
              <option value="en">English </option>
              <option value="fa">Persian </option>
            </select>
            {/* toggle Language */}

            {/* toggle Theme */}
            <div className="toggleTheme">
              <input
                id="change"
                type="checkbox"
                onChange={context.toggleTheme}
                // checked={context.theme === "dark"}
              />
              <label htmlFor="change"></label>
            </div>
            {/* toggle Theme */}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
