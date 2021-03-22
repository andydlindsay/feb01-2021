import React from "react";

export default function Loading(props) {
  return (
    <>
      {props.show && (
        <img
          className="spinner"
          src="images/status.png"
          alt="Loading Indicator"
        />
      )}
    </>
  );
}
