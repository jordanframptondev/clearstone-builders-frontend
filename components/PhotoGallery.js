"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowSize } from '../app/hooks/useWindowSize';

export function PhotoGallery({ photos, xlColumns, lgColumns, mdColumns, smColumns }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { width } = useWindowSize();
  const [columns, setColumns] = useState(1);
  console.log("WIDTH", width, "COLUMNS", columns);

  useEffect(() => {
    const columnWidth = getColumnsWidth()
    setColumns(columnWidth);
  }, [getColumnsWidth, width])

  const getColumnsWidth = useCallback(() => {
    if (width > 1200 && xlColumns) {
      return xlColumns;
    } else if (width > 992 && lgColumns) {
      return lgColumns;
    } else if (width > 768 && mdColumns) {
      return mdColumns;
    } else {
      return smColumns || 1;
    }
  }, [lgColumns, mdColumns, smColumns, width, xlColumns]);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  
  let photosInOrder = [];
  if (columns > 1) {
    const colPhotos = Array.from({ length: columns }, () => []);
    photos.forEach((photo, index) => {
      colPhotos[index % columns].push(photo);
    });
    photosInOrder = colPhotos.flat();
  } else {
    photosInOrder = photos;
  }

  return (
    <>
      { columns ? <div className={`${columns ? 'columns-' + columns : 'columns-1'} gap-4`}>
        {photosInOrder.map((photo, index) => (
          <div key={index} className="relative cursor-pointer overflow-hidden mb-4">
            <Image
              src={photo.src}
              alt={photo.alt || `Photo ${index + 1}`}
              width={photo.width}
              height={photo.height}
              onClick={() => openLightbox(photo)}
              className="transition-all ease-in-out duration-500 w-full h-auto block hover:scale-110"
            />
          </div>
        ))}
      </div> : null }

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
    </>
  );
}
