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
      // (name,date,quantity,addressOfManufacturer);
      name:"",
      quantity:'',
      addressOfManufacturer:'0x807355F485B193A502523EC4147468D63B4A9C87',
      orgName: '',
      certName: '',
      serialID: '',
      date: '',
      certList: '',
      pubKey: '0x2A4651384C70c532d58B2c534A2567c06A21CAd9',
      isKey: false,
      dropCertArr: [],
      modal: false,
      modal1:false,
      modal2:false,
      selctKey:'',
      validSupplier:false,
      supA_PK:'',
      supB_PK:'',
      manuf_PK:'',
      supC_PK:'',
      
    }
    this.verifySupplier()

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle.bind(this);


  }

async componentDidMount(){

  //const pk1=await this.getGovt_PK()
  const pk2=  await this.getSupA_PK()
  const pk3= await  this.getSupB_PK()
  const pk1= await  this.getSupC_PK()
  const pk4=await this.getManuf_PK()
  //govt_PK:pk1 = supC_PK:pk1
  this.setState({supC_PK:pk1,supA_PK:pk2,supB_PK:pk3,manuf_PK:pk4})
 
    this.supplierCerts_A()
 
    

}

componentDidUpdate(){

  this.verifySupplier()
  


}


// async supC_PK(){
  

//   var web3;
//   let ethereum = window.ethereum;
//   console.log('ethereum',window.ethereum)

//   web3 = new Web3(window.web3.currentProvider);

//   const account = await ethereum.enable();
//   const MyContract = new web3.eth.Contract(ABI, contractAddress);
//   const accounts = await web3.eth.getAccounts();

// return new Promise((resolve,rej)=>{
// //get supplier c
//   MyContract.methods.getSupplierAddressC().call({ from: accounts[0] })
//   .then((res)=>{
//     console.log('getAk',res)
//     resolve(res)
//   })
// })
// }
async getSupA_PK(){


var web3;
let ethereum = window.ethereum;
// console.log('ethereum',window.ethereum)

web3 = new Web3(window.web3.currentProvider);

const account = await ethereum.enable();
const MyContract = new web3.eth.Contract(ABI, contractAddress);
const accounts = await web3.eth.getAccounts();


return new Promise((resolve,rej)=>{

  MyContract.methods.getSupplierAddressA().call({ from: accounts[0] })
  .then((res)=>{
    console.log('getAk',res)
resolve(res)    
  })
})
}

async getSupB_PK(){
// getSupplierBAddress()
var web3;
let ethereum = window.ethereum;
// console.log('ethereum',window.ethereum)

web3 = new Web3(window.web3.currentProvider);

const account = await ethereum.enable();
const MyContract = new web3.eth.Contract(ABI, contractAddress);
const accounts = await web3.eth.getAccounts();

return new Promise((resolve,rej)=>{

  MyContract.methods. getSupplierAddressB().call({ from: accounts[0] })
  .then((res)=>{
    // console.log('getAk',res)
resolve(res)    
    
  })
})

}
async getSupC_PK(){


  var web3;
  let ethereum = window.ethereum;
  // console.log('ethereum',window.ethereum)
  
  web3 = new Web3(window.web3.currentProvider);
  
  const account = await ethereum.enable();
  const MyContract = new web3.eth.Contract(ABI, contractAddress);
  const accounts = await web3.eth.getAccounts();
  
  
  return new Promise((resolve,rej)=>{
  
    MyContract.methods.getSupplierAddressC().call({ from: accounts[0] })
    .then((res)=>{
      console.log('getAk',res)
  resolve(res)    
    })
  })
  }
async getManuf_PK()
{
// getManufacturerAddress()
var web3;
let ethereum = window.ethereum;
// console.log('ethereum',window.ethereum)

web3 = new Web3(window.web3.currentProvider);

const account = await ethereum.enable();
const MyContract = new web3.eth.Contract(ABI, contractAddress);
const accounts = await web3.eth.getAccounts();

return new Promise((resolve,rej)=>{
  MyContract.methods.getManufacturerAddress().call({ from: accounts[0] })
  .then((res)=>{
    // console.log('getAk',res)
resolve(res)    
    
  })
})

}  




   async verifySupplier(){

      var web3;
    let ethereum = window.ethereum;
    // console.log('ethereum', window.ethereum)

    web3 = new Web3(window.web3.currentProvider);

    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI, contractAddress);
    const { orgName, certName, date, pubKey, certList, isKey, serialID } = this.state

    // console.log(MyContract.methods)
    const accounts = await web3.eth.getAccounts();
    // console.log('Logoin account',accounts[0])

