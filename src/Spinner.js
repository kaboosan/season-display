import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">
        <h1>{props.text}</h1>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
    text: 'Loading...'
};

export default Spinner;
