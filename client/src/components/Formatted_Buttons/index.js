import React from "react";
import "./style.css";

function Formatted_Buttons(props) {
    return (
        <>
            <button className="user-keyword recipe-buttons">
                keish <a href="#" className="button-delete">x</a>
            </button>
            <button className="user-keyword news-buttons">
                democratic party<a href="#" className="button-delete">x</a>
            </button>
            <button className="user-keyword twitter-buttons">
                #bacon<a href="#" className="button-delete">x</a>
            </button>
            <button className="user-keyword twitter-buttons">
                #Missy_Elliot<a href="#" className="button-delete">x</a>
            </button>
            <button className="user-keyword news-buttons">
                Election 2020<a href="#" className="button-delete">x</a>
            </button>
            <button className="user-keyword recipe-buttons">
                vegan cheese<a href="#" className="button-delete">x</a>
            </button>
            <button className="user-keyword recipe-buttons">
                fried rice<a href="#" className="button-delete">x</a>
            </button>
            <button className="user-keyword twitter-buttons">
                #japan<a href="#" className="button-delete">x</a>
            </button>
            <button className="user-keyword twitter-buttons">
                #richmond<a href="#" className="button-delete">x</a>
            </button>
        </>
    );
}

export default Formatted_Buttons;
