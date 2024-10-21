import { getHomeImages } from "@/utils/cms-service";
import {FadingPhotoGallery} from "@/components/FadingPhotoGallery";

export default async function Home() {
  const cmsImages = await getHomeImages();
  return <FadingPhotoGallery imageURLs={cmsImages} />;
}
