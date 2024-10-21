"use client";

import "@/styles/fading-photo-gallery.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export function FadingPhotoGallery({ imageURLs }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageURLs?.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageURLs.length);
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [imageURLs?.length]);

  return (
    <div className="image-container">
      {imageURLs.map((image, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentIndex ? "active" : ""}`}
        >
          <Image
            src={image}
            width={1600}
            height={900}
            alt={`Image ${index}`}
            className="full-screen-image"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
