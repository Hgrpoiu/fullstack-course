import axios from "axios";
import { useState, useEffect } from "react";

export function useResource(baseUrl) {
  const [resources, setResources] = useState([]);
  let token = null;

  const setToken = (newToken) => {
    token = `bearer ${newToken}`;
  };

  const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  };

  const create = async (newObject) => {
    const config = {
      headers: { Authorization: token },
    };

    const response = await axios.post(baseUrl, newObject, config);
    setResources(resources.concat(response.data))
    return response.data;
  };

  const update = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject);
    return response.data;
  };

  const service = {
    setToken,
    getAll,
    create,
    update,
  };

  useEffect(() => {
    getAll().then((r) => {
      setResources(r);
    });
  }, []);

  return [resources, service];
}
