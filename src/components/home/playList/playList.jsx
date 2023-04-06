import { Link } from "react-router-dom";
import ApiContext from "../../context/ApiContext";
import { useContext } from "react";
const PlayList = () => {
  const context = useContext(ApiContext)
  return (
    <>
      <div className="playlist d-flex justify-content-evenly text-center">
        <div className="playlistGif"></div>
        <Link className="PlayListItem" to="/hiphop">{context.t("menuItem6")}</Link>
        <Link className="PlayListItem" to="/pop">{context.t("menuItem7")}</Link>
        <Link className="PlayListItem" to="/likedSongs">{context.t("menuItem4")}</Link>
      </div>
    </>
  );
};

export default PlayList;
