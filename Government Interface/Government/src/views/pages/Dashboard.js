import React, { Component } from 'react';
import reactFeature from '../../assets/images/react-feature.svg';
import sassFeature from '../../assets/images/sass-feature.svg';
import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
import responsiveFeature from '../../assets/images/responsive-feature.svg';
import { Card, CardBody, Row, Col } from 'reactstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { Button, Form, FormGroup, Label, Input, FormText,   } from 'reactstrap';
import { contractAddress,ABI} from './Constants'

const isEthereumAddress = require('is-ethereum-address');
  
const Web3=require('web3')
let MyContract 


class Dashboard extends Component {

  constructor(){
    super()
    this.state={
      orgName:'',
      certName:'',
      date:'',
      role:'0',
      pubKey:'0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      isKey:false,
      transactionHash:''

    }
  }



  async  createCertFun(e){
  
    const {orgName,certName,date,pubKey,role,isKey}=this.state
    console.log(orgName,certName,date,pubKey,role)

  if(orgName!=='' && orgName!==undefined && 
      certName!=='' && certName!==undefined && date!==''
      && date!==undefined  && pubKey!==''
      && pubKey!==undefined && role!=='' && role!==undefined ){
  
        var web3;
        let ethereum = window.ethereum;
        console.log('ethereum',window.ethereum)

        web3 = new Web3(window.web3.currentProvider);

        const account = await ethereum.enable();
        const MyContract = new web3.eth.Contract(ABI, contractAddress);
      
        // let that = this;
        // const accounts = await web3.eth.getAccounts();
        // console.log('account ----->',accounts)
        // console.log('MyContract---->',MyContract)

        // console.log('MyContract.methods------->',MyContract.methods)


        try{
          console.log('encode ABI',MyContract.methods.getSupplierACert().encodeABI())
          
          let that = this
          const accounts = await web3.eth.getAccounts();
          await MyContract.methods.createAndSendCertificate(pubKey,orgName,certName,date,role)
          .send({
                  from: accounts[0]
              }).on('transactionHash',(hash) =>{
                  console.log(hash)
                  that.setState({transactionHash : 'https://rinkeby.etherscan.io/tx/'+hash})
              }).on('confirmation', function(confirmationNumber,receipt){
                if(confirmationNumber ===1){
                  console.log(receipt)
                  console.log("Transaction confirmed");
                  alert('Transaction has been Confirmed !')
                }
                  
                 
              });
}
        catch (e){
console.log('error----->',e.message)

        }
      }
      else{
        alert('Please fill all fields properly')
      }

  }



  render() {
    const heroStyles = {
      padding: '50px 0 70px'
    };

    return (
      <MDBContainer style={{height:'100px',marginTop:'10px',marginLeft:'300px'}}>
       <MDBRow>
         <MDBCol md='5' >
          <MDBCard>
            <MDBCardBody>
             <form onSubmit={(e)=>{e.preventDefault()}}>
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
                  onChange={(e)=>{this.setState({orgName:e.target.value})}}
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
                  onChange={(e)=>{this.setState({certName:e.target.value})}}

                />
                <br />


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
                  onChange={(e)=>{this.setState({date:e.target.value})}}

                />
                <br />
        
           <FormGroup>
         
          <Label for="exampleSelect">Part A owned by Manufacturer</Label>
          <Input type="select" name="select" id="exampleSelect" onChange={(e)=>{this.setState({role:e.target.value})}}>
            <option value='0' >Supplier</option>
            <option value='1'>Manufacturer</option>
           </Input>
        </FormGroup>


                <br />

        


                <FormGroup>
            <Label for="exampleSelect">Public key</Label>
            <Input type="select" onChange={(e)=>{this.setState({pubKey:e.target.value})}} name="select" id="exampleSelect">
            <option value='0x2A4651384C70c532d58B2c534A2567c06A21CAd9'>Supplier A: 0x2A4651384C70c532d58B2c534A2567c06A21CAd9</option>
            <option value='0x7495DaFE58922E07889b013CBd36974422e9c570'>Supplier B: 0x7495DaFE58922E07889b013CBd36974422e9c570</option>
            <option value='0x807355F485B193A502523EC4147468D63B4A9C87'>Manufacturer: 0x807355F485B193A502523EC4147468D63B4A9C87</option>

            </Input>
            </FormGroup>

              

                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-blue" type="submit" onClick={(e)=>this.createCertFun(e)}>
                    Create 
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default Dashboard;


/////////////////////////////////////////////////////////////////////////


