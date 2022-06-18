import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
//import { history } from "react-router-dom";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

export const registerUser = (userData, history) => (dispatch) => {
  //console.log(userData);
  axios
    .post("http://localhost:5000/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        //  payload: err.response.data,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      })
    );
};

export const loginUser = (userData) => (dispatch) => {
  axios.post("http://localhost:5000/api/users/login", userData).then((res) => {
    const { token } = res.data;
    localStorage.setItem("jwt token", token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
  });
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
