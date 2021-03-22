import React from "react";

export default function Error(props) {
  if (props.show === false) return null;

  return (
    <section className="error radius" onClick={props.onClose}>
      { props.children } 
      <img className="error__close" src="images/times.png" alt="Close" />
    </section>
  );
}
