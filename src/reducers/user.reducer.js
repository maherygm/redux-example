import { GET_USER, LIKE_USER } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  //comportement a faire switch
  switch (action.type) {
    case GET_USER:
      return action.payLoad;
    case LIKE_USER:
      return { ...state, likes: action.payLoad.likes };

    default:
      return state;
  }
}
