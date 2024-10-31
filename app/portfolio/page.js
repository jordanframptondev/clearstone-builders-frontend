"use server";
import { PhotoGallery } from '@/components/PhotoGallery';
import { getDetailedPortfolioImages } from '@/utils/cms-service';

export default async function PortfolioPage() {
  const photos = await getDetailedPortfolioImages();
  return (
    <>
      <PhotoGallery photos={photos} />
      <p className="text-center font-extralight text-[16px] leading-5 pb-6 font-montserrat">
        Many photographs on website by Joshua Caldwell Photographic and Lindsay
        Salazar Photography.
      </p>
    </>
  );
}
