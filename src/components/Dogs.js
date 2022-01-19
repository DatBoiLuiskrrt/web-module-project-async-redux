import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFail, fetchStart, fetchSuccess } from "../actions";
import axios from "axios";

import { getDogs } from "../actions/index";

const Dogs = ({ error, dispatch, isFetching, message }) => {
  console.log("this is my message : ", message);
  useEffect(() => {
    dispatch(getDogs());
  }, []);

  if (error) {
    return <h2>We got an weeoe: {error}</h2>;
  }

  const handleClick = () => {
    dispatch(getDogs());
  };
  return (
    <>
      <h2>Say hi to: </h2>
      <img src={message.message} />
      <button onClick={handleClick}>Get a new Doggie</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dog: state,
    error: state.error,
    isFetching: state.isFetching,
    message: state.message,
  };
};

export default connect(mapStateToProps)(Dogs);
