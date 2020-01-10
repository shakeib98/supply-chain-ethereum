import React, { Component } from 'react';
import reactFeature from '../../assets/images/react-feature.svg';
import sassFeature from '../../assets/images/sass-feature.svg';
import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
import responsiveFeature from '../../assets/images/responsive-feature.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import {
  Card,
  CardBody,
  Table,
  Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';
import './dashboard.css';

import { contractAddress, ABI } from './Constants';
// import { threadId } from 'worker_threads';

const isEthereumAddress = require('is-ethereum-address');
const Web3 = require('web3');


var web3;
let ethereum = window.ethereum;
console.log('ethereum', window.ethereum);

web3 = new Web3(window.web3.currentProvider);

const MyContract = new web3.eth.Contract(ABI, contractAddress);

console.log(MyContract.methods);


class Dashboard extends Component {


  constructor() {
    super();
    this.state = {
      orgName: '',
      certName: '',
      serialID: '',
      date: '',
      supplierCert: '',
      manufACert: '',
      manufBCert: '',
      pubKey: '0x807355F485B193A502523EC4147468D63B4A9C87',
      isKey: false,
      dropGovtArr: [],
      dropSupA_Arr: [],
      dropSupB_Arr: [],
      modal: false,
      modal1: false,
      selectedDrop: '',

      manuf_PK: '',


      finalArr: [],
    };

    // this.toggle = this.toggle.bind(this);
    this.verifyManuf();
    this.toggle1 = this.toggle1.bind(this);


  }

  async componentDidMount() {

    const pk4 = await this.getManuf_PK();

    this.setState({ manuf_PK: pk4 });

    this.dropGovtFun();
    this.dropSupAFun();
    this.dropSupBFun();


  }


  componentDidUpdate() {

    this.verifyManuf();


  }


  async getManuf_PK() {
// getManufacturerAddress()
    var web3;
    let ethereum = window.ethereum;
// console.log('ethereum',window.ethereum)

    web3 = new Web3(window.web3.currentProvider);

    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI, contractAddress);
    const accounts = await web3.eth.getAccounts();

    return new Promise((resolve, rej) => {
      MyContract.methods.getManufacturerAddress().call({ from: accounts[0] })
        .then((res) => {
          // console.log('getAk',res)
          resolve(res);

        });
    });

  }


  async verifyManuf() {

    var web3;
    let ethereum = window.ethereum;
// console.log('ethereum', window.ethereum)

    web3 = new Web3(window.web3.currentProvider);

    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI, contractAddress);
    const { orgName, certName, date, pubKey, certList, isKey, serialID } = this.state;

// console.log(MyContract.methods)
    const accounts = await web3.eth.getAccounts();
// console.log('Logoin account',accounts[0])


    if (accounts[0].toLowerCase() == this.state.manuf_PK.toString().toLowerCase()) {
      this.setState({ validManuf: true });
    }

  }


  toggle(inp) {
    const { dropGovtArr, dropSupA_Arr, dropSupB_Arr } = this.state;

    if (inp == '0') {
      this.setState({ finalArr: [...dropGovtArr], selectedDrop: '0' });
      console.log('Govt Arr', dropGovtArr);
    } else if (inp == '1') {
      this.setState({ finalArr: [...dropSupA_Arr], selectedDrop: '1' });
      console.log('Sup A Arr', dropSupA_Arr);


    } else if (inp == '2') {
      this.setState({ finalArr: [...dropSupB_Arr], selectedDrop: '2' });
      console.log('Sup B Arr', dropSupB_Arr);


    } else {
      // alert('lg gay')
    }


    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }


  selectRow(e) {
    const { selectedDrop, supplierCert, manufACert, manufBCert } = this.state;
    console.log('Target Value', typeof (e), e);
    if (selectedDrop == '0') {
      this.setState({ selctKey: e, modal: true, supplierCert: e });

    } else if (selectedDrop == '1') {
      this.setState({ selctKey: e, modal: true, manufACert: e });


    } else if (selectedDrop == '2') {
      this.setState({ selctKey: e, modal: true, manufBCert: e });

    } else {
      console.log('none selecxted');
    }
    this.setState({ selctKey: e, modal: true, certList: e });

    this.toggle();


  }


  toggle1() {
    this.setState(prevState => ({
      modal1: !prevState.modal1,
    }));
  }

