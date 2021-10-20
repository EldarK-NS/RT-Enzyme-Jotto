import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

/**
 * @functions correctGuess
 * @returns {object}-Action object with type 'CORRECT_GUESS
 */
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

export const getSecretWord = () => {
  //return response from server
  //TODO: write actual action in Redux/ context sections
  return axios.get("http://localhost:3030").then((response) => response.data);
};
