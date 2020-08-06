import React, { Component } from "react";
import "./ResultComponent.scss";

class ResultComponent extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="result-display">
        <div className="wrapper">
          <p>{this.props.result}</p>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
