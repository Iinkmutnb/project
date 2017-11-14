import React, { Component } from 'react';
import {Menu} from 're-bulma';
import {Button,Table,Thead,Tr,Th,Tbody,Td} from 're-bulma';
import cookie from 'react-cookies';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
class editOfficer extends Component {
    constructor(props) {
        super(props);
        this.state = {product:[]}
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
         console.log(data)
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
                                                        <Td><b>{product.code}</b></Td>
                                                        <Td><b>{product.name}</b></Td>
                                                        <Td>-</Td>
                                                        <Td><Button color="isWarning" style={{padding:'0px'}}><Link to={`/editAdmin/product/edits${product.user}`}  style={{padding:'7px',textDecoration:'none'}}>แก้ไข</Link></Button></Td>
                                                        </Tr>
                                                        
                                                 
                                                 )}
                    </Tbody>
              
              </Table>

            </div>
        );
    }
}

export default editOfficer;