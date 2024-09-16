import Imagegallery from "./Imagegallery";

function App() {
  const arrImages = [
    { img: `/images/image1.jpg` },
    { img: `/images/image2.jpeg` },
    { img: `/images/image3.jpeg` },
    { img: `/images/image4.jpg` },
    { img: `/images/image5.jpg` },
    { img: `/images/image6.jpeg` },
  ];

  return (
    <> 
      <h1 style={{textAlign:"center", color:"blue" }}>Image Gallery</h1>
      <Imagegallery arrImages={arrImages} />
    </>
  );
}

export default App;


      