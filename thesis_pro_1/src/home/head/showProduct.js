import React, { Component } from 'react';
import queryString from 'query-string';
import {Table,Thead,Tr,Th,Tbody,Td,Button,Group} from 're-bulma';


  function isenrtTagTrAndTd(product){
    let key =0;
    let index =0;
    let data=[];
    let data2=[];
    console.log("count product:"+product.length)
    for(var i=0;i<product.length;i++){
      
       data[index]=<td>{product[i]}</td>
       index++;
       if(index==3){data2[key]=<tr>{data[index-3]}{data[index-2]}{data[index-1]}</tr>;key++;index=0;}
       else if((i==product.length-1)&&(product.length%3==1)){data2[key]=<tr>{data[index-1]}</tr>;key++;index=0;}
       else if((i==product.length-1)&&(product.length%3==2)){data2[key]=<tr>{data[index-2]}{data[index-1]}</tr>;key++;index=0;}
     }

    return data2;

  }
  
  function showProduct(props) {
      
   
    const product2 = props.product.map((product) =>
                                                        <div  style={{border:'1px solid #C8C8C8',
                                                        borderRadius: '12px',padding:'10px',backgroundColor:'white',margin:'10px' }}>
                                                
                                                          
                                                          <Table isStriped >
                                                            <Thead>
                                                              <Tr>
                                                                  <Th>
                                                                  <img style={{width:'220px',height:'250px',}} src={require('../../home/picture/product/'+product.Src)}/>
                                                                  </Th>
                                                              </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                              <Tr>
                                                                <Td>
                                                                  {product.name}
                                                                  
                                                                </Td>
                                                              </Tr>
                                                              <Tr>
                                                                <Td> 
                                                                  <Group>
                                                                    <Button color="isPrimary" onClick={() => props.showModal(product.code)}>ดูลายละเอียด</Button>
                                                                    <Button color="isSuccess">หยิลบใส่ตระกร้า</Button>  
                                                                  </Group>
                                                                </Td>
                                                              </Tr>
                                                            </Tbody>
                                                          </Table>
                                                        </div>);
   
    const product3=isenrtTagTrAndTd(product2);
    return <div><table>{product3}</table></div>;
  }

  export default showProduct;

