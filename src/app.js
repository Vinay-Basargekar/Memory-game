import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

const App = () => {
    return (
        <div>
            <h1>Memory game</h1>
            <div className="result">
                <div className="cur-score">ScoreBoard</div>
                <div className="highest-score">BestScore</div>
            </div>
            <Card/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
