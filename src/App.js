import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar-section/NavBar.js";
import Home from "./components/Home.js";
import ImageDetails from "./components/ImageDetails/ImageDetails.js";
import "./App.css";

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
        setGalleryData(jsonData.photos);
        console.log(jsonData);
      });
  }, [query]);

  const submitHandler = (value) => {
    setQuery((prevValue) => value);
    console.log(query);
  };
  return (
    <Router>
      <div className="App">
        <NavBar onSubmit={submitHandler} />
        <Routes>
          <Route exact path="/" element={<Home galleryData={galleryData} />} />
          <Route exact path="/:id" element={<ImageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
