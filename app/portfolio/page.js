import { Gallery } from "next-gallery";
import { getDetailedPortfolioImages } from "../utils/cms-service";

export default async function PortfolioPage() {
  const images = await getDetailedPortfolioImages();
  const widths = [ 500, 1000, 1600, 2000, 2400, 5000 ]
  const ratios = [ 0.33, 0.66, 1, 2.2, 4, 6, 8]
  return (
    <div className="flex flex-col gap-30">
      <Gallery
        images={images}
        ratios={ratios}
        widths={widths}
        lastRowBehavior="fill"
      />
    </div>
  );
}
