'use server'

import { ClientGallery } from "@/components/ClientGallery";
import { getPortfolioImages } from "@/utils/cms-service";

export default async function PortfolioPage() {
  const images = await getPortfolioImages();
  return <><ClientGallery images={images} />
  <p className="text-center font-extralight text-[16px] leading-5 pb-6">Many photographs on website by Joshua Caldwell Photographic and Lindsay Salazar Photography.</p>
  </>;
}
