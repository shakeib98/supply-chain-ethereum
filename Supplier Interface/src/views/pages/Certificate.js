

// import React, { Component } from 'react'
// import {
//     Card,
//     CardBody,
//     Table,
//     Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
// } from 'reactstrap';
// import { contractAddress, ABI } from './Constants'
// const isEthereumAddress = require('is-ethereum-address');
// const Web3 = require('web3')




// export default class Certificate extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             modal: false,
//             orgName: '',
//             certName: '',
//             date: '',
//             role: '0',
//             pubKey: 'DATA',
//             isKey: false,
//             selectedHash: '',
//             // dropCertArr:[],
//             certsArr: [],
//             validSupplier: false,
//             modal1: false,
//             supA_PK:'',
//       supB_PK:'',
//       manuf_PK:'',
//       govt_PK:'',


//         };

//         this.verifySupplier()
//         this.toggle = this.toggle.bind(this);
//         this.toggle1 = this.toggle1.bind(this);

//     }

//   async  componentDidMount() {

//         const pk1=await this.getGovt_PK()
//   const pk2=  await this.getSupA_PK()
//   const pk3= await  this.getSupB_PK()
//   const pk4=await this.getManuf_PK()
  
//   this.setState({govt_PK:pk1,supA_PK:pk2,supB_PK:pk3,manuf_PK:pk4})
 
//         this.getCertsTable()
        

//     }

//     componentDidUpdate() {

//         this.verifySupplier()


//     }


//     async getGovt_PK(){
  

//         var web3;
//         let ethereum = window.ethereum;
//         console.log('ethereum',window.ethereum)
      
//         web3 = new Web3(window.web3.currentProvider);
      
//         const account = await ethereum.enable();
//         const MyContract = new web3.eth.Contract(ABI, contractAddress);
//         const accounts = await web3.eth.getAccounts();
      
//       return new Promise((resolve,rej)=>{
      
//         MyContract.methods.getGovtAddress().call({ from: accounts[0] })
//         .then((res)=>{
//           console.log('getAk',res)
//           resolve(res)
      
//         })
//       })
      
      
      
//       }
      
      
//       async getSupA_PK(){
      
      
//       var web3;
//       let ethereum = window.ethereum;
//       // console.log('ethereum',window.ethereum)
      
//       web3 = new Web3(window.web3.currentProvider);
      
//       const account = await ethereum.enable();
//       const MyContract = new web3.eth.Contract(ABI, contractAddress);
//       const accounts = await web3.eth.getAccounts();
      
      
//       return new Promise((resolve,rej)=>{
      
//         MyContract.methods. getSupplierAAddress().call({ from: accounts[0] })
//         .then((res)=>{
//           console.log('getAk',res)
//       resolve(res)    
//         })
//       })
      
      
      
//       }
      
//       async getSupB_PK(){
//       // getSupplierBAddress()
//       var web3;
//       let ethereum = window.ethereum;
//       // console.log('ethereum',window.ethereum)
      
//       web3 = new Web3(window.web3.currentProvider);
      
//       const account = await ethereum.enable();
//       const MyContract = new web3.eth.Contract(ABI, contractAddress);
//       const accounts = await web3.eth.getAccounts();
      
//       return new Promise((resolve,rej)=>{
      
//         MyContract.methods. getSupplierBAddress().call({ from: accounts[0] })
//         .then((res)=>{
//           // console.log('getAk',res)
//       resolve(res)    
          
//         })
//       })
      
//       }
      
//       async getManuf_PK()
//       {
//       // getManufacturerAddress()
//       var web3;
//       let ethereum = window.ethereum;
//       // console.log('ethereum',window.ethereum)
      
//       web3 = new Web3(window.web3.currentProvider);
      
//       const account = await ethereum.enable();
//       const MyContract = new web3.eth.Contract(ABI, contractAddress);
//       const accounts = await web3.eth.getAccounts();
      
//       return new Promise((resolve,rej)=>{
//         MyContract.methods. getManufacturerAddress().call({ from: accounts[0] })
//         .then((res)=>{
//           // console.log('getAk',res)
//       resolve(res)    
          
//         })
//       })
      
//       }  
      
      
      

//     toggle1() {
//         this.setState(prevState => ({
//             modal1: !prevState.modal1
//         }));
//     }


//     async verifySupplier() {

//         var web3;
//         let ethereum = window.ethereum;
//         //   console.log('ethereum', window.ethereum)

//         web3 = new Web3(window.web3.currentProvider);

//         const account = await ethereum.enable();
//         const MyContract = new web3.eth.Contract(ABI, contractAddress);
//         const { orgName, certName, date, pubKey, certList, isKey, serialID } = this.state

