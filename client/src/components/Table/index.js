import React from "react";
import axios from "axios";
import "./style.css";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.fillForm = this.fillForm.bind(this);
        this._handleDelete = this._handleDelete.bind(this);
    };

    // Functions
    componentDidUpdate = () => {
        this.fillForm()
    }

    fillForm = () => {
        let i = 0;
        const colors = [
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
        ];
        const colorPicker = () => {
            const trStyle = {backgroundColor: colors[i]}
            i++;
            return trStyle;
        }
        return this.props.parts.map((x) => {
            const { id, firstName, lastName, part } = x;
            return (
                <tr style={colorPicker()} key={id}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{part}%</td>
                    <td>
                        <button className="delete" onClick={() => {this._handleDelete(id) }}>X</button>
                    </td>
                </tr>
            );
        });
    };

    _handleDelete = (id) => {
        const URL = `/api/form/${id}`;
        console.log(URL);
        axios.delete(URL)
            .then(res => {
                this.props.reload();
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    // Render
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col-md-4">First</th>
                            <th scope="col-md-4">Last</th>
                            <th scope="col-md-3">Participation</th>
                            <th scope="col-md-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fillForm()}
                    </tbody>
                </table>
            </div>
        );
    };
};