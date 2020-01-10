// import React from 'react';

// const Certificate = () => {
//   return (
//     <div>
//       <h1>
//           Certficate
//       </h1>
//     </div>
//   );
// };

// export default Certificate;

import React, { Component } from 'react'
import {
    Card,
    CardBody,
    Table,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup, Label, Input,
  } from 'reactstrap';


export default class Certificate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>

        

            <Card>
                <CardBody style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
                    <Button color="primary" onClick={this.toggle}  >Send Part A</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}  style={{marginTop:"180px"}}>
                        <ModalHeader toggle={this.toggle}>Send Part A</ModalHeader>
                        <ModalBody>
                               <FormGroup>
                                <Label for="name">Public Key</Label>
                                <Input type="text" name="name" id="name" placeholder="Enter publc key here ... " />
                                </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Send</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
        

            <Card>
            <CardBody>
               
                <Table hover>
                    <thead>
                        <tr>
                            <th style={{fontWeight:'bold'}}>#</th>
                            <th style={{fontWeight:'bold'}}>Name of Organization</th>
                            <th style={{fontWeight:'bold'}}>Name of Certificate</th>
                            <th style={{fontWeight:'bold'}}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
                
        </div>
        )
    }
}
