import React from "react";
import "./ResultDisplay.scss";

export default function ResultDisplay({ displayResult }) {
  return (
    <ul class="list-group Ulist-wrapper">
      {" "}
      {displayResult.length >= 0 &&
        displayResult.map((result) => (
          <li class="list-group-item list" key={result}>
            {result}
          </li>
        ))}
    </ul>
  );
}
