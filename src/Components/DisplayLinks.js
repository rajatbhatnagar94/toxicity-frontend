import React from 'react'
import { Link } from "react-router-dom"

const DisplayLinks = () => {
    return (
    <div className="ui divided items">
        <div className="item">
            <div className="ui tiny image">
                <img alt="eli5 logo" src="/eli5-logo.png" />
            </div>
            <div className="content">
                <Link to={"/classify/explainlikeimfive"} className="header">Explain like im five</Link>
                <div className="description">
                    <p>r/explainlikeimfive</p>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="ui tiny image">
                <img alt="cmv logo" src="/cmv-logo.png" />
            </div>
            <div className="content">
                <Link to={"/classify/changemyview"} className="header">Change My View</Link>
                <div className="description">
                    <p>r/changemyview</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DisplayLinks
