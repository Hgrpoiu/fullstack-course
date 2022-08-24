import axios from "axios"

async function getOne(id) {
  const request = (await axios.get(`/api/users/${id}`)).data;

  return request;
}

async function getAll() {
  const request = (await axios.get("/api/users")).data;
  return request;
}

const userServices = { getOne, getAll };

export default userServices;
