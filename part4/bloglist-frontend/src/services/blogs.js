import axios from "axios";
const baseUrl = "/api/blogs";
let Token = "";

const getAll = async () => {
  const request = (await axios.get(baseUrl)).data;
  request.sort((blog1, blog2) => {
    return blog2.likes - blog1.likes;
  });
  return request;
};

export async function postBlog(blog) {
  return await axios.post(baseUrl, blog, { headers: { Authorization: Token } });
}
export function setToken(token) {
  Token = `bearer ${token}`;
}
export async function likeBlog(blog) {
  const newBlog = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes + 1,
  };
  const b = await axios.put(`/api/blogs/${blog.id}`, newBlog, {
    headers: { Authorization: Token },
  });
  return b;
}

export async function delBlog(blog) {
  return await axios.delete(`/api/blogs/${blog.id}`, {
    headers: { Authorization: Token },
  });
}

export default { getAll };
