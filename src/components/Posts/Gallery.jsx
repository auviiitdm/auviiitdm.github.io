import React, { useState } from "react";

// Gallery Photos
import Img1 from "../../assets/img/1.PNG";
import Img2 from "../../assets/img/2.JPG";
import Img3 from "../../assets/img/3.JPG";
import Img4 from "../../assets/img/4.JPG";
import Img5 from "../../assets/img/5.JPG";
import Img6 from "../../assets/img/6.JPG";
import Img7 from "../../assets/img/7.JPG";
import Img8 from "../../assets/img/8.JPG";
import Img9 from "../../assets/img/9.JPG";
import Img10 from "../../assets/img/10.JPG";
import Img11 from "../../assets/img/11.JPG";
import Img12 from "../../assets/img/12.JPG";
import Img13 from "../../assets/img/13.JPG";
import Img14 from "../../assets/img/2022-1.JPG";
import Img15 from "../../assets/img/2022-2.JPG";
import Img16 from "../../assets/img/2022-3.JPG";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: Img1, title: "Competition Preparation" },
    { src: Img2, title: "Testing Phase" },
    { src: Img3, title: "Team Discussion" },
    { src: Img4, title: "Workshop Session" },
    { src: Img5, title: "Competition Day" },
    { src: Img6, title: "Technical Review" },
    { src: Img7, title: "Team Building" },
    { src: Img8, title: "Design Phase" },
    { src: Img9, title: "Field Testing" },
    { src: Img10, title: "Component Assembly" },
    { src: Img11, title: "Final Checks" },
    { src: Img12, title: "Team Celebration" },
    { src: Img13, title: "Competition Success" },
    { src: Img14, title: "2022 Highlights" },
    { src: Img15, title: "Team Workshop" },
    { src: Img16, title: "Project Review" }
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <div 
              className="image-wrapper"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} />
              <div className="image-overlay">
                <span>{image.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.title} />
            <button 
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
