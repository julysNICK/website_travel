import React from "react";
import "./styles.css";
export default function SendMe() {
    return (
        <div className="boxGreen">
            <div className="columnBox">
                <p className="titleBox02">
                    Subscribe to get information, latest news and other interesting offers about
                    Cobham
                </p>
                <div className="rowBox01">
                    <input type="email" className="inputEmail" placeholder="Digite seu email" />
                    <button className="buttonEmail">Subscribe</button>
                </div>
            </div>
        </div>
    );
}
