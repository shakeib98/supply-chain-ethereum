import React, { Component } from 'react';
import reactFeature from '../../assets/images/react-feature.svg';
import sassFeature from '../../assets/images/sass-feature.svg';
import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
import responsiveFeature from '../../assets/images/responsive-feature.svg';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

import { Button, Form, FormGroup, Label, Input, FormText, } from 'reactstrap';
import {
  Card,
  CardBody,Table,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { contractAddress, ABI } from './Constants'
const isEthereumAddress = require('is-ethereum-address');




const Web3 = require('web3')
let MyContract

class Dashboard extends Component {

  constructor() {
    super()
    this.state = {
      orgName: '',
      certName: '',
      serialID: '',
      date: '',
      certList: '',
      pubKey: '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      isKey: false,
      dropCertArr: [],
      modal: false,
      selctKey:'',
       keys:[
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
    
      ]
    }

    this.toggle = this.toggle.bind(this);


  }

componentDidMount(){
  this.supplierCerts_A()

}




  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }



  async supplierCerts_A() {
    console.log('supA chala')
    var web3;
    let ethereum = window.ethereum;
    console.log('ethereum', window.ethereum)

    web3 = new Web3(window.web3.currentProvider);

    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI, contractAddress);
    const { orgName, certName, date, pubKey, certList, isKey, serialID } = this.state

    console.log(MyContract.methods)
    const accounts = await web3.eth.getAccounts();
    console.log('Logoin account',accounts[0])

    try {

      MyContract.methods.getSupplierACert().call({ from: accounts[0] })
        .then((result) => {
          console.log(result)
          var tempArr = []
          result.map((val, inx) => {
            MyContract.methods.govtToSupplierAHistory(val).call({ from: accounts[0] })
              .then((res) => {
                 console.log(res)
                if (res.used == false) {

                  //  tempArr.push(res)
                 
                  this.state.dropCertArr.push(res.hash);

                }
              })
          })
         
          this.setState({ dropCertArr: this.state.dropCertArr })
          console.log('drop', this.state.dropCertArr)
        })
    }
    catch (e) {
      console.log(e.message)
    }






  }

  selectRow(e) {
    console.log('Target Value', typeof (e), e)
    this.setState({ selctKey: e, modal: true ,certList:e })

    this.toggle()



  }

  validateKey(e) {
    this.setState({
      pubKey: e
    })

    var keys = [
      '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      '0x7495DaFE58922E07889b013CBd36974422e9c570',
      '0x807355F485B193A502523EC4147468D63B4A9C87',

    ]

    if (isEthereumAddress(e) || e == keys[0] || e == keys[1] || e == keys[2]) {
      console.log('This is a valid Ethereum address, prefixed with a 0x');
      this.setState({ isKey: true })
    }
    else {
      console.log('glt hai ')

    }



  }




  async  createCertFun(e) {

    const { orgName, certName, date, pubKey, certList, isKey, serialID } = this.state
    console.log('create---->',orgName, certName, date, pubKey, certList, isKey, serialID)
    // this.supplierCerts_A()

    if (orgName !== '' && orgName !== undefined &&
      certName !== '' && certName !== undefined && date !== ''
      && date !== undefined && pubKey !== ''
      && pubKey !== undefined  &&
      certList !== '' && certList !== undefined
      && serialID !== '' && serialID !== undefined) {

      var web3;
      let ethereum = window.ethereum;
      console.log('ethereum', window.ethereum)

      web3 = new Web3(window.web3.currentProvider);

      const account = await ethereum.enable();
      const MyContract = new web3.eth.Contract(ABI, contractAddress);

      // let that = this;
      // const accounts = await web3.eth.getAccounts();
      // // console.log('account ----->',accounts)
      // // console.log('MyContract---->',MyContract)

      // // console.log('MyContract.methods------->',MyContract.methods)


      try {



        let that = this
        const accounts = await web3.eth.getAccounts();
        await MyContract.methods.
          createCertificateForManufacturer(accounts[0], orgName, certName, serialID.toString(), date.toString(), (certList).toString()).send({
            from: accounts[0]
          }).on('transactionHash', (hash) => {
            console.log(hash)
            that.setState({ transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash })
          }).on('confirmation', function (confirmationNumber,receipt) {
            if(confirmationNumber === 2){
              console.log("Transaction confirmed");
              console.log(receipt)
              alert('Transaction has been confirmed.')
            }
            

          });
      }
      catch (e) {
        console.log('error----->', e.message)

      }
    }
    else {
      alert('Please fill all fields properly')
    }

  }




  render() {
    const { dropCertArr } = this.state;
    console.log("captain america", dropCertArr[0]);
    const heroStyles = {
      padding: '50px 0 70px'
    };



    return (
      <div>
        <Card>
          <CardBody style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            {/* <Button color="primary" onClick={this.toggle}  >Send Part A</Button> */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop: "180px" }}>
              <ModalHeader toggle={this.toggle}>Send Part A</ModalHeader>
              <ModalBody>
              <Card>
            <CardBody>
                <Table hover >
                  <thead>
                    <tr style={{width:'200px'}}>
                      <th style={{ fontWeight: 'bold' }}>#</th>
                      <th style={{ fontWeight: 'bold' }}>HASH </th>

                    </tr>
                  </thead>
                  <tbody>

                    {
                      this.state.dropCertArr.length!=0 ?
                      this.state.dropCertArr.map((val, inx) => {
                        return (


                          <tr >
                            <td>{inx} </td>
                            <td onClick={() => this.selectRow(val)}>{val} </td>
                          </tr>
                        )

                      })
                      :
                      <tr >
                            <td> </td>
                            <td >No Hash </td>
                          </tr>
                    }

                  </tbody>
                </Table>
                </CardBody>
                </Card>

              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}  >Send</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>




        <MDBContainer style={{ height: '100px', marginLeft: '300px' }}>
          <MDBRow>
            <MDBCol md='5' >
              <MDBCard>
                <MDBCardBody>
                  <form onSubmit={(e) => { e.preventDefault() }} >

                    <div>
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
                        onChange={(e) => { this.setState({ orgName: e.target.value }) }}
                      />
                      <br />

                      <label
                        htmlFor="defaultFormCardNameEx"
                        className="grey-text font-weight-light"
                      >
                        Name of Certificate
                </label>
                      <input
                        type="text"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        value={this.state.certName}
                        onChange={(e) => { this.setState({ certName: e.target.value }) }}
                      />
                      <br />


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
                        onChange={(e) => { this.setState({ serialID: e.target.value }) }}
                      />

                      <br />


                      <label
                        htmlFor="defaultFormCardEmailEx"
                        classNa9me="grey-text font-weight-light"
                      >
                        Date
                </label>
                      <input
                        type="date"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        value={this.state.date}
                        onChange={(e) => { this.setState({ date: e.target.value }) }}

                      />
                      <br />

                      {/* <FormGroup>
                        <Label for="exampleSelect">Certificate owned by Supplier</Label>
                        <Input type="select" onChange={(e) => { this.setState({ certList: e.target.value }) }} name="select" id="exampleSelect"   >
                          {
                            this.state.dropCertArr.map((val, inx) => {
                              console.log('HAsh', val)
                              return (
                                <option value={val}>{val}</option>

                              )
                            }
                            )

                          }


                        </Input>

                      </FormGroup> */}


                      <Button color="primary" onClick={this.toggle}  >Select Hash</Button>




                      <br />
                      <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Public key
                </label>
                      <input
                        type="text"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        placeholder='Enter public key '
                        value='0x807355F485B193A502523EC4147468D63B4A9C87'
                        // onChange={(e) => this.validateKey(e.target.value)}

                      />

                      <div className="text-center py-4 mt-3">
                        <MDBBtn className="btn btn-outline-blue" type="submit" onClick={(e) => this.createCertFun(e)}>
                          Create
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                        </MDBBtn>
                      </div>
                    </div>

                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Dashboard;


/////////////////////////////////////////////////////////////////////////