if(accounts[0].toLowerCase()==this.state.supC_PK.toString().toLowerCase()){
  this.setState({validSupplier:true});
  this.setState({name:"Egg"});

}
if(accounts[0].toLowerCase()==this.state.supA_PK.toString().toLowerCase()){
  this.setState({validSupplier:true});
  this.setState({name:"Yeast"});
}
if(accounts[0].toLowerCase()==this.state.supB_PK.toString().toLowerCase()){
    this.setState({validSupplier:true});
    this.setState({name:"Flour"});
}




      

    }




  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggle1() {
    this.setState(prevState => ({
      modal1: !prevState.modal1
    }));
  }
  toggle2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2
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

  
    // if(accounts[0]=='0x2A4651384C70c532d58B2c534A2567c06A21CAd9'){
    //  if(accounts[0].toLowerCase()==this.state.supA_PK.toString().toLowerCase()){
    // try {
    //   MyContract.methods.getSupplierAIngredients().call({ from: accounts[0] })
    //     .then((result) => {
    //       console.log(result)
    //       var tempArr = []
    //       // result.map((val, inx) => {
          //   MyContract.methods.govtToSupplierAHistory(val).call({ from: accounts[0] })
          //     .then((res) => {
          //        console.log(res)
          //       if (res.used == false) {

          //         //  tempArr.push(res)
                 
          //         this.state.dropCertArr.push(res.hash);

          //       }
          //     })
          // })
         
  //         this.setState({ dropCertArr: this.state.dropCertArr })
  //         console.log('drop', this.state.dropCertArr)
  //       })
  //   }
  //   catch (e) {
  //     console.log(e.message)
  //   }

  // }

//   else if(accounts[0].toLowerCase()==this.state.supB_PK.toString().toLowerCase()){
//   // else if(accounts[0]=='0x7495DaFE58922E07889b013CBd36974422e9c570'){

//     console.log('supB')

//     try {

//       MyContract.methods.getSupplierBIngredients().call({ from: accounts[0] })
//         .then((result) => {
//           console.log(result)
//           var tempArr = []
//           result.map((val, inx) => {
//             MyContract.methods.govtToSupplierBHistory(val).call({ from: accounts[0] })
//               .then((res) => {
//                  console.log(res)
//                 if (res.used == false) {

//                   //  tempArr.push(res)
                 
//                   this.state.dropCertArr.push(res.hash);

//                 }
//               })
//           })
         
