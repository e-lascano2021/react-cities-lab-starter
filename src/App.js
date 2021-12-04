
import React, {useState} from "react";
import "./styles.css";
import imagesArr from './imageData';

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img)

  const handleclick = (imgUrl) => {
    setBigImage(imgUrl)

  }

  const images = imagesArr.map((element, index) => {
    return (
      <img 
        style={{ border: bigImage === element.img ? "5px solid green" : "" }}
        src={element.img}
        alt={element.city}
        className={"thumb"}
        key={index}
        onClick = {()=>handleclick(element.img)}
      />
    )
  })

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt='bigImaage'/>
      </div>
    </div>
  );
}
