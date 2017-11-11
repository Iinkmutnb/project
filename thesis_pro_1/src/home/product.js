import React, { Component } from 'react';

import {BrowserRouter,Link,Route} from 'react-router-dom';
import SHOW_PRODUCT from  '../home/head/showProduct.js';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';
import SHOW_MODAL from '../home/head/showModal';
import queryString from 'query-string';


class Product extends Component {
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
    
        
          this.props.setExact(false,true);
          
        
      }
      showModal = (productCode) => {
        this.setState({showModal: true})
    
        fetch('http://localhost:9000/showModal', {
          headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
        
                   },
       
       
           method: "POST",
           body:  queryString.stringify({'code':productCode})
          
         
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
    return (
      <div>
          <SHOW_PRODUCT product={this.state.product} showModal={this.showModal} />
          <SHOW_MODAL showModal={this.state.showModal} dataModal={this.state.dataModal} setFalseShowModal={this.setFalseShowModal}/>
      </div>
    );
  }
}

export default Product;