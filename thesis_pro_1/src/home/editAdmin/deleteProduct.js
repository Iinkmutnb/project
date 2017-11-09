import React, { Component } from 'react';
import {Menu} from 're-bulma';
import {Button,Table,Thead,Tr,Th,Tbody,Td} from 're-bulma';
import cookie from 'react-cookies';
import queryString from 'query-string';
class deleteProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {product:[]}
    }
    componentDidMount() {
      
               
        this.props.setExact(true,true);
        fetch('http://localhost:9000/showProduct', {
            headers: {
                      'Content-Type':'application/x-www-form-urlencoded'
          
                     },
         
         
             method: "POST",
             body:  queryString.stringify({'name':'*'})
            
           
         })
         .then((response) => response.json())
         .then((data) => {
          this.setState({product: data})
          console.log(JSON.stringify(this.state.product));
          })
         .catch(function(error) 
          {
            console.log( error.message);
          });
     

    }

    render() {
      
        return (
            <div >
                <Table style={{marginTop:'50px'}}>
                    <Thead>
                        <Tr>
                        <Th>ลำดับ</Th>
                        <Th>รหัสสินค้า</Th>
                        <Th>ชื่อสินค้า</Th>
                        <Th>แก้ไข</Th>
                        
                        </Tr>
                    </Thead>
                    <Tbody style={{color:'grey'}}>
              {
                  this.state.product.map((product,key) => 
                                                        <Tr>
                                                        <Td><b>{key+1}</b></Td>
                                                        <Td>-</Td>
                                                        <Td><b>{product.name}</b></Td>
                                                        <Td><Button color="isDanger">ลบ</Button></Td>
                                                        </Tr>
                                                 )}
                    </Tbody>
              
              </Table>

            </div>
        );
    }
}

export default deleteProduct;