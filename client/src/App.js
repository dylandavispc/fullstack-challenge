import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Form from "./components/Form"
import Table from "./components/Table"
import Donut from "./components/Donut"

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

  componentDidUpdate = () => {
    this.getParts();
}

  getParts() {
    axios.get("/api/form").then(response => {
      if (response.data) {
        this.setState({
          parts : response.data
        });
      }
    })
  };

  // App Render
  render() {
    return (
      <div className="container">
        <section className="row">
          <div className="col-md-12">
            <Form 
              parts = {this.state.parts}
            />
          </div>
        </section>
        <section className="row">
          <div className="col-md-12">
            <h1>Data!</h1>
            <h3>Lorem Ipsum...</h3>
          </div>
        </section>
        <section className="row">
          <div className="col-md-8">
            <Table 
              parts = {this.state.parts}
            />
          </div>
          <div className="col-md-4">
            <Donut 
              parts = {this.state.parts}
            />
          </div>
        </section>
      </div>
    );
  };
};

export default App;
