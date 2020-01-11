import React, { Component } from "react";
import {Doughnut} from 'react-chartjs-2';
import "./style.css";

const options = {
    legend: {
        display: false
    }
};

export default class Donut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            parts: []
        };
        this.op = this.op.bind(this);
        this.fillChart = this.fillChart.bind(this);
    };

    // Functions

    op = (names, parts) => {
        const data = {
            labels: names,
            datasets: [{
                data: parts,
                backgroundColor: [
                '#66ffcc',
                '#66ccff',
                '#cc99ff',
                '#ff99cc',
                '#ffcc99',
                '#99ff66',
                '#00ff00',
                '#00ffff',
                '#ff66ff',
                '#ff5050',
                ],
                hoverBackgroundColor: [
                '#66ffcc',
                '#66ccff',
                '#cc99ff',
                '#ff99cc',
                '#ffcc99',
                '#99ff66',
                '#00ff00',
                '#00ffff',
                '#ff66ff',
                '#ff5050',
                ]
            }]
        };
        return data;
    }

    fillChart = () => {
        let names = [];
        let parts = [];
        this.props.parts.map((x) => {
            const { firstName, lastName, part } = x;
            let name = firstName + " " + lastName;
            names.push(name);
            parts.push(part);
        });
        const chart = this.op(names, parts);
        console.log(chart)
        return chart;
    };

    // Render
    render() {
        return (
            <div>
                <Doughnut data={this.fillChart()} options={options} />
            </div>
        );
    };
};