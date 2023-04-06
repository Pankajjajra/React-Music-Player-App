import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import MobileMenu from "./components/home/menu/MobileMenu";
import NotFound from "./components/NotFound/NotFound";
import ContactUs from "./components/home/contactUs/ContactUs";
import Content from "./components/home/content/content";
import PlayList from "./components/home/playList/playList";
import Hiphop from "./components/home/playList/hiphop";
import Pop from "./components/home/playList/pop";
import LikedSongs from "./components/home/playList/likedSongs";

import { useTranslation } from "react-i18next";
import "./i18n";

import ApiContext from "./components/context/ApiContext";
import Player from "./components/home/content/player";

function App() {
  const [id, setId] = useState("1");
  const [playing, setPlaying] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [likedMusic, setLikedMusic] = useState(false);
  const { t, i18n } = useTranslation();

  const [Theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [songs, setSongs] = useState([
    {
      cover: require("./assets/picture/Spain.jfif"),
      song_name: "spain",
      singer: "Jassa Dhillon",
      musicSrc: require("./assets/musics/Spain.mp3"),
      musicId: "1",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/Afterhours.jfif"),
      song_name: "Afterhours",
      singer: "BIR",
      musicSrc: require("./assets/musics/Afterhours.mp3"),
      musicId: "2",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/Daku.jfif"),
      song_name: "Daku",
      singer: "Inderpal Moga",
      musicSrc: require("./assets/musics/Daku.mp3"),
      musicId: "3",
      genre: "pop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/youngBoy.jfif"),
      song_name: "never broke",
      singer: "youngBoy",
      musicSrc: require("./assets/musics/YoungboyNeverBrokeAgain.mp3"),
      musicId: "4",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/noTimeToDie.jfif"),
      song_name: "no time to die",
      singer: "billie Eilish",
      musicSrc: require("./assets/musics/billie_Eilish_noTimeToDie.mp3"),
      musicId: "5",
      genre: "pop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/glassAnimalsHeatWaves.jfif"),
      song_name: "glass Animals",
      singer: "Heat Waves",
      musicSrc: require("./assets/musics/Glass_Animals_Heat_Waves.mp3"),
      musicId: "6",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/numbKhalid.jfif"),
      song_name: "numb",
      singer: "Khalid & marshmello",
      musicSrc: require("./assets/musics/Marshmello-Khalid-Numb.mp3"),
      musicId: "7",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/NFWakeUp.jfif"),
      song_name: "WakeUp",
      singer: "NF",
      musicSrc: require("./assets/musics/WakeUp.mp3"),
      musicId: "8",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/xxxTentasion.jfif"),
      song_name: "why am i so in love",
      singer: "xxxTentasion",
      musicSrc: require("./assets/musics/XXXTENTACION.mp3"),
      musicId: "9",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/billieeilishLovely.jfif"),
      song_name: "lovely",
      singer: "Billie Eilish & khalid",
      musicSrc: require("./assets/musics/Billie-Eilish-Khalid-lovely-128.mp3"),
      musicId: "10",
      genre: "pop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/tomorrow-young-chris.jfif"),
      song_name: "Tomorrow",
      singer: "young Chris",
      musicSrc: require("./assets/musics/youngChrisTomorrow.mp3"),
      musicId: "11",
      genre: "pop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/feelingGood.jfif"),
      song_name: "Feeling-Good",
      singer: "Michael Buble",
      musicSrc: require("./assets/musics/Michael-Buble-Feeling-Good.mp3"),
      musicId: "12",
      genre: "pop",
      LikeMusic: "false",
    },
  ]);

  return (
    <>
      <ApiContext.Provider
        value={{
          id,
          setId,
          songs,
          setSongs,
          playing,
          setPlaying,
          setLikedMusic,
          likedMusic,
          toggleTheme,
          Theme,
          t,
          i18n,
          setSearchValue,
          searchValue,
        }}
      >
        <div className="main_container" id={Theme}>
          <HashRouter>
            <Navbar />
            <MobileMenu />
            <Player />
            <Routes>
              <Route path=" " element={<Navigate to="/" />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />

              {/* desktop routes */}
              <Route path="/home/ContactUs" element={<Home />} />
              <Route path="/home/hiphop" element={<Home />} />
              <Route path="/home/pop" element={<Home />} />
              <Route path="/home/likedSongs" element={<Home />} />
              {/* desktop routes */}

              {/* mobile routes */}
              <Route path="/content" element={<Content />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/playList" element={<PlayList />} />
              <Route path="/hiphop" element={<Hiphop />} />
              <Route path="/Pop" element={<Pop />} />
              <Route path="/likedSongs" element={<LikedSongs />} />
              {/* mobile routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </div>
      </ApiContext.Provider>
    </>
  );
}

export default App;
