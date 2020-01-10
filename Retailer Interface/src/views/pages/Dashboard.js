import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Table,
  Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';
import { contractAddress, ABI } from './Constants';

const isEthereumAddress = require('is-ethereum-address');
const Web3 = require('web3');


export default class Certificate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      orgName: '',
      certName: '',
      date: '',
      role: '0',
      pubKey: '',
      isKey: false,
      selectedHash: '',
      getProductArr: [],
      productsArr: [],
      pbKey:String


    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }


  async getAllProducts() {


    var web3;
    let ethereum = window.ethereum;
    console.log('ethereum', window.ethereum);

    web3 = new Web3(window.web3.currentProvider);

    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI, contractAddress);

    console.log(MyContract.methods);
    const accounts = await web3.eth.getAccounts();

    try {
      MyContract.methods.getProductCert().call({ from: accounts[0] })
        .then((result) => {
          console.log(result);
          this.setState({ getProductArr: [...result] });


        });

      MyContract.methods.getManufacturerAddress().call({from:accounts[0]})
        .then((res)=>{
          console.log(res)
          this.setState({pbKey:res})
        })
    } catch (e) {
      console.log(e.message);
    }

  }


  async getProductDetails(e) {


    var web3;
    let ethereum = window.ethereum;
    console.log('ethereum', window.ethereum);

    web3 = new Web3(window.web3.currentProvider);

    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI, contractAddress);

    console.log(MyContract.methods);
    const accounts = await web3.eth.getAccounts();

    try {
      MyContract.methods.getCertificateHistory(e).call({ from: accounts[0] })
        .then((result) => {
          console.log(result['0']);
          for (var key in result) {
            this.state.productsArr.push(result[key]);
          }
          this.setState({ productsArr: this.state.productsArr });
          console.log('Details Obj', this.state.productsArr);
          // console.log(this.state.getProductDetails['0'])


        });
    } catch (e) {
      console.log(e.message);
    }

  }

  selectRow(e) {
    console.log('Target Value', typeof (e), e);


    this.getProductDetails(e);
    this.setState({ pubKey: e, modal: true });


  }

  toggle() {

    this.setState(prevState => ({
      modal: !prevState.modal,
      productsArr: [],

    }));
  }


  // getIssuedCerts(){
  //     getSupplierACert()
  //     .then((arr)=>{
  //         arr.map((val,inx)=>{

  //             govtToSupplierAHistory(val)
  //         })
  //     })
  // }

  render() {

    var keys = [
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',

    ];
    return (
      <div>


        <Card>
          <CardBody style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            {/* <Button color="primary" onClick={this.toggle}  >Send Part A</Button> */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop: '180px' }}>
              <ModalHeader toggle={this.toggle}>Send Part A</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label for="name">Porducer's Address</Label>
                  <Input type="text" name="name" id="name" value={this.state.pbKey}
                         placeholder="Enter publc key here ... "/>

                  <Label for="name">Product</Label>
                  <Input type="text" name="name" id="name" value={this.state.productsArr[0]}
                         placeholder="Enter publc key here ... "/>

                  <Label for="name">Sup A</Label>
                  <Input type="text" name="name" id="name" value={this.state.productsArr[1]}
                         placeholder="Enter publc key here ... "/>

                  <Label for="name">Sup B</Label>
                  <Input type="text" name="name" id="name" value={this.state.productsArr[2]}
                         placeholder="Enter publc key here ... "/>

                  <Label for="name">Manufacturer</Label>
                  <Input type="text" name="name" id="name" value={this.state.productsArr[3]}
                         placeholder="Enter publc key here ... "/>

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
                <th style={{ fontWeight: 'bold' }}>#</th>
                <th style={{ fontWeight: 'bold' }}>HASH</th>

              </tr>
              </thead>
              <tbody>
              {
                this.state.getProductArr.map((val, inx) => {
                  return (


                    <tr>
                      <td>{inx}</td>
                      <td onClick={() => this.selectRow(val)}>{val} </td>
                    </tr>
                  );

                })
              }

              </tbody>
            </Table>
          </CardBody>
        </Card>

      </div>
    );
  }
}
