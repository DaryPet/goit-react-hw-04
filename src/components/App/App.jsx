// import { useState } from 'react'
import { useEffect, useSatet } from "react";
import axios from "axios";
import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get("https://api.unsplash.com/");
      // Тут будемо виконувати HTTP-запит
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
}
