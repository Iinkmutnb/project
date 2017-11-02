import React, { Component } from 'react';
import HOME from './home/home';
import './App.css';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';
import {BrowserRouter,Link,Route,Match} from 'react-router-dom';
import {  Columns ,Column} from 're-bulma';
import MENU_SIDE from  '././home/head/menuSide.js';
import PRODUCT from './home/product.js';
import REGISTER from './home/register.js';
import TAP_MENU from  './home/head/tapMenu.js';
import LOGO from  './home/head/logo.js';
import SLIDE from  './home/head/slide.js';
import LOGIN from  './home/head/login.js';
import BUTTON_FACE_LINE from  './home/head/buttonFaceLine.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exact:false
    };
    
  }
  componentDidMount() {
    insertCss(css, { prepend: true });
  
    if(window.location.pathname=="/"){
      this.setState({exact:false})
    }
    if(window.location.pathname=="/register"){
      this.setState({exact:true})
    }
   
    
  }
 setExact=(value)=>{
 
  this.setState({exact:value})
 
 }
  render() {
    return (
      <div>
       <BrowserRouter >
       {this.state.exact ? (
         <div>
          
          <Route path='/' exact={this.state.exact}  render={(props) => <LOGIN setExact={this.setExact}/>} />
          <Route path='/'  exact={this.state.exact} component={LOGO}/>
          <Route path='/'  exact={this.state.exact} component={SLIDE}/>
          
          <Route path='/' exact={this.state.exact}  component={MENU_SIDE}/>
          <Route path='/' exact={this.state.exact}   component={TAP_MENU}/>
          <Route path='/' exact={this.state.exact}   component={BUTTON_FACE_LINE}/>
          <Route path='/product'  render={(props) => <PRODUCT setExact={this.setExact}/>}  />
          <Route path='/register'   render={(props) => <REGISTER setExact={this.setExact}/>} />
         
         
         </div>):
         (
         <div>
         <Route path='/register'   render={(props) => <REGISTER setExact={this.setExact}/>} />
            <Columns  style={this.state.exact ? ({}):({border:'1px solid #C8C8C8',borderRadius: '12px',background:'linear-gradient(to bottom, #bfbfbf 0%, #ffffff 100%)'})}>
              <Column >
                <Route path='/'  exact={this.state.exact} component={LOGO}/>
              </Column>

              <Column >
                <Route path='/'  exact={this.state.exact} component={SLIDE}/>
              </Column>
            </Columns>
        
            <Columns >
              <Column  size="isOneQuarter" context="isParent" isVertical >
                <Column  context="isChild">
                  <Route path='/' exact={this.state.exact}  render={(props) => <LOGIN setExact={this.setExact}/>}/>
                </Column>
                <Column  context="isChild"  >
                  <Route path='/' exact={this.state.exact}  component={MENU_SIDE}/>
                      
                </Column>
           
              </Column>
          
              <Column  context="isParent" isVertical >
              
                  <div style={{ position: 'sticky', top:'0px',}}>
                    <Route path='/' exact={this.state.exact}   component={TAP_MENU}/>
                  </div>
                <Column  context="isChild" > 
                <Route path='/' exact={this.state.exact}   component={BUTTON_FACE_LINE}/>
                </Column>
              
                <Column  context="isChild" > 
                  <Route path='/product'  render={(props) => <PRODUCT setExact={this.setExact}/>}  />
                
                </Column>
            
              </Column>
             
            </Columns >
           
         </div>
         )
       }
       
                </BrowserRouter >
      </div>
    );
  }
}

export default App;


/*
<div>
          <BrowserRouter>
          <Route path='/'  exact={this.state.exact} component={LOGO}/>
          <Route path='/'  exact={this.state.exact} component={SLIDE}/>
          <Route path='/' exact={this.state.exact}  component={LOGIN} />
          <Route path='/' exact={this.state.exact}  component={MENU_SIDE}/>
          <Route path='/' exact={this.state.exact}   component={TAP_MENU}/>
          <Route path='/' exact={this.state.exact}   component={BUTTON_FACE_LINE}/>
          <Route path='/product'  render={(props) => <PRODUCT setExact={this.setExact}/>}  />
          <Route path='/register'   render={(props) => <REGISTER setExact={this.setExact}/>} />
          </BrowserRouter>
          </div>):(<div></div>)}
          <div >
          <BrowserRouter>
          <Route path='/register'   render={(props) => <REGISTER setExact={this.setExact}/>} />
            <Columns  style={this.state.exact ? ({}):({border:'1px solid #C8C8C8',borderRadius: '12px',background:'linear-gradient(to bottom, #bfbfbf 0%, #ffffff 100%)'})}>
              <Column >
                <Route path='/'  exact={this.state.exact} component={LOGO}/>
              </Column>

              <Column >
                <Route path='/'  exact={this.state.exact} component={SLIDE}/>
              </Column>
            </Columns>
        
            <Columns >
              <Column  size="isOneQuarter" context="isParent" isVertical >
                <Column  context="isChild">
                  <Route path='/' exact={this.state.exact}  component={LOGIN} />
                </Column>
                <Column  context="isChild"  >
                  <Route path='/' exact={this.state.exact}  component={MENU_SIDE}/>
                      
                </Column>
           
              </Column>
          
              <Column  context="isParent" isVertical >
              
                  <div style={{ position: 'sticky', top:'0px',}}>
                    <Route path='/' exact={this.state.exact}   component={TAP_MENU}/>
                  </div>
                <Column  context="isChild" > 
                <Route path='/' exact={this.state.exact}   component={BUTTON_FACE_LINE}/>
                </Column>
              
                <Column  context="isChild" > 
                  <Route path='/product'  render={(props) => <PRODUCT setExact={this.setExact}/>}  />
                
                </Column>
            
              </Column>
             
            </Columns >
           
            
          </BrowserRouter>
          </div>
      
      </div>
*/ 