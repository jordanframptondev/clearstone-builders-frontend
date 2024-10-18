"use client";

import "./style.css";
import Image from "next/image";
import { getHomeImages } from "@/app/utils/cms-service";
import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   async function fetchImages() {
  //     const fetchedImages = await getHomeImages();
  //     setImages(fetchedImages);
  //   }
  //
  //   fetchImages();
  // }, []);

  useEffect(() => {
    // List of image file names in the public/static folder
    const imageFiles = [
      "https://images.squarespace-cdn.com/content/v1/55f739f4e4b0550fcc13832a/1555510104579-3OHHEQS6TW8VGNBDVWIN/remodel-building-luxury-living-shenandoah-valley-virginia",
      "https://www.redfin.com/blog/wp-content/uploads/2023/01/new_hope_home_1-1024x683.jpg",
      "https://homesbymidtown.com/wp-content/uploads/2021/05/Exterior-Front.jpg",
      "https://utahvalleyrealestateforsale.com/wp-content/uploads/2023/11/Orem-Utah-Homes-for-Sale-scaled.jpeg",
      "https://ssl.cdn-redfin.com/photo/269/islphoto/870/genIslnoResize.3581870_0.jpg",
    ];
    console.log("images", imageFiles);
    setImages(imageFiles);
  }, []);

  useEffect(() => {
    if (images?.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [images?.length]);

  return (

      // <div className="image-container">
      //   {static?.map((image, index) => (
      //     <div
      //       key={index}
      //       className={`image-slide ${index === currentIndex ? "active" : ""}`}
      //     >
      //       <Image
      //         src={image}
      //         alt={`Image ${index}`}
      //         layout="fill"
      //         objectFit="cover"
      //       />
      //     </div>
      //   ))}
      // </div>

      <div className="image-container">
        {images.map((image, index) => (
            <div
                key={index}
                className={`image-slide ${index === currentIndex ? "active" : ""}`}
            >
              <img
                  src={image}
                  alt={`Image ${index}`}
                  className="full-screen-image"
              />
            </div>
        ))}
      </div>
  );
}
