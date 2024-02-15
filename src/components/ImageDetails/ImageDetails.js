import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ImageDetails.css';

const API_KEY = "SOWgcitDUCAjM3KYq8RCTHtmlZ1Og8WUTzY9erxRxOprrP8a1quAsltO";

const ImageDetails = () => {
  const [imgData, setImgData] = useState({});
  const [photographerName, setPhotographerName] = useState()
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.pexels.com/v1/photos/${id}`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((jsonData) => {
        setImgData(jsonData.src);
        setPhotographerName(jsonData.photographer)
        console.log(jsonData);
      });
  }, [id]);
  console.log(imgData);
  return (
    <div className="image-details-container">
      <img className="image-detail-img" src={imgData.landscape} alt="img"/>
      <p className="photo-credits">Credits: {photographerName}</p>
    </div>
  );
};

export default ImageDetails;