//govtDropdown

  async dropGovtFun() {


    const account = await ethereum.enable();
    const accounts = await web3.eth.getAccounts();


    try {

      MyContract.methods.getManufacturereCertG().call({ from: accounts[0] })
        .then((result) => {
          console.log('govt drop', result);
          var tempArr = [];
          result.map((val, inx) => {
            MyContract.methods.govtToManufacturerHistory(val).call({ from: accounts[0] })
              .then((res) => {
                console.log('govt res', res);
                if (res.used == false) {

                  //  tempArr.push(res)
                  this.state.dropGovtArr.push(res.hash);
                }
              });
          });
          console.log(tempArr);
          this.setState({ dropGovtArr: this.state.dropGovtArr });
          console.log('GovtFun Arr', this.state.dropGovtArr);
        });
    } catch (e) {
      console.log(e.message);
    }


  }

// dropdown supplierA


  async dropSupAFun() {


    const account = await ethereum.enable();
    const accounts = await web3.eth.getAccounts();


    try {

      MyContract.methods.getManufacturerCertA().call({ from: accounts[0] })
        .then((result) => {
          // console.log(result)
          var tempArr = [];
          result.map((val, inx) => {
            MyContract.methods.supplierAToManufacturerHistory(val).call({ from: accounts[0] })
              .then((res) => {
                //  console.log(res)
                if (res.used == false && res.hash != '0x0000000000000000000000000000000000000000000000000000000000000000') {

                  //  tempArr.push(res)
                  this.state.dropSupA_Arr.push(res.hash);
                }
              });
          });
          console.log(tempArr);
          this.setState({ dropSupA_Arr: this.state.dropSupA_Arr });
          console.log('Sup A Fun', this.state.dropSupA_Arr);
        });
    } catch (e) {
      console.log(e.message);
    }


  }


//dropdown sup B
  async dropSupBFun() {


    const account = await ethereum.enable();
    const accounts = await web3.eth.getAccounts();


    try {

      MyContract.methods.getManufacturerCertB().call({ from: accounts[0] })
        .then((result) => {
          // console.log(result)
          var tempArr = [];
          result.map((val, inx) => {
            MyContract.methods.supplierBToManufacturerHistory(val).call({ from: accounts[0] })
              .then((res) => {
                //  console.log(res)

                if (res.used == false && res.hash != '0x0000000000000000000000000000000000000000000000000000000000000000') {

                  //  tempArr.push(res)
                  this.state.dropSupB_Arr.push(res.hash);
                }
              });
          });
          console.log(tempArr);
          this.setState({ dropSupB_Arr: this.state.dropSupB_Arr });
          console.log('Sup B Fun', this.state.dropSupB_Arr);
        });
    } catch (e) {
      console.log(e.message);
    }


  }

