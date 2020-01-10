import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      parts : []
    };
    this.getParts = this.getParts.bind(this);
  };

  // Functions
  componentDidMount() {
    this.getParts();
  };

  getParts() {
    axios.get("/api/form").then(response => {
      console.log("Getting form people...");
      console.log(response.data);
      if (response.data) {
        this.setState({
          parts : response.data
        });
        console.log(this.state.parts)
      }
    })
  };

  // App Render
  render() {
    return (
      <div className="App">
        <form>
          
        </form>
      </div>
    );
  }
}

export default App;
