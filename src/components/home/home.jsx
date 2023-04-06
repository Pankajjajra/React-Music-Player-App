import Menu from "./menu/menu";
import Content from "./content/content";
import ContactUs from "./contactUs/ContactUs";
import { useLocation } from "react-router-dom";
import Hiphop from "./playList/hiphop";
import Pop from "./playList/pop";
import LikedSongs from "./playList/likedSongs";
const Home = () => {
  const location = useLocation();

  function path() {
    if (location.pathname === "/home/ContactUs") {
      return <ContactUs />;
    } else if (location.pathname === "/home/hiphop") {
      return <Hiphop />;
    } else if (location.pathname === "/home/pop") {
      return <Pop />;
    } else if (location.pathname === "/home/likedSongs") {
      return <LikedSongs />;
    } else if (location.pathname === "/home/content") {
      return <Content />
    } else {
      return <Content />;
    }
  }
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="border w-100 d-flex justify-content-between"
      >
        <div className="">
          <Menu />
        </div>
        <div style={{ overflow: "hidden" }} className="container border text-center pe-3">
          {path()}
        </div>
      </div>
    </>
  );
};

export default Home;
