import axios from "axios";
const url = "http://localhost:3001/persons";

function getAll() {
  return axios.get(url);
}

function create(name, number) {
  return axios.post(url, { name: name, number: number });
}

function update(name, number, id) {
  return axios.put(`${url}/${id}`, { name: name, number: number });
}

function remove(id){
    return axios.delete(`${url}/${id}`);
}

export default { getAll, create, update, remove };
