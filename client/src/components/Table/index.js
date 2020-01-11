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
        // console.log("form", this.props.parts);
        return this.props.parts.map((x) => {
            const { id, firstName, lastName, part } = x;
            return (
                <tr key={id}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{part}%</td>
                    <td>
                        <button onClick={() => {this._handleDelete(id) }}>X</button>
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
                <table>
                    <thead>
                        <tr>
                            <th>First</th>
                            <th>Last</th>
                            <th>Participation</th>
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