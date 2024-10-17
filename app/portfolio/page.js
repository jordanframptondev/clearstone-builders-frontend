'use server'

import { ClientGallery } from "../components/ClientGallery";
import { getPortfolioImages } from "../utils/sanityClient";

export default async function PortfolioPage() {
  const images = await getPortfolioImages();
  return <ClientGallery images={images} />;
}
