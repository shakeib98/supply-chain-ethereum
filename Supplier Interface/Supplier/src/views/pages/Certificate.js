

import React, { Component } from 'react'
import {
    Card,
    CardBody,
    Table,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup, Label, Input,
  } from 'reactstrap';
  import { contractAddress,ABI} from './Constants'
  const isEthereumAddress = require('is-ethereum-address');
  const Web3=require('web3')




export default class Certificate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            orgName:'',
            certName:'',
            date:'',
            role:'0',
            pubKey:'DATA',
            isKey:false,
            selectedHash:'',
            // dropCertArr:[],
            certsArr:[]
            
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        this.getCertsTable()
    }

 async getCertsTable(){




        var web3;
    let ethereum = window.ethereum;
    console.log('ethereum',window.ethereum)

    web3 = new Web3(window.web3.currentProvider);

    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI,contractAddress);

     console.log(MyContract.methods)
          const accounts = await web3.eth.getAccounts();
         
try{
  MyContract.methods.getManufacturerCertA().call({from:accounts[0]})
  .then((result) => {
    console.log(result)

      this.state.certsArr=[...result]
      this.setState({certsArr:this.state.certsArr})
      console.log('drop',this.state.certsArr)
      
  })
}
catch(e){
  console.log(e.message)
}

    }

    selectRow(e){
        console.log('Target Value',typeof(e),e)
        this.setState({pubKey:e,modal:true})



    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

  async  sendCertsToManf(){

        const {selectedHash,pubKey} =this.state

        var web3;
    let ethereum = window.ethereum;
    console.log('ethereum',window.ethereum)

    web3 = new Web3(window.web3.currentProvider);

    const account = await ethereum.enable();
    const MyContract = new web3.eth.Contract(ABI,contractAddress);

     console.log(MyContract.methods)
          const accounts = await web3.eth.getAccounts();

          try{
            console.log('encode ABI',MyContract.methods.getSupplierACert().encodeABI())
            
            let that = this
            const accounts = await web3.eth.getAccounts();
           
            await MyContract.methods. sendCertificateToManufacturer(accounts[0],pubKey.toString())
            .send({
                    from: accounts[0]
                }).on('transactionHash',(hash) =>{
                    console.log(hash)
                    that.setState({transactionHash : 'https://rinkeby.etherscan.io/tx/'+hash})
                }).on('confirmation', function(){
                    console.log("Transaction confirmed");
                   
                });
          }
          catch (e){
  console.log('error----->',e.message)
  
          }





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

        var keys=[
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
                                <Input type="text" name="name" id="name"  value={this.state.pubKey} placeholder="Enter publc key here ... " />
                                </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle }  onClick={()=>this.sendCertsToManf()} >Send</Button>{' '}
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
                            <th style={{fontWeight:'bold'}}>HASH </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.certsArr.map((val,inx)=>{
                                return(

                                    
                         <tr >
                            <td>{inx} </td>
                            <td  onClick={()=>this.selectRow(val)}>{val} </td>
                              </tr>
                                    )

                            })
                        }
                      
                    </tbody>
                </Table>
            </CardBody>
        </Card>
                
        </div>
        )
    }
}
