import axios from "axios";

export const getSecretWord = () => {
  //return response from server
  //TODO: write actual action in Redux/ context sections
  return axios.get("http://localhost:3030").then((response) => response.data);
};
