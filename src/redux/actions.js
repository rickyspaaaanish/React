export function updatePosts(posts) {
  localStorage.setItem("posts", posts);
  return { type: "UPD_POSTS", payload: posts };
}
