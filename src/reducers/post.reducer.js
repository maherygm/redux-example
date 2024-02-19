import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POST,
  LIKE_POST,
} from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  //comportement a faire switch

  switch (action.type) {
    case GET_POST:
      return action.payLoad;

    case ADD_POST:
      return [action.payLoad, ...state];

    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.payLoad.id) {
          return action.payLoad;
        } else {
          return post;
        }
      });
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payLoad.id);
    case LIKE_POST:
      return state.map((post) => {
        if (post.id === action.payLoad.id) {
          return action.payLoad;
        } else {
          return post;
        }
      });
    default:
      return state;
  }
}
