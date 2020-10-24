import { useEffect, useState, useCallback, useRef } from "react";
import "./index.css";
import InfiniteScroll from "react-infinite-scroll-component";

// NOTE: make sure to add your unsplash api key
// https: //unsplash.com/developers
// check webpack config for setup
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default function InfiniteImageGallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const _previousKeyRef = useRef(null);
  const _previousPage = useRef(null);

  const getPhotos = useCallback(() => {
    _previousKeyRef.current = query;

    let apiURL = `https://api.unsplash.com/photos?`;
    if (query) apiURL = `https://api.unsplash.com/search/photos?query=${query}`;

    apiURL += `&page=${page}`;
    apiURL += `&client_id=${accessKey}`;

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const imagesFromApi = data.results ?? data;

        let mounted = true;
        if (mounted) {
          //  if page is 1, then we need a whole new array of images
          if (page === 1) return setImages(imagesFromApi);

          // if page > 1, then we are adding from our infinite scroll
          setImages((images) => [...image, ...imagesFromApi]);
        }
      });

    return () => (mounted = false);
  }, [page, query]);

  useEffect(() => {
    getPhotos();
  }, [page]);

  function searchPhotos(e) {
    e.preventDefault();
    setPage(1);
    getPhotos();
  }

  // return an error if there is no access key
  if (!accessKey) {
    return (
      <a className="error" href="https://unsplash.com/documentation">
        Required: Get Your Unsplash API Key First
      </a>
    );
  }

  return (
    <div className="infinite-image-gallery app-body">
      <h1>Unplash Image Gallery</h1>

      <form onSubmit={searchPhotos}>
        <input
          type="text"
          placeholder="Search Unsplash..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          if (_previousPage.current === page) {
            setPage((page) => page + 1);
          }
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <a
              className="image"
              key={index}
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
