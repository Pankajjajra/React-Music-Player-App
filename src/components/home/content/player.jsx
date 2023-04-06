import "./content.css";

import { useContext, useEffect, useRef, useState } from "react";
import {
  FaRandom,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaWindowClose,
} from "react-icons/fa";
import {
  BsFillSkipEndFill,
  BsSkipStartFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { TbRepeatOff, TbRepeatOnce } from "react-icons/tb";
import ApiContext from "../../context/ApiContext";

import Swal from "sweetalert2";

const Player = () => {
  const [repeat, setRepeat] = useState(true);
  const [random, setRandom] = useState(false);
  const [mute, setMute] = useState(false);
  const [FullImg, setFullImg] = useState(false);
  const [volume, setVolume] = useState("1");
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioTag = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const context = useContext(ApiContext);

  useEffect(() => {
    if (context.id !== "") {
      if (context.playing) {
        audioTag.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
        audioTag.current.volume = volume;
      } else {
        audioTag.current.pause();
      }
      if (mute) {
        audioTag.current.muted = true;
      } else audioTag.current.muted = false;

      const interval = setInterval(() => {
        const seconds = Math.floor(audioTag.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
      }, 1000);

      setInterval(() => {
        if (duration > 0 || duration !== undefined) {
          clearInterval(interval);

          if (audioTag.current.currentTime === audioTag.current.duration) {
            if (repeat == true) {
              repeatOnce();
              setRepeat(repeat == true ? true : false);
              setRandom(random == false ? false : true);
            } else if (random == true) {
              randomMusic();
              setRandom(random == true ? true : false);
              setRepeat(repeat == false ? false : true);
            }

            progressBar.current.value = "0";
          }
        }
      }, 1100);
    }
  });

  function prev() {
    if (context.id === "") {
      alert("Choose a song!");
    } else if (context.id === "1") {
      context.setId("12");
    } else {
      const idNum = parseInt(context.id);
      const newId = idNum - 1;
      context.setId(newId.toString());

      context.songs[(idNum - 2).toString()].LikeMusic == "true"
        ? context.setLikedMusic(true)
        : context.setLikedMusic(false);
    }
  }

  function skip() {
    if (context.id === "") {
      alert("Choose a song!");
    } else if (context.id === "12") {
      context.setId("1");
    } else {
      const idNum = parseInt(context.id);
      const newId = idNum + 1;
      context.setId(newId.toString());

      context.songs[context.id].LikeMusic == "true"
        ? context.setLikedMusic(true)
        : context.setLikedMusic(false);
    }
  }

  function randomMusic() {
    context.setLikedMusic(false);

    setRandom(random == false ? true : false);
    setRepeat(repeat == true ? false : true);
    const idNum = parseInt(context.id);
    const randomNum = Math.floor(Math.random() * 12);
    if (randomNum === 0 || randomNum === idNum) {
      const newNum = randomNum + 1;
      context.setId(newNum.toString());
    } else {
      context.setId(randomNum.toString());
    }
    context.songs[(randomNum - 1).toString()].LikeMusic == "true"
      ? context.setLikedMusic(true)
      : context.setLikedMusic(false);
  }

  function repeatOnce() {
    setRepeat(repeat == true ? false : true);
    setRandom(random == false ? true : false);
    audioTag.current.loop = true;
  }

  function changeRange() {
    audioTag.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  }

  function changeCurrentTime() {
    setCurrentTime(progressBar.current.value);
  }

  function calculateDuration(sec) {
    const minutes = Math.floor(sec / 60);
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${newMinutes}:${newSeconds}`;
  }

  const whilePlaying = () => {
    progressBar.current.value = audioTag?.current?.currentTime;
    animationRef.current = requestAnimationFrame(whilePlaying);
    changeCurrentTime();
  };

  function MusicPictureClass() {
    if (FullImg) {
      return "imgMusicPlayed fullImg";
    } else if (context.playing) {
      return "imgMusicPlayed animationImg";
    } else {
      return "imgMusicPlayed";
    }
  }

  function LikedMusic(musicId) {
    context.songs[musicId - 1].LikeMusic = "true";
    context.setSongs([...context.songs]);
    context.setLikedMusic(context.likedMusic == false ? true : false);
  }

  function disLikeMusic(musicId) {
    context.songs[musicId - 1].LikeMusic = "false";
    context.setSongs([...context.songs]);
    context.setLikedMusic(context.likedMusic == false ? true : false);
  }
  return (
    <>
      <section className="player_container">
        <div className="controls">
          <div className="button_controls">
            <button onClick={prev}>
              <BsSkipStartFill />
            </button>
            <button
              onClick={() =>
                context.setPlaying(context.playing == true ? false : true)
              }
            >
              {context.playing == false ? <FaPlay /> : <FaPause />}
            </button>
            <button onClick={skip}>
              <BsFillSkipEndFill />
            </button>
            <button
              className={random ? "activeRandom" : ""}
              onClick={randomMusic}
            >
              <FaRandom />
            </button>
            <button
              className={repeat ? "activeRandom" : ""}
              onClick={repeatOnce}
            >
              {repeat ? <TbRepeatOnce /> : <TbRepeatOff />}
            </button>
          </div>

          <div className="progressBar">
            <span className="PcurrentTime">
              {calculateDuration(currentTime)}
            </span>
            &nbsp;
            <input
              type="range"
              className="currentProgress"
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
            &nbsp;
            <span className="Pduration">{calculateDuration(duration)}</span>
            <div className="volumeMusic">
              <button onClick={() => setMute(mute == false ? true : false)}>
                {mute ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <div className="rangeBox">
                <input
                  type="range"
                  step="0.01"
                  min="0"
                  max="1"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {context.songs.map((s) =>
          context.id === s.musicId ? (
            <div className="containerDetailMusic" key={s.musicId}>
              <>
                <button
                  className={FullImg ? "closeFullImg" : ""}
                  onClick={() => setFullImg(false)}
                >
                  {FullImg ? <FaWindowClose /> : ""}
                </button>
                <div className={MusicPictureClass()}>
                  <img src={s.cover} onClick={() => setFullImg(true)} />

                  <div
                    className={
                      FullImg
                        ? "showFullDetail_enable"
                        : "showFullDetail_disable"
                    }
                  >
                    <img src={s.cover} onClick={() => setFullImg(true)} />
                    <span>{s.singer}</span>
                    <span>{s.song_name}</span>
                  </div>
                </div>
                <div className="detailMusicPlayed">
                  <span>{s.singer}</span>
                  <span>{s.song_name}</span>
                  <audio src={s.musicSrc} ref={audioTag} />
                </div>
                <span
                  className="heart"
                  onClick={() =>
                    context.likedMusic == false
                      ? LikedMusic(s.musicId)
                      : disLikeMusic(s.musicId)
                  }
                >
                  {context.likedMusic == true ? <BsHeartFill /> : <BsHeart />}
                </span>
              </>
            </div>
          ) : (
            ""
          )
        )}
      </section>
    </>
  );
};

export default Player;
