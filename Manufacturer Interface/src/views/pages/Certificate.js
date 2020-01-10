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
      validManuf: false,
      manuf_PK: '',


    };

    this.toggle = this.toggle.bind(this);
  }

  async componentDidMount() {
    this.getProductTable();
    const pk4 = await this.getManuf_PK();

    this.setState({ manuf_PK: pk4 });
  }

  componentDidUpdate() {

    this.verifySupplier();


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


  async verifySupplier() {

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


  async getProductTable() {


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
    } catch (e) {
      console.log(e.message);
    }

  }


  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }


  render() {


    return (

      <div>
        {
          this.state.validManuf ?


            <div>

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
                            <td>{inx} </td>
                            <td>{val} </td>
                          </tr>
                        );

                      })
                    }

                    </tbody>
                  </Table>
                </CardBody>
              </Card>

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