//         //   console.log(MyContract.methods)
//         const accounts = await web3.eth.getAccounts();
//         //   console.log('Logoin account',accounts[0])


//         if (accounts[0].toLowerCase()==this.state.supA_PK.toString().toLowerCase() || accounts[0].toLowerCase()==this.state.supB_PK.toString().toLowerCase()) {
//             this.setState({ validSupplier: true })
//         }






//     }



//     async getCertsTable() {




//         var web3;
//         let ethereum = window.ethereum;
//         console.log('ethereum', window.ethereum)

//         web3 = new Web3(window.web3.currentProvider);

//         const account = await ethereum.enable();
//         const MyContract = new web3.eth.Contract(ABI, contractAddress);

//         console.log(MyContract.methods)
//         const accounts = await web3.eth.getAccounts();
//         if (this.state.supA_PK.toString().toLowerCase() == accounts[0].toLowerCase()) {


//             try {
          
//                 MyContract.methods.getManufacturerCertA().call({ from: accounts[0] })
//                 .then((result) => {
//                     console.log('result', result)
                    
//                     var tempArr=[]
//                         result.map((val) => {
//                             console.log('map', val)
//                             MyContract.methods.supplierAToManufacturerHistory(val.toString()).call({ from: accounts[0] })
//                                 .then((res) => {
//                                     console.log('rs', res)

//                                 if (res.hash == '0x0000000000000000000000000000000000000000000000000000000000000000') {
//                                     var obj = {
//                                         hash: val,
//                                         used: res.used,
//                                     }
//                                     this.state.certsArr.push(obj)
//                                     console.log('resIF',res)
//                                     tempArr.push(obj)
//                                     console.log('push wali value', obj)

//                                 }
//                                 else if(res.used == false) {

//                                     // if (res.used == false) {

//                                         //  tempArr.push(res)
//                                         var obj = {
//                                             hash: res.hash,
//                                             used: res.used,
//                                         }
//                                     console.log('resElse',res)


//                                         tempArr.push(obj)
//                                         // this.state.certsArr.push(obj);

//                                 }



//                                 })

//                                 console.log('TEMPPPPPP',tempArr)
//                     this.setState({certsArr:[tempArr]})

//                             })
//                             console.log('if chala')

                            
                            
//                             // this.setState({ certsArr:[...tempArr]  })

//                         // console.log('drop', this.state.certsArr)

//                     })
//             }
//             catch (e) {
//                 console.log(e.message)
//             }


//         }


//         else {

//             console.log('else chala')
//             this.getCertsTable_B()
//         }

//     }


//     async getCertsTable_B() {


//         var web3;
//         let ethereum = window.ethereum;
//         console.log('ethereum', window.ethereum)

//         web3 = new Web3(window.web3.currentProvider);

//         const account = await ethereum.enable();
//         const MyContract = new web3.eth.Contract(ABI, contractAddress);

//         console.log(MyContract.methods)
//         const accounts = await web3.eth.getAccounts();

//         try {
//             MyContract.methods.getManufacturerCertB().call({ from: accounts[0] })
//                 .then((result) => {
//                     console.log('result', result)
                    
//                     var tempArr=[]
//                     result.map((val) => {
//                         console.log('map', val)
//                         MyContract.methods.supplierBToManufacturerHistory(val.toString()).call({ from: accounts[0] })
//                         .then((res) => {
//                             console.log('rs', res)

//                                 if (res.hash == '0x0000000000000000000000000000000000000000000000000000000000000000') {
//                                     var obj = {
//                                         hash: val,
//                                         used: res.used,
//                                     }
//                                     this.state.certsArr.push(obj)
//                                     console.log('resIF',res)
//                                     tempArr.push(obj)
//                                     console.log('push wali value', obj)

//                                 }
//                                 else if(res.used == false) {

//                                     // if (res.used == false) {

//                                         //  tempArr.push(res)
//                                         var obj = {
//                                             hash: res.hash,
//                                             used: res.used,
//                                         }
//                                     console.log('resElse',res)


//                                         tempArr.push(obj)
//                                         // this.state.certsArr.push(obj);

//                                 }


//                             })

//                             console.log('TEMPPPPPP',tempArr)
//                     this.setState({certsArr:[tempArr]})
//                     })
                    
                 

//                 })
//         }
//         catch (e) {
//             console.log(e.message)
//         }
//     }
//     selectRow(e) {
//         console.log('Target Value', typeof (e), e)
//         this.setState({ pubKey: e,  })

//         this.toggle()



//     }

//     toggle() {
//         this.setState(prevState => ({
//             modal: !prevState.modal
//         }));
//     }

