import logo from "./Logo_v1.svg";
import React, { useState, useRef } from "react";

export default Header;

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-headline">Random Color Generator</h1>
        <WhatsThisButton />
      </header>
    </div>
  );
}

function WhatsThisButton() {
  const [hide, setHide] = useState(true);

  return (
    <div>
      <button className="whatsThisButton" onClick={() => setHide(!hide)}>
        What's this?
      </button>
      <div className={hide ? "whatsThisHide" : "whatsThisShow"}>
        <p>
          This random color generator provides you with four functions in order
          to achieve the best color schemes for your design:
        </p>
        <ol>
          <li>
            Generate a completely random color by simply clicking the “Generate
            Color” button.
          </li>
          <li>Generate a random color from a pre-selected hue.</li>
          <li>Generate a random color from a pre-selected luminosity.</li>
          <li>
            Generate a random color from a pre-selected hue AND luminosity.
          </li>
        </ol>
      </div>
    </div>
  );
}
