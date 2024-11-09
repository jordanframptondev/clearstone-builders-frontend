import {PhotoGallery} from '@/components/PhotoGallery';
import {getDetailedPortfolioImages} from '@/utils/cms-service';

export const metadata = {
    title: 'Clearstone Builders - Portfolio',
    description: 'Image gallery of Clearstone Builders homes',
    keywords: 'Images, Gallery, website, clearstone builders, clearstone, builders, homes',
    viewport: 'width=device-width, initial-scale=1',
};

export default async function PortfolioPage() {
  const photos = await getDetailedPortfolioImages();
  return (
    <>
      <PhotoGallery photos={photos} />
      <p className="text-center font-extralight text-[24px] md:text-[30px] xl:text-[36px] pt-3 pb-6">
        Many photographs on website by Joshua Caldwell Photographic and Lindsay
        Salazar Photography.
      </p>
    </>
  );
}
