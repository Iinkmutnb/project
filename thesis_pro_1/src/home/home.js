import React, { Component } from 'react';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';
import {  Columns ,Column,Notification,Group,Button,Modal,Content} from 're-bulma';
import LOGO from '../home/head/logo.js';
import SLIDE from '../home/head/slide.js';
import LOGIN from  '../home/head/login.js';
import TAP_MENU from  '../home/head/tapMenu.js';
import MENU_SIDE from  '../home/head/menuSide.js';
import SHOW_PRODUCT from  '../home/head/showProduct.js';
import BUTTON_FACE_LINE from '../home/head/buttonFaceLine.js';
import SHOW_MODAL from '../home/head/showModal';
import queryString from 'query-string';
import {BrowserRouter,Link,Route} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product:[],
      showModal:false,
      dataModal:[]
    };
    
  }
  
  componentDidMount() {
      
      insertCss(css, { prepend: true });
      

      fetch('http://localhost:9000/showProduct', {
        headers: {
                  'Content-Type':'application/x-www-form-urlencoded'
      
                 },
     
     
         method: "POST",
         body:  queryString.stringify({'name':'*'})
        
       
     })
     .then((response) => response.json())
     .then((data) => {//console.log(JSON.stringify(data))
      this.setState({product: data})
      //console.log(JSON.stringify(this.state.product));
      })
     .catch(function(error) 
      {
        console.log( error.message);
      });

    
 
      
    
  }
  showModal = (productId) => {
    this.setState({showModal: true})

    fetch('http://localhost:9000/showModal', {
      headers: {
                'Content-Type':'application/x-www-form-urlencoded'
    
               },
   
   
       method: "POST",
       body:  queryString.stringify({'id':productId})
      
     
   })
   .then((response) => response.json())   
   .then((data) => {
  
    this.setState({dataModal: data})

   
    })
    
 

  }
  setFalseShowModal = () => {
    
    this.setState({showModal: false})

  }

  render() {
    
   
    const padding_head = { padding: '5px'};
 
  
    
    return (
      <div >
        <Columns  style={{border:'1px solid #C8C8C8',borderRadius: '12px',background:'linear-gradient(to bottom, #bfbfbf 0%, #ffffff 100%)'}}>
     
        
          <Column >
         
            
              <LOGO />
          
          </Column>

          <Column    >
           
              <SLIDE/>
           
          </Column>
         
        
        </Columns>
        
        <Columns >
          <Column size="isOneQuarter" context="isParent" isVertical >
            <Column  context="isChild">
            
              <LOGIN/>
              
            </Column>
            <Column context="isChild" >
              <MENU_SIDE/>
            </Column>
              
          </Column>
          
          <Column context="isParent" isVertical >
          
          <Column  context="isChild" style={{ position: 'sticky', top:'0px'}}> 
                  <TAP_MENU />
                  
                  </Column>

              
            
          <Column  context="isChild" > 
              
          <BUTTON_FACE_LINE/>
                </Column>
              
                <Column  context="isChild" > 
                <SHOW_PRODUCT product={this.state.product} showModal={this.showModal} />
          </Column>
            
          </Column>
          

      

          
           
        </Columns >
        <SHOW_MODAL showModal={this.state.showModal} dataModal={this.state.dataModal} setFalseShowModal={this.setFalseShowModal}/>
   

      </div>
    );
  }
}

export default Home; 
