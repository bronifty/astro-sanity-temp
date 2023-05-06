import { useSanityClient, groq } from "astro-sanity";
// let PROJECT_ID = "bpy0mxas";
// let DATASET = "production";
// let QUERY = encodeURIComponent('*[_type == "post"]');

// // Compose the URL for your project's endpoint and add the query
// let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

export async function getFirstBlogPost() {
  const query = groq`*[_type == "pet"]`;
  // const firstPost = await useSanityClient().fetch(URL);
  // console.log(firstPost);

  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}
