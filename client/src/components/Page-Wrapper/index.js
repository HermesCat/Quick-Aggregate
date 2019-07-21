import React from "react";
import "./style.css";

function Page_Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Page_Wrapper;
