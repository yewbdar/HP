import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Card from "../../components/Card/Card.jsx";


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

                                        <form onSubmit={this.handleUploadImage} encType="multipart/form-data">
                                            <div>
                                                <input  type="file" name="file" id="file" class="custom-file-input" />
                                                <label for="file" class="custom-file-label"> Choose File </label>
                                            </div>
                                            <div>
                                                <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
                                            </div>
                                            <br />
                                            <div>

                                                <div className="row">
                                                <div class="col-lg-4 col-md-6 col-sm-12" >
                                                <Button variant="outlined" color="primary" onClick={this.handleSubmitButton} >
                                                    Upload
                                                </Button>
                                                </div>
                                                </div>







                                                {/*<button>Upload</button>*/}
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
