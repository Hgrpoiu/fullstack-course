import axios from "axios";
const baseUrl = "/api/blogs";
let Token = "";

async function getAll() {
  const request = (await axios.get(baseUrl)).data;
  return request;
}

async function getOne(id) {
  const request = (await axios.get(`/api/blogs/${id}`)).data;

  return request;
}

async function postBlog(blog) {
  return await axios.post(baseUrl, blog, { headers: { Authorization: Token } });
}
function setToken(token) {
  Token = `bearer ${token}`;
}
async function likeBlog(blog) {
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

async function delBlog(blog) {
  return await axios.delete(`/api/blogs/${blog.id}`, {
    headers: { Authorization: Token },
  });
}

async function addComment(id, comment) {
  return await axios.post(`/api/blogs/${id}/comments`, { comment });
}

const services = {
  getAll,
  postBlog,
  delBlog,
  setToken,
  likeBlog,
  getOne,
  addComment,
};

export default services;
