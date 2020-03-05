import React, { Component } from "react";

import QuoteBox from "./quotebox";
import "./App.css";

class App extends Component {
  state = {
    quote: {},
    color: ""
  };
  async componentDidMount() {
    let response = await fetch(`https://api.quotable.io/random`);
    let quote = await response.json();
    this.setState({ quote, color: this.generateRandomColor() });
  }
  handleClick = async () => {
    let response = await fetch(`https://api.quotable.io/random`);
    let quote = await response.json();
    this.setState({ quote, color: this.generateRandomColor() });
  };
  generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };
  render() {
    const { color, quote } = this.state;
    return (
      <React.Fragment>
        <div
          style={{
            height: "100vh",
            color: this.state.color,
            backgroundColor: this.state.color
          }}
        >
          <div className="container text-center py-5">
            <h2 className="text-light pt-5">Random Quote Generator</h2>
            <h6 className="text-light pb-2 text-muted">
              created by{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://www.twitter.com/wasifbaliyan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <em className="text-light">wasifbaliyan</em>
              </a>
            </h6>
            <QuoteBox color={color} quote={quote} onClick={this.handleClick} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
