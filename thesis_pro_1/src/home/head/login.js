import React, { Component } from 'react';
import {Input,Label,Addons,Button,Tile,Content}  from 're-bulma';

const login = () => (
    <div style={{border:'1px solid #C8C8C8',borderRadius: '12px',marginBottom:'15px',padding:'10px'}}>
        <Addons style={{paddingBottom:'10px', width:'150px',marginLeft:'20px'}} >
            <Label style={{paddingRight:'10px',paddingTop:'5px'}}>
                Login 
            </Label>
            <Input type="text" placeholder="User input" />
        </Addons >
        
        
        <Addons style={{paddingBottom:'10px', width:'150px',marginLeft:'20px'}}  >
            <Label style={{paddingRight:'15px',paddingTop:'5px'}}>
                Pass 
            </Label>
            <Input type="text" placeholder="Password" />
        </Addons >
        
        <Tile context="isParent" isVertical> 
            <Tile context="isChild" >
                <Content>
                    <Button style={{marginLeft:'70px',marginTop:'10px',background:'linear-gradient(to bottom, #ffffff 0%, #d9d9d9 100%)'}} >
                        เข้าสู่ระบบ
                    </Button>
                </Content>
            </Tile>

            <Tile context="isChild">
                <Content style={{marginTop:'1px'}}>
                    <Button style={{marginLeft:'1px',background:'linear-gradient(to bottom, #ffffff 0%, #d9d9d9 100%)'}} >
                        ลืมรหัสผ่าน
                    </Button> 
                    <Button style={{marginLeft:'10px',background:'linear-gradient(to bottom, #ffffff 0%, #d9d9d9 100%)'}}>
                        สมัครสมาชิก
                    </Button> 
                </Content>
            </Tile>

        </Tile>
    </div>);

export default login;