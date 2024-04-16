import { useEffect, useState } from "react";
import "./App.css";
import { fetchImage } from "../../image-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getImages() {
  //     setIsloading(true);
  //     try {
  //       const data = await fetchImage("dog");
  //       setImages(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }
  //   getImages();
  // }, []);

  const handleSearch = async (newQuery) => {
    try {
      setIsloading(true);
      const data = await fetchImage(newQuery);
      setImages(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <div>
      <h1>Gallery</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p>Ooops! Error</p>}
      {isloading && <p>Please wait...</p>}
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}
