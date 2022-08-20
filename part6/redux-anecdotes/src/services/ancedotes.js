import axios from "axios";
import { useDispatch } from "react-redux";
import { addAnce, asObject } from "../reducers/anceReducer";

const url = "http://localhost:3001/anecdotes";
const dispatch = useDispatch;

export async function getAll() {
  return (await axios.get(url)).data;
}

export async function postAnec(content) {
  const getId = () => (100000 * Math.random()).toFixed(0);
  const ret = await axios.post(url, { content, id: getId(), votes: 0 });
  return ret.data;
}

export async function putAnecV(anec) {
  const ret = await axios.put(`${url}/${anec.id}`, {
    ...anec,
    votes: anec.votes + 1,
  });

  return ret.data;
}
