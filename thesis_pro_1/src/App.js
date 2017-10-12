import React, { Component } from 'react';
import HOME from './home/home';
import REGISTER from './home/register';
import './App.css';
import {BrowserRouter,Link,Route} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    console.log('GrandChild did mount.');
  }

  render() {
    return (
      <div>
                <BrowserRouter>
                <div>
                  <Route path='/'  exact component={HOME}/>
                  <Route path='/register' component={REGISTER}/>
                  </div>
                </BrowserRouter>
      
      </div>
    );
  }
}

export default App;
