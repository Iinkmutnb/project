import React, { Component } from 'react';
import {Menu,MenuList,MenuLink,MenuLabel} from 're-bulma';
const menuSide = ()=>(
    <div>
    <Menu style={{border:'1px solid #C8C8C8',borderRadius: '12px 12px 0px 0px',background:'linear-gradient(to bottom, #bfbfbf 0%, #ffffff 100%)',padding:'10px'}}>
        <MenuLabel>
            <h1 style={{color:'black'}}> สินค้า</h1>
        </MenuLabel>
     
  </Menu> 
  <Menu style={{borderColor: '#C8C8C8',
borderStyle: 'solid',
borderWidth: '0px 1px 1px 1px',borderRadius: '0px 0px 12px 12px'}}>
  <MenuList>
            <li><MenuLink href="#">กบยาง</MenuLink></li>
            <li><MenuLink href="#">งานไม้</MenuLink></li>
            <li><MenuLink href="#">หนอนยาง</MenuLink></li>
            <li><MenuLink href="#">เรชิน</MenuLink></li>
            <li><MenuLink href="#">สายPE</MenuLink></li>
            <li><MenuLink href="#">คันเบ็ด</MenuLink></li>
            <li><MenuLink href="#">รอก</MenuLink></li>
            <li><MenuLink href="#">ฮุกตัวเบ็ด</MenuLink></li>
            <li><MenuLink href="#">เครื่องแต่งกาย</MenuLink></li>
            <li><MenuLink href="#">อื่นๆ</MenuLink></li>

           

        </MenuList>
    </Menu>
    </div>

                   );
export default menuSide;