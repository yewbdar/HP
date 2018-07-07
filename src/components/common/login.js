import React ,{Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class  Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName:"",
            password:""

        };

    }

    handleChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name] : value});
        console.log(value)

    }
    componentDidMount() {
        //after component loads bring data
        // this.setState({article:getArticles()})


    }
    handleSubmitButton=(event)=> {
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
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
                    <div className="col-lg-4 col-md-6 col-sm-12 align-self-end" >
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
                   <div class="col-lg-4 col-md-6 col-sm-12" >
                        <Button variant="outlined" color="primary" onClick={this.handleSubmitButton}>
                            login
                        </Button>
                    </div>
                </div>

                {/*<pre>{JSON.stringify(this.props.articles.articles, null, 2) }</pre>

                 <Grid

                 dataset={this.props.articles.articles}
                 header={["ID#","Title","Text","Action"]}
                 headerMapping={["id","title","text"]}
                 actionNames={["Open", "Give Review"]}
                 handleAction = {this.handleAction}
                 />*/}
            </div >


            // {this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node}
            //

        )
    }
}

export default Login;







