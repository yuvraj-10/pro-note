import React, { Component } from "react";

class Editor extends Component {
  constructor() {
    super();
    // to bind the method with event handler without ().
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="input">
            <h3 class = "hello">Input</h3>
            <textarea
              className="input-text"
              placeholder = 'Enter your text'
              onChange={this.handleChange}
            //   defaultValue={this.state.value}
            />
          </div>
          <div className="output">
            <h3 class = "hello">Pro Note</h3>
            <div className="output-text">{this.state.value}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;