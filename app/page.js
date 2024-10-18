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
      "/static/home-1.jpg",
      "/static/home-2.jpg",
      "/static/home-3.jpg",
      "/static/home-4.jpg",
      "/static/home-5.jpg",
    ];
    console.log("images", imageFiles);
    setImages(imageFiles);
  }, []);

  useEffect(() => {
    if (images?.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

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
          <Image
            src="/static/home-1.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
    </div>
  );
}
