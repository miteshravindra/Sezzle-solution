import React, { Component } from "react";
import KeypadComponent from "./components/KeypadComponent/KeypadComponent";
import ResultComponent from "./components/ResultComponent/ResultComponent";
import "./App.scss";
import ResultDisplay from "./components/ResultDisplayComponent/ResultDisplay";
import { socket } from "./index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      displayResult: [],
    };
  }
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
      socket.emit("chat", {
        data: `${this.state.result} = ${eval(this.state.result)}`,
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

  componentDidMount = () => {
    socket.on("broadcast", ({ data }) => {
      let newDisplayResult = [...this.state.displayResult, data];
      this.setState({
        displayResult: newDisplayResult,
      });
    });
  };
  render() {
    return (
      <div className="App">
        <div className="Calculator clearfix">
          <header className="Calculator-header">Calculator</header>
          <div className="calculator-wrapper">
            <div className="visible-wrapper">
              <ResultComponent result={this.state.result} />
              <KeypadComponent onClickhandler={this.onClickhandler} />
            </div>
          </div>
        </div>
        <ResultDisplay displayResult={this.state.displayResult} />
      </div>
    );
  }
}

export default App;
