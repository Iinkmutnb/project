import React, { Component } from 'react';
import {Menu} from 're-bulma';
import {Hero,HeroHead,Container,NavGroup,NavItem,Nav,Box,Columns,Column,Notification,Button} from 're-bulma';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
class menuSide extends Component {
    constructor(props) {
        super(props);
        this.state = {user:'',
                      userType:'',
                      checkPage:true
                     }
    }
    componentDidMount() {
      this.props.setExact(true,true);
      var userid= cookie.load('userId');
      var userType= cookie.load('userType');
      this.setState({ userId:userid})
    }
    componentWillMount() {
     
               
    this.setState({ checkPage:true})
       

    }
      
               
        
     

    

    render() {
      
        return (
            <div>
               <Notification style={{backgroundColor:'#f2f2f2',width:'248px',padding:'0px'}}>
                          <Column context="isChild" style={{/*padding:'0px'*/}}>
                          
                            ชื่อ:{this.state.userId}
                          
                          </Column>
                          <Column context="isChild" style={{padding:'0px'}}>
                            <Button>ออกจากระบบ</Button>
                          </Column>
                          <Column context="isChild" style={{marginTop:'100px',marginButtom:'0px',padding:'0px'}}>
                            <Button style={{width:"247px",height:'80px',padding:'0px'}}> 
                              <Link to="/editAdmin/product/insert"  style={{outline:'0', textDecoration: 'none',marginTop:'0px',padding:'29px 110px 29px 101px'}}>สินค้า</Link>
                            </Button>
                          </Column>
                          <Column style={{marginTop:'0px',padding:'0px'}}>
                            <Button style={{width:"247px",height:'80px',padding:'0px'}}>
                              <Link to="/editAdmin/officer/insertOfficer"  style={{outline:'0', textDecoration: 'none',marginTop:'0px',padding:'29px 102px 29px 85px'}}>พนักงาน</Link>
                            </Button>
                          </Column>
                      </Notification>

    </div>
        );
    }
}

export default menuSide;