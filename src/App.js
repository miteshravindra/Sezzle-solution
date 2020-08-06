import React, { Component } from "react";
import KeypadComponent from "./components/KeypadComponent/KeypadComponent";
import ResultComponent from "./components/ResultComponent/ResultComponent";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "Invalid",
      });
    }
  };

  reset = () => {
    this.setState({ result: "" });
  };

  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  onClickhandler = (symbol) => {
    if (symbol === "=") {
      this.calculate();
    } else if (symbol === "C") {
      this.reset();
    } else if (symbol === "CE") {
      this.delete();
    } else this.setState({ result: this.state.result + symbol });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">Calculator</header>
        <div className="calculator-wrapper">
          <div className="visible-wrapper">
            <ResultComponent result={this.state.result} />
            <KeypadComponent onClickhandler={this.onClickhandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
