import { useState, useEffect } from "react";
import { FcHome, FcAbout, FcDisplay, } from "react-icons/fc";
import { GiHeartBeats } from "react-icons/gi"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ApiContext from "../../context/ApiContext";
const MobileMenu = () => {
  const context = useContext(ApiContext);
  const [active, setActive] = useState(1);
  // useEffect(() => {
  //   return () => {
  //     window.addEventListener("resize", () => {
  //       if (window.innerWidth > 800) {
  //         window.location.replace("/");
  //       } else if (window.innerWidth < 800) {
  //         window.location.replace('/content')
  //       }
  //     });
  //   };
  // });
  return (
    <>
      <nav id="mobileMenu">
        <ul className="p-2 mb-0 w-100 d-flex justify-content-evenly align-items-center">
          <li>
            <Link
              to="/content"
              onClick={() => setActive(1)}
              className={active === 1 ? "nav-item active" : "nav-item opacity"}
            >
              <FcHome className="icon" />
              <h6>{context.t("menuItem2")}</h6>
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              onClick={() => setActive(3)}
              className={active === 3 ? "nav-item active" : "nav-item opacity"}
            >
              <FcAbout className="icon" />
              <h6>{context.t("menuItem3")}</h6>
            </Link>
          </li>
          <li>
            <Link
              to="/likedSongs"
              onClick={() => setActive(5)}
              className={active === 5 ? "nav-item active" : "nav-item opacity"}
            >
              <GiHeartBeats className="icon text-danger" />
              <h6>{context.t("menuItem4")}</h6>
            </Link>
          </li>
          <li>
            <Link
              to="/playlist"
              onClick={() => setActive(4)}
              className={active === 4 ? "nav-item active" : "nav-item opacity"}
            >
              <FcDisplay className="icon" />
              <h6>{context.t("menuItem5")}</h6>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MobileMenu;
