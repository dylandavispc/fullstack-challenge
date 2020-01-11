import React, { Component } from "react";
import {Doughnut} from 'react-chartjs-2';
import "./style.css";

// const data = {

// 	labels: [],
// 	datasets: [{
// 		data: [],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
//         '#FFCE56',
//         '#FF6384',
// 		'#36A2EB',
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
//         '#FFCE56',
//         '#FF6384',
// 		'#36A2EB',
// 		]
// 	}]
// };

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
    // componentDidUpdate = () => {
    //     this.fillChart();
    // };

    op = (names, parts) => {
        // console.log(names)
        // console.log(parts)
        const data = {
            labels: names,
            datasets: [{
                data: parts,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                ]
            }]
        };
        return data;
    }

    fillChart = () => {
        // console.log("form", this.props.parts);
        const proper = this.props.parts;
        let names = [];
        let parts = [];
        // console.log(data.labels)
        // console.log(data.datasets[0].data)
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