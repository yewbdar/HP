import React ,{Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class  CreateAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName:"",
            password:"",
            conformPassword:"",

        };

    }

    handleChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name] : value});
        console.log(value)

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-left" >
                        <TextField
                            id="userName"
                            label="User Name"
                            value={this.state.userName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="userName"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-left" >
                        <TextField
                            id="password"
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            margin="normal"
                            name="password"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-left" >
                        <TextField
                            id="conformPassword"
                            label="conformPassword"
                            value={this.state.conformPassword}
                            onChange={this.handleChange}
                            margin="normal"
                            name="conformPassword"
                            fullWidth
                        />
                    </div>
                </div>

                </div>


            // {this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node}
            //

        )
    }
}

export default CreateAccount;







