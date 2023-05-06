// Select the DOM-element, so that you can replace it with content
let PROJECT_ID = "bpy0mxas";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "pet"]');

// Compose the URL for your project's endpoint and add the query
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

let result2 = null;
if (typeof window === "undefined") {
  const { result } = await fetch(PROJECT_URL).then((res) => res.json());
  result2 = result;
  console.log(result);
}
export { result2 };
// fetch the content
fetch(PROJECT_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
