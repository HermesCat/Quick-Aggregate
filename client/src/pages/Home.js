import React from "react";
import "./style.css";
import Search_Box from "../components/Search_Box";
import Search_Result from "../components/Search_Result";

function Home() {
    return (
        <>
            <div className="row home-content-row">
                <div className="col-lg-5 col-s-12">
                    <Search_Box />
                </div>
                <div className="col-lg-7 d-none d-lg-block">
                    <Search_Result />
                </div>
            </div>
        </>
    );
}

export default Home;