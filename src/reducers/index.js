import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../actions";

const initialState = {
  message: "",
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...state,
        message: "",
        isFetching: true,
        error: "",
      };
    }
    case FETCH_FAIL: {
      return {
        ...state,
        message: "",
        isFetching: false,
        error: action.payload,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        message: action.payload,
        isFetching: false,
        error: "",
      };
    }
    default:
      return state;
  }
};
