// sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'geus6dp5',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export function urlFor(source) {
  const builder = imageUrlBuilder(client)
  return builder.image(source)
}

export async function getPortfolioImages() {
  const data = await client.fetch('*[_type == "portfolioPage"]{images}')
  const images = data[0]?.images.map(image => urlFor(image).url())
  return images
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function createPost(post) {
  const result = client.create(post)
  return result
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}