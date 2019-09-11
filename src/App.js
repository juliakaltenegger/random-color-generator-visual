import React from "react";
import logo from "./Logo_v1.svg";
import "./App.css";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Random Color Generator</h1>
        <p>
          <Example className="App-popover"></Example>
        </p>
      </header>
    </div>
  );
}

export default App;

export class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          What's this?
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverHeader>
            <h2>Randomo Color Generator</h2>
          </PopoverHeader>
          <PopoverBody>
            <h3>How does Randomo Color Generator work?</h3>
            <p>
              This random color generator provides you with four functions in
              order to achieve the best color schemes for your design:
            </p>
            <ol>
              <li>
                Generate a completely random color by simply clicking the
                “Generate Color” button.{" "}
              </li>
              <li>Generate a random color from a pre-selected hue.</li>
              <li>Generate a random color from a pre-selected luminosity.</li>
              <li>
                Generate a random color from a pre-selected hue AND luminosity.
              </li>
            </ol>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
