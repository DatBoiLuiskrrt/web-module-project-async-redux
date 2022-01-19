import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getDogs = () => (dispatch) => {
  dispatch(fetchStart());
  //   console.log(dispatch);
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((resp) => {
      dispatch(fetchSuccess(resp.data));
      //   console.log(resp.data);
    })
    .catch((err) => {
      dispatch(fetchFail(err));
    });
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (doggie) => {
  return {
    type: FETCH_SUCCESS,
    payload: doggie,
  };
};

export const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    paylod: error,
  };
};
