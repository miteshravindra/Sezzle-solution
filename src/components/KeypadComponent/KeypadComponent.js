import React, { Component } from "react";
import "./KeypadComponent.scss";

class KeypadComponent extends Component {
  constructor(props) {
    super();
    this.keyboardData = [
      { keyValue: "(", type: "symbol" },
      { keyValue: "CE", type: "symbol" },
      { keyValue: ")", type: "symbol" },
      { keyValue: "C", type: "symbol" },
      { keyValue: "7", type: "number" },
      { keyValue: "8", type: "number" },
      { keyValue: "9", type: "number" },
      { keyValue: "/", type: "symbol" },
      { keyValue: "4", type: "number" },
      { keyValue: "5", type: "number" },
      { keyValue: "6", type: "number" },
      { keyValue: "*", type: "symbol" },
      { keyValue: "1", type: "number" },
      { keyValue: "2", type: "number" },
      { keyValue: "3", type: "number" },
      { keyValue: "-", type: "symbol" },
      { keyValue: "0", type: "number" },
      { keyValue: ".", type: "symbol" },
      { keyValue: "=", type: "symbol" },
      { keyValue: "+", type: "symbol" },
      { keyValue: "0", type: "number" },
      { keyValue: ".", type: "symbol" },
      { keyValue: "=", type: "symbol" },
      { keyValue: "+", type: "symbol" },
    ];
  }
  render(props) {
    return (
      <div className="keypad">
        <div className="keypad-wrapper">
          <div className="keypad-row">
            <ul>
              {this.keyboardData.map((data, index) => {
                if (index < 4) {
                  return (
                    <li
                      key={index}
                      name={data.keyValue}
                      className={data.type}
                      onClick={() => this.props.onClickhandler(data.keyValue)}
                    >
                      {data.keyValue}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="keypad-row">
            <ul>
              {this.keyboardData.map((data, index) => {
                if (index > 3 && index < 8) {
                  return (
                    <li
                      key={index}
                      name={data.keyValue}
                      className={data.type}
                      onClick={() => this.props.onClickhandler(data.keyValue)}
                    >
                      {data.keyValue}
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="keypad-row">
            <ul>
              {this.keyboardData.map((data, index) => {
                if (index > 7 && index < 12) {
                  return (
                    <li
                      key={index}
                      name={data.keyValue}
                      className={data.type}
                      onClick={() => this.props.onClickhandler(data.keyValue)}
                    >
                      {data.keyValue}
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="keypad-row">
            <ul>
              {this.keyboardData.map((data, index) => {
                if (index > 11 && index < 16) {
                  return (
                    <li
                      key={index}
                      name={data.keyValue}
                      className={data.type}
                      onClick={() => this.props.onClickhandler(data.keyValue)}
                    >
                      {data.keyValue}
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="keypad-row">
            <ul>
              {this.keyboardData.map((data, index) => {
                if (index > 15 && index < 20) {
                  return (
                    <li
                      key={index}
                      name={data.keyValue}
                      className={data.type}
                      onClick={() => this.props.onClickhandler(data.keyValue)}
                    >
                      {data.keyValue}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default KeypadComponent;
