import React, { Component } from 'react';
import {Tabs,TabGroup,Tab,Box} from 're-bulma';
import { Link} from 'react-router-dom'
const tapMenu = ()=>(
    <div /* style={{   
       
       bgColor:'white',border:'1px solid #C8C8C8',borderRadius: '12px',marginBottom:'15px',padding:'10px'}}*/>
       <Box>
    <Tabs  tabStyle="isBoxed" style={{bgColor:'white'}}>
    <TabGroup >
    <Tab isActive >
            <Link  to="/product" style={{outline:'0', textDecoration: 'none',border:'none'}}>
       
            
           สินค้าแนะนำ
           
            </Link>
              
            </Tab > 
            <Tab  >
            <Link  to="s" style={{outline:'0', textDecoration: 'none',border:'none'}}>
            
              สินค้า Promotion
                
              </Link>
             </Tab > 
             <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
            
                ตระกร้าสินค้า
            </Link>
            <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
                รีวิวสินค้า
            </Link>
            <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
                แผนที่ร้าน
            </Link>
            <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
                วิธีชำระเงิน
            </Link>
            <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
                ติดต่อ
            </Link>
            
    </TabGroup>
    </Tabs>
    </Box>
    </ div>

);

export default tapMenu;
/*

<Tabs  >

        <Link  to="/product" style={{outline:'0', textDecoration: 'none',border:'solid 1px',marginHorizontal:'0px'}}>
        
        <b> สินค้าแนะนำ</b> 
       
        </Link>
          
      
        <Link to="/s" style={{outline:'0', textDecoration: 'none',width:'80px',border:'solid 1px',marginHorizontal:'0px'}}>
        
        <b>   สินค้า Promotion</b> 
            
         </Link>
         <Link to="/s" style={{outline:'0', textDecoration: 'none',marginHorizontal:'0px'}}>
        
            ตระกร้าสินค้า
        </Link>
        <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
            รีวิวสินค้า
        </Link>
        <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
            แผนที่ร้าน
        </Link>
        <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
            วิธีชำระเงิน
        </Link>
        <Link to="/s" style={{outline:'0', textDecoration: 'none'}}>
            ติดต่อ
        </Link>
        
  
</Tabs>*/