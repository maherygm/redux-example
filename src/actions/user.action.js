import axios from "axios";
import { baseUrl } from "../utils/baseUrls";

export const GET_USER = "GET_USER";
export const LIKE_USER = "LIKE_USER";

export const getUser = () => {
  return (dispatch) => {
    return axios.get(`${baseUrl.url}/users`).then((res) => {
      dispatch({
        type: GET_USER,
        payLoad: res.data[0],
      });
    });
  };
};
export const likeUserPost = (user) => {
  return (dispatch) => {
    return axios.put(`${baseUrl.url}/users/${user.id}`, user).then((res) => {
      dispatch({
        type: LIKE_USER,
        payLoad: res.data,
      });
    });
  };
};
