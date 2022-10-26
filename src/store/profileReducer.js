import axios from "axios";

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

export const fetch_users = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetch_success = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetch_error = (error) => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: error,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetch_users());
    axios("https://jsonplaceholder.typicode.com/users").then((data) => {
      dispatch(fetch_success(data.data));
    });
  };
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    default:
      return state;
  }
};
