import Image from "./image/Image";

const Gallery = ({ galleryData }) => {
  console.log(galleryData);

  return (
    <div className="container all-gallery-container">
      <div className="row">
        {galleryData.map((data, index) => {
          return (
            <div key={index} className="col">
              {/* <img className="image-container" src={data.src.original} alt="img" /> */}
              <Image imageData={data}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
