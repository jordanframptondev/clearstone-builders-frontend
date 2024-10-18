import { getHomeImages } from "@/app/utils/cms-service";
import {FadingPhotoGallery} from "@/app/components/FadingPhotoGallery";

export default function Home() {

  const images = [
    "https://cdn.sanity.io/images/geus6dp5/production/334d7caf40d73db63a813fcac9ed753980cd8a6c-8000x4501.png",
    "https://cdn.sanity.io/images/geus6dp5/production/1f633622353a3779ce9419461cb7eec6ac6c096d-8001x4501.png",
    "https://cdn.sanity.io/images/geus6dp5/production/5f2dcb6253ab41d158d0011cbd65edf134b6a153-8000x4501.png",
    "https://cdn.sanity.io/images/geus6dp5/production/cbb9c4376c3f1fd6393ac85ab0c23ae1a9e87c7c-8001x4501.png",
    "https://cdn.sanity.io/images/geus6dp5/production/5534a394a1171e410ff1372fea8541f8e0a05c01-8000x4501.png",
  ];

  // TODO - get fetch images from CMS working
  // const cmsImages = getHomeImages();
  return <FadingPhotoGallery imageURLs={images} />;
}