//create product Manufacturer


  async manufProductFun() {

    const { orgName, certName, date, manuf_PK, serialID, supplierCert, manufACert, manufBCert } = this.state;

    this.toggle1();
    console.log(orgName, certName, date, manuf_PK, serialID, supplierCert, manufACert, manufBCert);


    if (orgName !== '' && orgName !== undefined &&
      certName !== '' && certName !== undefined && date !== ''
      && date !== undefined && manuf_PK !== ''
      && manuf_PK !== undefined
      && supplierCert !== '' && supplierCert !== undefined
      && manufACert !== '' && manufACert !== undefined &&
      manufBCert !== '' && manufBCert !== undefined
      && serialID !== '' && serialID !== undefined

    ) {


      var web3;
      let ethereum = window.ethereum;
      console.log('ethereum', window.ethereum);

      web3 = new Web3(window.web3.currentProvider);

      const account = await ethereum.enable();
      const MyContract = new web3.eth.Contract(ABI, contractAddress);


      try {

        var that = this;
        const accounts = await web3.eth.getAccounts();
        await MyContract.methods.createProduct(manuf_PK, orgName, certName, serialID, date, supplierCert, manufACert, manufBCert)
          .send({
            from: accounts[0],
          }).on('transactionHash', (hash) => {
            console.log(hash);
            that.setState({ transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash });
          }).on('confirmation', function(confirmationNumber, receipt) {
            if (confirmationNumber === 2) {
              console.log('Transaction confirmed');
              console.log(receipt);
              alert('Transaction has been confirmed.');
              that.toggle1();
            }

          });

      } catch (e) {
        console.log('error----->', e.message);
        this.toggle1();


      }


    } else {
      alert('Please fill all fields properly');
      this.toggle1();

    }


  }


  render() {
    const heroStyles = {
      padding: '50px 0 70px',
    };


    return (
      // style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',overflowWrap:'break-word' }}

      <div>
        {
          this.state.validManuf ?


            <div>

              <Card>
                {/* <CardBody > */}
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()}
                       style={{ marginTop: '180px', width: '100%', backgroundColor: 'transparent' }}>
                  <ModalHeader
                    toggle={() => this.toggle()}
                  >Select Certificate</ModalHeader>
                  <ModalBody style={{ overflowWrap: 'break-word' }}>

                    <FormGroup>


                      {


                        this.state.finalArr.length != 0 &&
                        this.state.finalArr.map((val, inx) => {
                          return (


                            <Input type="text" name="name" id="name" onClick={() => this.selectRow(val)} value={val}
                                   placeholder="Enter publc key here ... "/>

                          );

                        })
                        // :

                        //   <h2>No Hash</h2>

                      }


                    </FormGroup>

                  </ModalBody>

                </Modal>
                {/* </CardBody> */}
              </Card>


              <div>

                <Card>
                  {/* <CardBody style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}> */}
                  <Modal isOpen={this.state.modal1}

                         style={{ marginTop: '180px' }}>
                    <ModalBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </ModalBody>

                  </Modal>
                  {/* </CardBody> */}
                </Card>

                <MDBContainer style={{ height: '100px', marginLeft: '300px' }}>
                  <MDBRow>
                    <MDBCol md='5'>
                      <MDBCard>
                        <MDBCardBody>
                          <form onSubmit={(e) => {
                            e.preventDefault();
                          }}>
                            <label
                              htmlFor="defaultFormCardNameEx"
                              className="grey-text font-weight-light"
                            >
                              Name of Organization
                            </label>
                            <input
                              type="text"
                              id="defaultFormCardNameEx"
                              className="form-control"
                              value={this.state.orgName}
                              onChange={(e) => {
                                this.setState({ orgName: e.target.value });
                              }}
                            />
                            <br/>

                            <label
                              htmlFor="defaultFormCardNameEx"
                              className="grey-text font-weight-light"
                            >
                              Type of Product
                            </label>
                            <input
                              type="text"
                              id="defaultFormCardNameEx"
                              className="form-control"
                              value={this.state.certName}
                              onChange={(e) => {
                                this.setState({ certName: e.target.value });
                              }}
                            />
                            <br/>


                            <label
                              htmlFor="defaultFormCardEmailEx"
                              className="grey-text font-weight-light"
                            >
                              Serial ID
                            </label>
                            <input
                              type="text"
                              id="defaultFormCardEmailEx"
                              className="form-control"
                              value={this.state.serialID}
                              onChange={(e) => {
                                this.setState({ serialID: e.target.value });
                              }}
                            />

                            <br/>

                            <label
                              htmlFor="defaultFormCardEmailEx"
                              className="grey-text font-weight-light"
                            >
                              Date
                            </label>
                            <input
                              type="date"
                              id="defaultFormCardEmailEx"
                              className="form-control"
                              value={this.state.date}
                              onChange={(e) => {
                                this.setState({ date: e.target.value });
                              }}
                            />


                            <br/>

                            <Button color="primary"
                                    style={{ paddingRight: '25px', marginLeft: '30px', textTransform: 'none' }}
                                    onClick={() => this.toggle('0')}>Certificates owned by Supplier</Button>
                            <Button color="primary"
                                    style={{ marginLeft: '30px', textTransform: 'none', paddingRight: '25px' }}
                                    onClick={() => this.toggle('1')}> Part A owned by Manufacturer </Button>
                            <Button color="primary"
                                    style={{ marginLeft: '30px', textTransform: 'none', paddingRight: '25px' }}
                                    onClick={() => this.toggle('2')}> Part B owned by Manufacturer </Button>


                            <div className="text-center py-4 mt-3">
                              <MDBBtn className="btn btn-outline-blue" type="submit"
                                      onClick={(e) => this.manufProductFun(e)}>
                                Create Product
                                <MDBIcon far icon="paper-plane" className="ml-2"/>
                              </MDBBtn>
                            </div>
                          </form>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>

            </div>

            :

            <div>
              <h2>Plesae Wait !</h2>
              <h3>Login with Valid Metamask account and Refresh the page </h3>
            </div>
        }
      </div>
    );
  }
}

export default Dashboard;


/////////////////////////////////////////////////////////////////////////


