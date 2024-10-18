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
  //     console.log("images", imageFiles);
  //   }
  //
  //   fetchImages();
  // }, []);

  useEffect(() => {
    // List of image file names in the public/static folder
    const imageFiles = [
      "https://cdn.sanity.io/images/geus6dp5/production/334d7caf40d73db63a813fcac9ed753980cd8a6c-8000x4501.png",
      "https://cdn.sanity.io/images/geus6dp5/production/1f633622353a3779ce9419461cb7eec6ac6c096d-8001x4501.png",
      "https://cdn.sanity.io/images/geus6dp5/production/5f2dcb6253ab41d158d0011cbd65edf134b6a153-8000x4501.png",
      "https://cdn.sanity.io/images/geus6dp5/production/cbb9c4376c3f1fd6393ac85ab0c23ae1a9e87c7c-8001x4501.png",
      "https://cdn.sanity.io/images/geus6dp5/production/5534a394a1171e410ff1372fea8541f8e0a05c01-8000x4501.png",
    ];
    console.log("images", imageFiles);
    setImages(imageFiles);
  }, []);

  useEffect(() => {
    if (images?.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3500);

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
          <Image
            src={image}
            width={1600}
            height={900}
            alt={`Image ${index}`}
            className="full-screen-image"
            priority={true}
          />
        </div>
      ))}
    </div>
  );
}
