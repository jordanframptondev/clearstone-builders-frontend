"use client";

import Image from "next/image";
import { useState } from "react";

export function PhotoGallery({ photos }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  function orderObjects(photos) {
    const col1 = photos.filter((p, index) => index % 3 === 0);
    const col2 = photos.filter((p, index) => (index - 1) % 3 === 0);
    const col3 = photos.filter((p, index) => (index - 2) % 3 === 0);
    return [...col1, ...col2, ...col3];
  }

  const photosInOrder = orderObjects(photos);
  return (
    <div>
      <div className="columns-3 gap-4">
        {photosInOrder.map((photo, index) => (
          <div key={index} className="imageWrapper">
            <Image
              src={photo.src}
              alt={photo.alt || `Photo ${index + 1}`}
              width={photo.width}
              height={photo.height}
              onClick={() => openLightbox(photo)}
              className="transition-all ease-in-out duration-500 w-full h-auto block hover:scale-105 mb-4"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={selectedImage.width}
            height={selectedImage.height}
            className="lightboxImage"
          />
        </div>
      )}
    </div>
  );
}
