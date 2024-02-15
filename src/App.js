import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar-section/NavBar.js";
import CarouselSection from "./components/carousel-section/CarouselSection.js";
import Gallery from "./components/Gallery.js";

const API_KEY = "SOWgcitDUCAjM3KYq8RCTHtmlZ1Og8WUTzY9erxRxOprrP8a1quAsltO";

function App() {
  const [query, setQuery] = useState("people");
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((jsonData) => {
        setGalleryData(jsonData.photos)
        console.log(jsonData)
      });
  }, [query]);

  const submitHandler = (value) => {
    setQuery((prevValue) => value);
    console.log(query);
  };
  return (
    <div className="App">
      <NavBar onSubmit={submitHandler} />
      <header>
        <CarouselSection />
      </header>
      <main>
        <h2 className="main-section-heading">Choose from the pool of ocean</h2>
        <Gallery galleryData={galleryData} />
      </main>
    </div>
  );
}

export default App;
