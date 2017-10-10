import React, { Component } from 'react';
import {  Columns ,Column,Modal,Content} from 're-bulma';

  
function showModal(props) {

 const data =props.dataModal.map((product) =><div>
          <Modal
          type="card"
          headerContent="Header Content"
          footerContent={<div style={{ padding: '20px'}} >{props.dataModal.map((product) =><div>{product.Des}</div>)}</div> }
          isActive={props.showModal}
          onCloseRequest={() => props.setFalseShowModal()}
        >
          <Content>
            {    props.dataModal.map((product) =><div><Columns><Column>{product.name}</Column> </Columns>
            <Columns><Column><img style={{width:'220px',height:'250px',}} src={require('../../home/picture/product/'+product.Src)}/></Column> </Columns>
    
    
                </div>)}
          </Content>
     
        </Modal>





 </div>)
 return <div>{data}</div>

}

export default showModal;