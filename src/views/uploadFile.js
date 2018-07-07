import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../components/Card/Card.jsx";


class uploadFile extends Component {
    constructor(){
        super();
        this.state = {
            url:''
        }
    }
    handleUploadImage = () =>{
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState({ imageURL: `http://localhost:8000/${body.file}` });
            });
        });
    };

    render() {

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Create Profile"
                                category="Profile Registration"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <div >

                                        <form onSubmit={this.handleUploadImage}>
                                            <div>
                                                <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                                            </div>
                                            <div>
                                                <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
                                            </div>
                                            <br />
                                            <div>
                                                <button>Upload</button>
                                            </div>
                                            <img src={this.state.imageURL} alt="img" />
                                        </form>
                                    </div>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default uploadFile;
