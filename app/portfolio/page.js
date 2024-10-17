'use server'

import { ClientGallery } from "../components/ClientGallery";
import { getPortfolioImages } from "../utils/sanityClient";

export default async function PortfolioPage() {
  // const response = await fetch('https://geus6dp5.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22portfolioPage%22%5D%7B%0A++images%0A%7D');
  // const data = await response.json();
  const images = await getPortfolioImages();
  return <ClientGallery images={images} />;
}
