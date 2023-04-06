import {
  FcHome,
  FcAbout,
  FcLibrary,
  FcDisplay,
  FcElectricity,
  FcMusic,
} from "react-icons/fc";
import { GiHeartBeats } from "react-icons/gi"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ApiContext from "../../context/ApiContext";
import "./menu.css";

const Menu = () => {
  const context = useContext(ApiContext);
  return (
    <>
      {/* Desktop */}
      <nav id="desktopMenu">
        <ul className="p-1 d-flex flex-column">
          <li style={{ paddingLeft: "15rem" }}></li>
          <li>
            <div className="d-flex align-items-baseline">
              <FcLibrary className="ms-2 me-2" />
              <h4 style={{ fontFamily: "central_bold" }}>
                {context.t("menuItem1")}
              </h4>
            </div>
          </li>
          <li className="border-top ">
            <Link to="/" className="desktop-nav-item mt-3">
              <FcHome className="ms-2 me-2" />
              <h6>{context.t("menuItem2")}</h6>
            </Link>
          </li>

          <li className="my-3">
            <Link to="/home/ContactUs" className="desktop-nav-item mt-3">
              <FcAbout className="ms-2 me-2" />
              <h6>{context.t("menuItem3")}</h6>
            </Link>
          </li>
          <li>
            <Link to="/home/likedSongs" className="desktop-nav-item mt-3">
              <GiHeartBeats className="text-danger ms-2 me-2" />
              <h6>{context.t('menuItem4')}</h6>
            </Link>
          </li>
          <li className="mt-3 py-1 border-top border-bottom">
            <h4 style={{ fontFamily: "central_bold" }}>
              <FcDisplay className="ms-2 me-2" />
              {context.t("menuItem5")}
            </h4>
          </li>
          <li>
            <div className="mt-3"></div>
            <Link to="/home/hiphop" className="desktop-nav-item mt-3">
              <FcMusic className="ms-2 me-2" />
              <h6>{context.t("menuItem6")}</h6>
            </Link>
          </li>
          <li className="my-3">
            <Link to="/home/pop" className="desktop-nav-item mt-3">
              <FcElectricity className="ms-2 me-2" />
              <h6>{context.t("menuItem7")}</h6>
            </Link>
          </li>
        </ul>
      </nav>
      {/* Desktop */}
    </>
  );
};
export default Menu;
