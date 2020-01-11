import React, { Component } from "react";
import {Doughnut} from 'react-chartjs-2';
import "./style.css";

const data = {

	labels: ["yo", "dog", "yo"],
	datasets: [{
		data: [20, 40, 20],
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

const options = {
    legend: {
        display: false
    }
};

export default class Donut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
        this.fillChart = this.fillChart.bind(this);
    };

    // Functions
    componentDidUpdate = () => {
        if (this.state.loaded === false) {
            this.fillChart();
        };
    };

    fillChart= () => {
        this.setState({
            loaded: true
        })
        // console.log("form", this.props.parts);
        const props = this.props.parts;
        console.log(props)
        console.log()
        // this.props.parts.map((x) => {
        //     const { id, firstName, lastName, part } = x;
        //         console.log(data.datasets.data)
        //         data.datasets.data.push(part);
        //         data.labels.push(firstName + " " + lastName);
        // });
    };

    // Render
    render() {
        return (
            <div>
                <Doughnut data={data} options={options} />
            </div>
        );
    };
};