//           this.setState({ dropCertArr: this.state.dropCertArr })
//           console.log('drop', this.state.dropCertArr)
//         })
//     }
//     catch (e) {
//       console.log(e.message)
//     }



  }

  selectRow(e) {
    console.log('Target Value', typeof (e), e)
    this.setState({ selctKey: e, modal: true ,certList:e })

    this.toggle()



  }




  async  createCertFun(e) {
    
    // const { orgName, certName, date, pubKey, certList, isKey, serialID } = this.state
    // console.log('create---->',orgName, certName, date, pubKey, certList, isKey, serialID)
     const { name,date,addressOfManufacturer,quantity } = this.state
    console.log('create---->',name,date,addressOfManufacturer,quantity)
   
    // this.supplierCerts_A()

    if (name !== '' && name !== undefined &&
      //certName !== '' && certName !== undefined && 
      date !== '' && date !== undefined &&
      addressOfManufacturer !== '' && addressOfManufacturer !== undefined &&
      quantity !== '' && quantity !== undefined)
     // && pubKey !== '' && pubKey !== undefined  
     // &&certList !== '' && certList !== undefined
     // && serialID !== '' && serialID !== undefined) 
     {
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

      const accounts = await web3.eth.getAccounts();
      if(accounts[0].toLowerCase()==this.state.supA_PK.toString().toLowerCase()){
        this.toggle1()
      try {
// (name,date,quantity,addressOfManufacturer);
const name = this.state.name;
const date = this.state.date;
const quantity = this.state.quantity;
const addressOfManufacturer = this.state.addressOfManufacturer;
        var that = this
        await MyContract.methods.
        issueIngredient(name,date.toString(),quantity, addressOfManufacturer).send({
            from: accounts[0]
          }).on('transactionHash', (hash) => {
            console.log(hash)
            console.log("issue ingredient main pehla dot on");
            that.setState({ transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash })
          }).on('confirmation', function (confirmationNumber,receipt) {
            console.log("issue ingredient main dosra dot on");
            if(confirmationNumber === 1){
              console.log("issue ingredient main dosra dot on main if");
              console.log("Transaction confirmed");
              console.log(receipt)
              alert('Transaction has been confirmed.')
              that.toggle1()
            }
          });
      }
      catch (e) {
        console.log('error----->', e.message)
        this.toggle1()


      }
      finally{
        this.toggle1()
      }

       }
//sup B cREATE
  else if(accounts[0].toLowerCase()==this.state.supB_PK.toString().toLowerCase()){
  
    this.toggle1()
  
    try {



      var that = this
      const accounts = await web3.eth.getAccounts();
      await MyContract.methods.
      issueIngredient(this.state.name,this.state.date.toString(),this.state.quantity, this.state.addressOfManufacturer).send({
          from: accounts[0]
        }).on('transactionHash', (hash) => {
          console.log(hash)
          
          that.setState({ transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash })
        }).on('confirmation', function (confirmationNumber,receipt) {
          
         
          if(confirmationNumber === 1){
            
       
            console.log("Transaction confirmed");
            console.log(receipt)
            alert('Transaction has been confirmed.')
            that.toggle1()
          }
          

        });
    }
    catch (e) {
      console.log('error----->', e.message)
      this.toggle1()

    }
   

  
  
  }
  ///////////////////
  else if(accounts[0].toLowerCase()==this.state.supC_PK.toString().toLowerCase()){
  
    this.toggle2()
  
    try {
      var that = this
      const accounts = await web3.eth.getAccounts();
      await MyContract.methods.
      issueIngredient(this.state.name,this.state.date.toString(),this.state.quantity, this.state.addressOfManufacturer).send({
          from: accounts[0]
        }).on('transactionHash', (hash) => {
          console.log(hash)
          that.setState({ transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash })
        }).on('confirmation', function (confirmationNumber,receipt) {
          if(confirmationNumber === 1){
            console.log("Transaction confirmed");
            console.log(receipt)
            alert('Transaction has been confirmed.')
            that.toggle2()
          }
          

        });
    }
    catch (e) {
      console.log('error----->', e.message)
      this.toggle2()

    }
  }

  else{
    alert('Please Login wirth a valid Supplier account')

  }
    }
    else {
      alert('Please fill all fields properly')
      // console.log(this.state.name,this.state.date,this.state.quantity,this.state.addressOfManufacturer)
    }

  }
  render() {
    const { dropCertArr } = this.state;
    // console.log("captain america", dropCertArr[0]);
    const heroStyles = {
      padding: '50px 0 70px'
    };


   // const issue = MyContract.methods.issueIngredient(name,date,quantity,addressOfManufacturer);
    
    return (

      
      <div>

        {

          this.state.validSupplier ?
          <div>
        <Card>
          {/* <CardBody > */}
            {/* <Button color="primary" onClick={this.toggle}  >Send Part A</Button> */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop: "180px" }}>
              <ModalHeader toggle={this.toggle}>Select Certificate</ModalHeader>
              <ModalBody>
              <Card>
            {/* <CardBody> */}
                <FormGroup>

                  
                    {
                      this.state.dropCertArr.length!=0 ?
                      this.state.dropCertArr.map((val, inx) => {
                        return (
                          
                          
                          <Input type="text" name="name" id="name" onClick={() => this.selectRow(val)}  value={val} placeholder="Enter publc key here ... " />
                          
                          )
                          
                        })
                        :
                        <h2>No Hash</h2>
                    }

                  
                    </FormGroup>
                {/* </CardBody> */}
                </Card>

              </ModalBody>
              
            </Modal>
          {/* </CardBody> */}
        </Card>


        <div>


  
  <Card>
  {/* <CardBody > */}
      <Modal isOpen={this.state.modal1} 
      // toggle={this.toggle1} 
       style={{marginTop:"180px"}}>
          <ModalBody  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>            
            </ModalBody>
          
      </Modal>
  {/* </CardBody> */}
</Card>

<Card>
  {/* <CardBody > */}
      <Modal isOpen={this.state.modal2} 
      // toggle={this.toggle1} 
       style={{marginTop:"180px"}}>
          <ModalBody  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>            
            </ModalBody>
          
      </Modal>
  {/* </CardBody> */}
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
                        Name of Ingredient
                </label>
                      <input
                        type="text"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        value={this.state.name}
                       // onChange={(e) => { this.setState({ orgName: e.target.value }) }}
                      />
                      <br />

                      <label
                        htmlFor="defaultFormCardNameEx"
                        className="grey-text font-weight-light"
                      >
                        Quantity  <sub>gram</sub>
                </label> 
                      <input
                        type="text"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        value={this.state.quantity}
                        onChange={(e) => { this.setState({ quantity: e.target.value }) }}
                      />
                      <br />


                      <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Manufacturer Address
                </label>
                      <input
                        type="text"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                       // value={this.state.serialID}
                        value={this.state.addressOfManufacturer}
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
            <br />
                    

                      <div className="text-center py-4 mt-3">
                        <MDBBtn className="btn btn-outline-blue" type="submit" onClick={(e) => this.createCertFun(e)}>
                          Issue Ingredient
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
      
      </div>
  
    :
  
      <div>
        
          
            
            <h2> Please Wait !</h2>
              <h3> Login with Valid Metamask  account and Refresh the page  </h3>
            

        
      </div>
    }

                        </div>
    );
  }
}

export default Dashboard;


/////////////////////////////////////////////////////////////////////////

