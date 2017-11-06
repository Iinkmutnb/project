import React, { Component } from 'react';
import {Input,Label,Addons,Button,Tile,Content,Columns ,Column}  from 're-bulma';
import { Link} from 'react-router-dom'
import cookie from 'react-cookies'

import queryString from 'query-string';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        user:'',
        pass:'',
        check:0,
        users:[],
        isLogin:false
        };
       // this.logIn = this.logIn.bind(this, true);
        //this.logOut = this.logIn.bind(this, false);
        
      }
    componentDidMount() {
        
            var userid= cookie.load('userId');
            if(userid!=null){
                console.log("true")
                this.setState({isLogin:true});

                }
                this.props.setExact(false)
     

    }
    logIn=()=> {
        
        
        if(this.state.user!==''&& this.state.pass!==''){
            fetch('http://localhost:9000/login', {
                headers: {
                            'Content-Type':'application/x-www-form-urlencoded'
                
                        },
            
                method: "POST",
                body:  queryString.stringify({'user':this.state.user,'pass':this.state.pass})

            })
            .then((response) => response.json())
            .then((data) => {
       
                this.setState({users:data})
            
                                })
                        }
                        
    }
    logOut=()=>{
        cookie.remove('userId', { path: '/' });
        cookie.remove('userType', { path: '/' });
        this.setState({isLogin:false,users:''});
        window.location.reload();
       
    }
    setUser= (e) => {
        this.setState({user: e.target.value})
        

    }
    setPass= (e) => {
        this.setState({pass: e.target.value})
        
            }
    showDataLogin=(user)=>{
        if(user.user===false){return(<div style={{color:'red'}}>ไม่มีuserนี้</div>)}
        else if(user.user===true){return(<div style={{color:'red'}}>รหัสผิด</div>)}
        else if(user.user!=null){ this.setState({isLogin:true});
                                cookie.save('userId', user.user, { path: '/' })
                                cookie.save('userType', user.type, { path: '/' })
                                window.location.reload();
                                }
    
        
    
    }
   
   
    render() {
        return (
            <div style={{border:'1px solid #C8C8C8',borderRadius: '12px',marginBottom:'15px',padding:'10px'}}>
            {this.state.isLogin ? (
            <div>
            <Columns >
              <Column size="isOneQuarter" context="isParent" isVertical >
                <Column  context="isChild">
                    คุณสมาชิก{this.state.user}
                </Column>
                <Column  context="isChild">
                    <Button style={{marginLeft:'70px',marginTop:'10px',background:'linear-gradient(to bottom, #ffffff 0%, #d9d9d9 100%)',padding:'0px'}} >
                         <Link to="/" onClick={() => this.logOut()} style={{padding:'7px',textDecoration: 'none'}}>
                         ออกจากระบบ
                         </Link>
                    </Button>
                
                </Column>
              </Column> 
             
            </Columns>

           
            </div>
            ):(<div> <Addons style={{paddingBottom:'10px', width:'150px',marginLeft:'20px'}} >
                <Label style={{paddingRight:'10px',paddingTop:'5px'}}>
                    Login 
                </Label>
                <Input type="text" placeholder="User input" onChange={(e) => this.setUser(e)}/>
            </Addons >
            
            
            <Addons style={{paddingBottom:'10px', width:'150px',marginLeft:'20px'}}  >
                <Label style={{paddingRight:'15px',paddingTop:'5px'}}>
                    Pass 
                </Label>
                <Input type="text" placeholder="Password" onChange={(e) => this.setPass(e)}/>
            </Addons >
            
            
            <Tile context="isParent" isVertical> 
                <Tile context="isChild" >
                    <Content>
                        <Button style={{marginLeft:'70px',marginTop:'10px',background:'linear-gradient(to bottom, #ffffff 0%, #d9d9d9 100%)',padding:'0px'}} >
                        
                        <Link to="/" onClick={() => this.logIn()} style={{padding:'7px'}}>
                        เข้าสู่ระบบ</Link>
                            
                        </Button>
                    </Content>
                </Tile>
    
                <Tile context="isChild">
                    <Content style={{marginTop:'1px'}}>
                        <Button style={{marginLeft:'1px',background:'linear-gradient(to bottom, #ffffff 0%, #d9d9d9 100%)',padding:'0px'}} >
                        <Link to=""  style={{padding:'7px'}}>
                        ลืมรหัสผ่าน</Link> 
                        </Button> 
                        <Button style={{marginLeft:'10px',background:'linear-gradient(to bottom, #ffffff 0%, #d9d9d9 100%)',padding:'0px'}}>
                        <Link to="/register" style={{padding:'7px'}}>
                        สมัครสมาชิก</Link> 
                            
                        </Button> 
                    </Content>
                </Tile>
    
            </Tile>
            <div>{this.showDataLogin(this.state.users)
                 }
            </div>
           </div>)}
          
        </div>


        );}
    }

export default login;