import { useEffect } from "react";
import "./index.css";

const accessKey = process.env.REACT_APP_UNSPLASH_ACESS_KEY;

export default function InfiniteImageGallery() {
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos?client_id=6LvmmK4yxXY2uh6T_sTSF8XBMyxWnKs3qV7yV0s2050"
    )
      .then((res) => res.json())
      .then((data) => {});
  }, []);

  // return an error if there is no access key
  if (!accessKey) {
    return <a href="https://unsplash.com/documentation" />;
  }

  return (
    <div className="infinite-image-gallery app-body">
      <h1>Unplash Image Gallery</h1>

      <form>
        <input type="text" placeholder="Search Unsplash..." />
        <button>Search</button>
      </form>

      <div className="image-grid">
        {[...Array(100)].map((_, index) => (
          <div className="image" key={index}>
            <img src="https://placekitten.com/g/1920/1080" alt="Sample" />
          </div>
        ))}
      </div>
    </div>
  );
}
