
import "./style.css"

const Imagegallery = ({ arrImages }) => {
  return (
    <>
      <div className="galleryContainer">
        {arrImages && arrImages.map((objectImages, index) => (
            <div className="galleryDiv" key={index}>
              <img src={objectImages.img} alt="" />
            </div>
          ))}
      </div>
    </>
  );
};



export default Imagegallery
