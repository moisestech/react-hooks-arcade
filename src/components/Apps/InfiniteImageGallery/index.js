import * as React from "react";
import "./index.css";

export default function InfiniteImageGallery() {
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
