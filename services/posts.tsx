const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export async function Posts() {
  const res = await fetch(postsUrl);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
