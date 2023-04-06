import { useContext } from "react";
import ApiContext from "../../context/ApiContext";
import { FcMusic } from "react-icons/fc";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom"
const LikedSongs = () => {
    const context = useContext(ApiContext)

    return (
        <>

            <span className="titlePlayList" >
                <h2 className="textTitlePlayList">
                    {context.t("menuItem4")}
                </h2>
                <Link to="/playList" className="backButtonPlayList">
                    <TiArrowBackOutline />
                </Link>
            </span >

            <div className="mt-2 g-4 playListContainer row row-cols-2 row-cols-md-3 row-cols-lg-4 song_container">
                {
                    context.songs.filter((val) => {
                        if (context.searchValue === "") {
                            return val
                        } else if (val.singer.toLowerCase().includes(context.searchValue.toLowerCase())) {
                            return val
                        } else if (val.song_name.toLowerCase().includes(context.searchValue.toLowerCase())) {
                            return val
                        }
                    }).map((s) => {
                        if (s.LikeMusic === "true") {
                            return (
                                <div key={s.musicId} className="col  ">
                                    <div className="box_music">
                                        <div className="overlayBox" onClick={() => context.setId(s.musicId)}>
                                            <div className="overlay">
                                                <i className="icon">
                                                    <FcMusic />
                                                </i>
                                            </div>
                                            <img alt="img" className="songPic" src={s.cover} />
                                        </div>
                                        <div className="song_text text-start ">
                                            <h6 className="song_name m-0">{s.song_name}</h6>
                                            <p className="singer text-muted">{s.singer}</p>
                                        </div>
                                    </div>
                                </div >
                            )
                        }
                    })
                }
            </div>
        </>
    );
}

export default LikedSongs;