import axios from "axios";

async function login(info) {
  return (await axios.post("/api/login", info)).data;
}

export default login;
