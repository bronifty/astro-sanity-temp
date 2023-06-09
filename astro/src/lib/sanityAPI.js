import dotenv from "dotenv";
dotenv.config();
const PROJECT_ID = process.env.SANITY_PROJECT_ID;
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "pet"]');
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
let resultExport = null;
(async () => {
  const { result } = await fetch(PROJECT_URL).then((res) => res.json());
  resultExport = result;
  console.log("result inside of IIFE: ", result);
})();

export { resultExport };

export async function getAllSanityPosts() {
  const data = await fetch(PROJECT_URL).then((res) => res.json());
  console.log("data inside of getAllSanityPosts: ", data);
  return data?.result;
}

// async function fetchAPI(query, { variables } = {}) {
//   const headers = { "Content-Type": "application/json" };
//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers,
//     body: JSON.stringify({ query, variables }),
//   });

//   const json = await res.json();
//   if (json.errors) {
//     console.log(json.errors);
//     throw new Error("Failed to fetch API");
//   }

//   return json.data;
// }
