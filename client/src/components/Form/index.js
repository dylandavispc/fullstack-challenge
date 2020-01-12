import React from "react";
import axios from "axios";
import "./style.css";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            part: ""
        };
        this.onChange = this.onChange.bind(this);
        this.numberVerify = this.numberVerify.bind(this);
        this.submit = this.submit.bind(this);
        this.add = this.add.bind(this);
        this.post = this.post.bind(this);
    };

    // Functions
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    //!!! Checks if number before submitting to onChange Function
    numberVerify = e => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.onChange(e);
        };
    };

    submit = event => {
        event.preventDefault();
        //!!! Checking to see if participation exceeds the maximum participation percentage
        //!!! or participant count exceeds 10
        let newPart = parseInt(this.state.part);
        let sum = this.add();
        let partLength = this.props.parts.length;
        if (sum + newPart <= 100 && partLength < 11) {
            this.post();
            setTimeout(() => {
                this.props.reload();
            }, 200);
            
            // alert("Participant Added!!!");
        }
        else {
            alert("Participation percentage cannot exceed 100% or 10 participants. Please remove participant or input smaller percentage before sending.");
        };
    };

    add = () => {
        let sum = 0;
        this.props.parts.map((x) => {
            sum += x.part;
        });
        return sum;
    }

    post = () => {
        const { fName, lName, part } = this.state;
        axios.post("/api/form", {
            firstName: fName,
            lastName: lName,
            part: part
        })
        .then(res => {
            //!!! if success: empty form and re-render
            if (res.status === 200) {
                this.setState({
                    fName : "", 
                    lName : "", 
                    part : ""
                });
            };
        });
    };

    // Render
    render() {
        return (
            <div>
                <nav className="navbar">
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input 
                                name="fName"
                                value={this.state.fName}
                                type="text" 
                                className="form-control" 
                                placeholder="First name" 
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            <input 
                                name="lName"
                                value={this.state.lName}
                                type="text" 
                                className="form-control" 
                                placeholder="Last name" 
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            <input 
                                name="part"
                                value={this.state.part}
                                type="text"
                                className="form-control" 
                                placeholder="Participation" 
                                onChange={this.numberVerify}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-success mb-2" 
                            onClick={this.submit}
                            disabled={!(this.state.fName && this.state.lName && this.state.part)}
                        >
                            Send
                        </button>
                    </div>
                </form>
                </nav>
                
            </div>
        );
    };
};