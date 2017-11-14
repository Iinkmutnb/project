import React, { Component } from 'react';
import {Menu} from 're-bulma';
import {Button,Table,Thead,Tr,Th,Tbody,Td,Modal,Content} from 're-bulma';
import cookie from 'react-cookies';
import queryString from 'query-string';
class deleteProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {product:[],checkSuccess:0,isOpen:true}
    }
    componentDidMount() {
      
               
        this.props.setExact(true,true);
        fetch('http://localhost:9000/showOfficer', {
            headers: {
                      'Content-Type':'application/x-www-form-urlencoded'
          
                     },
         
         
             method: "POST",
             body:  queryString.stringify({'name':'*'})
            
           
         })
         .then((response) => response.json())
         .then((data) => {
          this.setState({product: data})
          //console.log(JSON.stringify(this.state.product));
          })
         .catch(function(error) 
          {
            console.log( error.message);
          });
     

    }
    deleteProduct=(code,src)=>{
        /*
        console.log(src)
        fetch('http://localhost:9000/showOfficer', {
            headers: {
                      'Content-Type':'application/x-www-form-urlencoded'
          
                     },
         
         
             method: "POST",
             body:  queryString.stringify({'name':'*'})
            
           
         })
         .then((response) => response.json())
         .then((data) => {
          this.setState({product: data})
         console.log(data)
          })
         .catch(function(error) 
          {
            console.log( error.message);
          });
*/
    }
    setCloserModal=()=>{
        window.location.reload();
    }

    render() {
      
        return (
            <div >
                
                <Table style={{marginTop:'50px'}}>
                    <Thead>
                        <Tr>
                        <Th>ลำดับ</Th>
                        <Th>รหัสพนักงาน</Th>
                        <Th>ชื่อพนักงาน</Th>
                        <Th>รูป</Th>
                        <Th>แก้ไข</Th>
                        
                        </Tr>
                    </Thead>
                    <Tbody style={{color:'grey'}}>
              {
                  this.state.product.map((product,key) => 
                                                        <Tr>
                                                        <Td><b>{key+1}</b></Td>
                                                        <Td>{product.code}</Td>
                                                        <Td><b>{product.name}</b></Td>
                                                        <Td>-></Td>
                                                        <Td><Button  color="isDanger" onClick={(e)=>this.deleteProduct(product.code,product.Src)}>ลบ</Button></Td>
                                                        </Tr>
                                                 )}
                    </Tbody>
              
              </Table>
              {this.state.checkSuccess==0?(<div></div>)
                :(<div>
                    {this.state.checkSuccess==1?
                    (<div>
                        <Modal
                        type="card"
                        headerContent=""
                        footerContent={<div style={{ padding: '20px'}} ></div>}
                        isActive={this.state.isOpen}
                        onCloseRequest={() => this.setCloserModal()}
                        >
                        <Content>
                        ลบสินค้าเรียบร้อย
                        </Content>
                        </Modal>

                    </div>):
                    (<div>
                        <Modal
                        type="card"
                        headerContent=""
                        footerContent={<div style={{ padding: '20px'}} ></div>}
                        isActive={this.state.isOpen}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        >
                        <Content>
                        เกิดข้อผิดพลาด กรุณาลบสินค้าใหม่
                        </Content>
                        </Modal>
                    </div>)
                    }
                 </div>)
                }  

            </div>
        );
    }
}

export default deleteProduct;