import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFail, fetchStart, fetchSuccess } from "../actions";
import axios from "axios";
// import "./index.css";
import { getDogs } from "../actions/index";

const Dogs = ({ error, dispatch, isFetching, message }) => {
  console.log("this is my message : ", message);
  useEffect(() => {
    dispatch(getDogs());
  }, []);

  if (error) {
    return <h2>We got an weeoe: {error}</h2>;
  }
  if (isFetching) {
    return <h2>Fetching a doggie for you</h2>;
  }

  const handleClick = () => {
    dispatch(getDogs());
  };
  return (
    <div className="card-container">
      <h2>Say hi to: </h2>
      <img src={message.message} />
      <button className="button" onClick={handleClick}>
        Get a new Doggie
      </button>
    </div>
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