//     async  sendCertsToManf() {

//         const { selectedHash, pubKey } = this.state
//         this.toggle()
//         this.toggle1()
//         var web3;
//         let ethereum = window.ethereum;
//         console.log('ethereum', window.ethereum)

//         web3 = new Web3(window.web3.currentProvider);

//         const account = await ethereum.enable();
//         const MyContract = new web3.eth.Contract(ABI, contractAddress);

//         console.log(MyContract.methods)
//         const accounts = await web3.eth.getAccounts();

//         try {

//             var that = this
//             const accounts = await web3.eth.getAccounts();

//             await MyContract.methods.sendCertificateToManufacturer(accounts[0], pubKey.toString())
//                 .send({
//                     from: accounts[0]
//                 }).on('transactionHash', (hash) => {
//                     console.log(hash)
//                     that.setState({ transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash })
//                 }).on('confirmation', function (confirmationNumber, receipt) {
//                     if (confirmationNumber === 1) {
//                         console.log("Transaction confirmed");
//                         console.log(receipt)
//                         alert('Transaction has been confirmed.')
//                         that.toggle1()
//                     }


//                 });
//         }
//         catch (e) {
//             console.log('error----->', e.message)
//             alert(e.message)

//             this.toggle()
//             this.toggle1()

//         }





//     }


//     // getIssuedCerts(){
//     //     getSupplierACert()
//     //     .then((arr)=>{
//     //         arr.map((val,inx)=>{

//     //             govtToSupplierAHistory(val)
//     //         })
//     //     })
//     // }

//     render() {


//         return (

//             <div>
//                 {
//                     this.state.validSupplier ?

//                         <div>


//                             <Card>
//                                 {/* <CardBody > */}
//                                 <Modal isOpen={this.state.modal1}
//                                     // toggle={this.toggle1} 
//                                     style={{ marginTop: "180px" }}>
//                                     <ModalBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                         <div class="spinner-border" role="status">
//                                             <span class="sr-only">Loading...</span>
//                                         </div>
//                                     </ModalBody>

//                                 </Modal>
//                                 {/* </CardBody> */}
//                             </Card>

//                             <Card>
//                                 {/* <CardBody style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}> */}
//                                 {/* <Button color="primary" onClick={this.toggle}  >Send Part A</Button> */}
//                                 <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop: "180px" }}>
//                                     <ModalHeader toggle={this.toggle}>Send Part to Manufacturer</ModalHeader>
//                                     <ModalBody>
//                                         <FormGroup>
//                                             <Label for="name">Hash</Label>
//                                             <Input type="text" name="name" id="name" value={this.state.pubKey} placeholder="Enter publc key here ... " />
//                                             <Label for="name">Public Key</Label>
//                                             <Input type="text" name="name" id="name" value='0x807355F485B193A502523EC4147468D63B4A9C87' placeholder="Enter publc key here ... " />


//                                         </FormGroup>
//                                     </ModalBody>
//                                     <ModalFooter>
//                                         <Button color="primary"  onClick={() => this.sendCertsToManf()} >Send</Button>{' '}
//                                         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//                                     </ModalFooter>
//                                 </Modal>
//                                 {/* </CardBody> */}
//                             </Card>


//                             <Card>
//                                 <CardBody>

//                                     <Table hover>
//                                         <thead>
//                                             <tr>
//                                                 <th style={{ fontWeight: 'bold' }}>#</th>
//                                                 <th style={{ fontWeight: 'bold' }}>HASH </th>

//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {
//                                                 this.state.certsArr.map((val, inx) => {
//                                                 // console.log('certsArr',this.state.certsArr)
//                                                 if(val.used==false){
//                                                     return(
//                                                         <tr >
//                                                         <td>{inx} </td>
//                                                         <td onClick={() => this.selectRow(val.hash)}>{val.hash} </td>
//                                                         </tr>
//                                                     )

//                                                 }
//                                                 else if(val.used==true){
//                                                     return(

//                                                         <tr disabled >
//                                                         <td>{inx} </td>
//                                                         <td >{val.hash} </td>
//                                                         <td>Send Already</td>
//                                                         </tr>

//                                                     )

//                                                 }

                                                       


//                                                     }

//                                                 )
//                                             }

//                                         </tbody>
//                                     </Table>
//                                 </CardBody>
//                             </Card>

//                         </div>

//                         :
//                         <div>
//                              <h2> Please Wait !</h2>
//                             <h3>Plaesae Login with Valid Metamask  account and Refresh the page  </h3>
//                         </div>

//                 }
//             </div>

//         )
//     }
// }
