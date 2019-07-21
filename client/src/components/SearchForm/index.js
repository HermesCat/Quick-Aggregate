import React from "react";
import "./style.css";

export function InputValue(props) {
  return <input className="form-control" {...props} />;
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-search"
    >
      {props.children}
    </button>
  );
}
