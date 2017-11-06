import React, { Component } from 'react';
import {Tabs,TabGroup,Tab} from 're-bulma';
import { Link} from 'react-router-dom'
const tapMenu = ()=>(
    <div style={{   
       
  padding: '5px',
        border:'1px solid #C8C8C8',borderRadius: '12px',marginBottom:'15px',padding:'10px'}}>
    <Tabs>
        <TabGroup>
            <Tab ><Link to="/product">
                สินค้าแนะนำ</Link>
            </Tab>
            <Tab >
             สินค้า Promotion
            </Tab>
            <Tab>
                ตระกร้าสินค้า
            </Tab>
            <Tab>
                รีวิวสินค้า
            </Tab>
            <Tab>
                แผนที่ร้าน
            </Tab>
            <Tab>
                วิธีชำระเงิน
            </Tab>
            <Tab>
                ติดต่อ
            </Tab>
        </TabGroup>
    </Tabs>
    </ div>

);

export default tapMenu;
