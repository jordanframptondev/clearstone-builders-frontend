// sanity.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "geus6dp5",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export function urlFor(source) {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}

export async function getHomeImages() {
  const data = await client.fetch('*[_type == "home"]{static}');

  const images = data[0]?.images?.map((image) => urlFor(image).url());
  return images;
}

export async function getPortfolioImages() {
  const data = await client.fetch('*[_type == "portfolio"]{images}');

  const images = data[0]?.images?.map((image) => urlFor(image).url());
  return images;
}

export async function getDetailedPortfolioImages() {
  const data = await client.fetch('*[_type == "portfolio"].images[].asset->{url, metadata{dimensions{width,aspectRatio}}}');
  return data?.map((image) => ({
    src: image?.url,
    aspect_ratio: image?.metadata?.dimensions?.aspectRatio,
  }));
}

export async function getContactData() {
  let data = await client.fetch('*[_type == "contact"]');
  data = data[0];
  return {
    email: data.email,
    phone: data.phoneNumber,
    address: data.address,
    imageUrl: urlFor(data.image).url(),
  };
}

export async function getFocusData() {
  let data = await client.fetch('*[_type == "focus"]');
  data = data[0];
  return {
    text: data.text,
    imageUrl: urlFor(data.image).url(),
  };
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
}

export async function createPost(post) {
  const result = client.create(post);
  return result;
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({ title });
  return result;
}
