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
      parts : [],
      loaded: false
    };
    this.getParts = this.getParts.bind(this);
    this.loader = this.loader.bind(this);
  };

  // Functions
  componentDidMount() {
    this.getParts();
  };

  componentDidUpdate = () => {
    if (!this.state.loaded) {
      this.getParts();
    };
  };

  getParts() {
    this.setState({
      loaded: true
    })
    axios.get("/api/form").then(response => {
      if (response.data) {
        this.setState({
          parts : response.data
        });
      }
    })
  };

  loader() {
    console.log("loading")
    this.setState({
      loaded: false
    });
  };

  // App Render
  render() {
    return (
      <div>
        <div className="navRow">
          
        </div>
        <div className="container">
          <section className="row">
            <div className="col-md-12">
            <Form 
            parts = {this.state.parts}
            reload = {this.loader}
          />
            </div>
          </section>
          <section className="row">
            <div className="col-md-12 text-center headDiv">
              <h1>Data!</h1>
              <h3>Lorem Ipsum...</h3>
            </div>
          </section>
          <section className="row meat">
          <div className="col-sm-6 order-md-2 donut">
              <Donut 
                parts = {this.state.parts}
              />
            </div>
            <div className="col-sm-6 order-md-1">
              <Table 
                parts = {this.state.parts}
                reload = {this.loader}
              />
            </div>

          </section>
          
        </div>
        <footer className="footer">
          <p>dylandavispc@gmail.com</p>
        </footer>
      </div>
      
    );
  };
};

export default App;
