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
// import { Button, Form, FormGroup, Label, Input, FormText,   } from 'reactstrap';
import { contractAddress,ABI} from './Constants'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import {
  
  
  Table,
  Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup, Label, Input,
} from 'reactstrap';
// import { MDBSpinner } from 'mdbreact';
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
      transactionHash:'',
      modal:false,
      validGovtAcc:false,
      modalOpen:false,
      supA_PK:'',
      supB_PK:'',
      manuf_PK:'',
      govt_PK:'',


    }

    this.toggle = this.toggle.bind(this);

  }

  componentDidMount(){
    this.verifyGovt()
    this.getSupA_PK()
    this.getSupB_PK()
    this.getManuf_PK()
    this.getGovt_PK()

  

    

      


  }

  componentDidUpdate(){
    this.verifyGovt()
  }


  async getGovt_PK(){
  

    var web3;
    let ethereum = window.ethereum;
    console.log('ethereum',window.ethereum)
  
    web3 = new Web3(window.web3.currentProvider);
  
    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI, contractAddress);
    const accounts = await web3.eth.getAccounts();
  
  
    MyContract.methods.getGovtAddress().call({ from: accounts[0] })
    .then((res)=>{
      console.log('getAk',res)
      this.setState({govt_PK:res})
  
    })
  
  
  
  }

  
 async getSupA_PK(){
  

  var web3;
  let ethereum = window.ethereum;
  console.log('ethereum',window.ethereum)

  web3 = new Web3(window.web3.currentProvider);

  const account = await ethereum.enable();
  const MyContract = new web3.eth.Contract(ABI, contractAddress);
  const accounts = await web3.eth.getAccounts();


  MyContract.methods. getSupplierAAddress().call({ from: accounts[0] })
  .then((res)=>{
    console.log('getAk',res)
    this.setState({supA_PK:res})

  })



}

 async getSupB_PK(){
  // getSupplierBAddress()
  var web3;
  let ethereum = window.ethereum;
  console.log('ethereum',window.ethereum)

  web3 = new Web3(window.web3.currentProvider);

  const account = await ethereum.enable();
  const MyContract = new web3.eth.Contract(ABI, contractAddress);
  const accounts = await web3.eth.getAccounts();


  MyContract.methods. getSupplierBAddress().call({ from: accounts[0] })
  .then((res)=>{
    console.log('getAk',res)
    this.setState({supB_PK:res})


  })
  
}

async getManuf_PK()
{
  // getManufacturerAddress()
  var web3;
  let ethereum = window.ethereum;
  console.log('ethereum',window.ethereum)

  web3 = new Web3(window.web3.currentProvider);

  const account = await ethereum.enable();
  const MyContract = new web3.eth.Contract(ABI, contractAddress);
  const accounts = await web3.eth.getAccounts();


  MyContract.methods. getManufacturerAddress().call({ from: accounts[0] })
  .then((res)=>{
    console.log('getAk',res)
    this.setState({manuf_PK:res})


  })

}  


  async verifyGovt(){

    var web3;
  let ethereum = window.ethereum;
  // console.log('ethereum', window.ethereum)

  web3 = new Web3(window.web3.currentProvider);

  const account = await ethereum.enable();
  const MyContract = new web3.eth.Contract(ABI, contractAddress);

  // console.log(MyContract.methods)
  const accounts = await web3.eth.getAccounts();
  // console.log('Logoin account',accounts[0])


if(accounts[0].toLowerCase()==this.state.govt_PK.toString().toLowerCase()){
this.setState({validGovtAcc:true})
}




    

  }

myFun(){
alert('myFun')
}


toggle() {
  this.setState(prevState => ({
      modal: !prevState.modal
  }));
}

  async  createCertFun(e){

    this.setState({pubKey:this.state.govt_PK})
    this.toggle()
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
      


        try{

          console.log('toggle chala')
        
          console.log('encode ABI',MyContract.methods.getSupplierACert().encodeABI())
          
          let that = this
          const accounts = await web3.eth.getAccounts();

    console.log('toggle chala off krny wala')
    // new Promise( async (resolve,rej)=>{

       MyContract.methods.createAndSendCertificate(pubKey,orgName,certName,date,role)
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
          
          // resolve(this.toggle())
          that.toggle()
        }
        
      })   
      
    // })//promise
                
            
              
            
// this.toggle()

} 

        catch(e){
          // this.toggle()

console.log('error----->',e.message)

        }

        finally{
          // this.toggle()
        
             console.log('toggle chala finally wla')


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

<div >
{/* 
                     <div class="spinner-border" role="status" style={{ marginLeft:'50%',Zindex:'500',position:"fixed"}}>
                        <span class="sr-only">Loading...</span>
                     </div> */}

  {

    <Card>
                <CardBody style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
                    <Modal 
                    isOpen={this.state.modal}
                    //  toggle={this.toggle} 
                    style={{marginTop:"180px"}}>
                        <ModalBody  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>            
                          </ModalBody>
                        
                    </Modal>
                </CardBody>
            </Card>

    
                  }

<div>
{

  this.state.validGovtAcc ?


   
      <MDBContainer style={{height:'100px',marginTop:'10px',marginLeft:'300px',Zindex:'-1'}}>
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
                  Type of part
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
         
          <Label for="exampleSelect">Role</Label>
          <Input type="select" name="select" id="exampleSelect" onChange={(e)=>{this.setState({role:e.target.value})}}>
            <option value='0' >Supplier Certificate</option>
            <option value='1'>Manufacturer Certificate</option>
           </Input>
        </FormGroup>


                <br />

        


                <FormGroup>
            <Label for="exampleSelect">Public key</Label>
            <Input type="select" onChange={(e)=>{this.setState({pubKey:e.target.value})}} name="select" id="exampleSelect">
            <option value={this.state.supA_PK}>Supplier A: {this.state.supA_PK}</option>
            <option value={this.state.supB_PK}>Supplier B: {this.state.supB_PK}</option>
            <option value={this.state.manuf_PK}>Manufacturer: {this.state.manuf_PK}</option>

            </Input>
            </FormGroup>

         

              

                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-blue" type="submit" onClick={(e)=>this.createCertFun(e)}>
                    Create and send certificate
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
                

:
      <div>
        <h3>
          Please Login with a Valid Account and Refresh the page 
        </h3>
      </div>
                    }
                </div>
                  </div>
    );
  }
}

export default Dashboard;


/////////////////////////////////////////////////////////////////////////


