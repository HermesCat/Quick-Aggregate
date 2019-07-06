import React from "react";
import Header from "../../components/Header";
import Home from "../../pages/Home";
import "./style.css";

function Page_Wrapper(props) {
    return (

        <div className="wrapper">
            {props.children}
        </div>

    );
}

export default Page_Wrapper;
