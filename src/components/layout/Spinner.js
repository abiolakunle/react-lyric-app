import React from "react";
import SpinnerImg from "./spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={SpinnerImg}
        alt="Loading..."
        style={{ width: "200px", margin: "40px auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
