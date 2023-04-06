import "./content.css";
import SongDetail from "./songDetail";
const Content = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
          paddingBottom: "10rem",
        }}
        className="g-4 row row-cols-2 row-cols-md-3 row-cols-lg-4 song_container"
      >
        {
          <SongDetail />
        }
      </div>

    </>
  );
};
export default Content;
