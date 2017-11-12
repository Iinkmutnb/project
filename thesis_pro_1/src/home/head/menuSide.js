import React, { Component } from 'react';
import {Menu,MenuList,MenuLink,MenuLabel,Button} from 're-bulma';
import { Link} from 'react-router-dom';
import cookie from 'react-cookies';
class menuSide extends Component {
    constructor(props) {
        super(props);
        this.state = {checkAdmin:false}
    }
    componentDidMount() {
        
        var userType= cookie.load('userType');
        if(userType!=null&&(userType=="admin"||userType=="officer")){
            console.log("true")
            this.setState({checkAdmin:true});

            }
        
               

     

    }

    render() {
      
        return (
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
            <li><MenuLink href="#">สินค้าทั้งหมด</MenuLink></li>
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
    {this.state.checkAdmin?
    (
        <div>
        <Button> 
        <Link to="/editAdmin/product/insert" style={{padding:'7px',border:'1px solid'}}>เข้าสู่ะบบการแก้ไข
        </Link>
        </Button>

        </div>
    ):(<div> </div>
    )}
    

    </div>
        );
    }
}

export default menuSide;