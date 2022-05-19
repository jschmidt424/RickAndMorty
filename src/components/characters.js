import React from "react";

function Characters(props) {
  return (
    <div className="characterCard-wrapper CCWjsSL">
      <div className="characterCard-imgWrapper CCiwSL">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="characterCard-ContentWrapper CCcwSL">
        <div className="section">
          <h2>{props.name}</h2>
          <span className="status">
            <span className="status__icon"></span>
            {props.status} - {props.species}
          </span>
        </div>
        <div className="section">
          <span className="gray-text">Last known location:</span>
          <h3>{props.location.name}</h3>
        </div>
        <div className="section">
          <span className="gray-text">Episodes:</span>
          <h3>{props.episode.length}</h3>
        </div>
      </div>
    </div>
  );
}

export default Characters;
