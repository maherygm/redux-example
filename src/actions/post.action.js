import axios from "axios";
import { baseUrl } from "../utils/baseUrls";

export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";

export const getPost = () => {
  return (dispatch) => {
    return axios.get(`${baseUrl.url}/posts`).then((res) => {
      dispatch({
        type: GET_POST,
        payLoad: res.data,
      });
    });
  };
};
export const addPost = (post) => {
  return (dispatch) => {
    return axios.post(`${baseUrl.url}/posts`, post).then((res) => {
      dispatch({
        type: ADD_POST,
        payLoad: res.data,
      });
    });
  };
};
export const editPost = (post) => {
  return (dispatch) => {
    return axios.put(`${baseUrl.url}/posts/${post.id}`, post).then((res) => {
      dispatch({
        type: EDIT_POST,
        payLoad: res.data,
      });
    });
  };
};
export const deletePost = (postId) => {
  return (dispatch) => {
    return axios.delete(`${baseUrl.url}/posts/${postId}`).then((res) => {
      dispatch({
        type: DELETE_POST,
        payLoad: res.data,
      });
    });
  };
};
export const likePost = (post) => {
  return (dispatch) => {
    return axios.put(`${baseUrl.url}/posts/${post.id}`, post).then((res) => {
      dispatch({
        type: LIKE_POST,
        payLoad: res.data,
      });
    });
  };
};
