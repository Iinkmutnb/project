import React, { Component } from 'react';
import {Menu} from 're-bulma';
import {Tabs,TabGroup,Tab} from 're-bulma';
import cookie from 'react-cookies';
import { Link} from 'react-router-dom'
class tapMenuProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {checkActiveTabBar:1

        }
    }
    componentDidMount() {
        if(window.location.pathname=="/editAdmin/product/insert"){
            this.setState({checkActiveTabBar:1})
        }
        else if(window.location.pathname=="/editAdmin/product/edit"){
                this.setState({checkActiveTabBar:2})
            }
        else if(window.location.pathname=="/editAdmin/product/delete"){
                this.setState({checkActiveTabBar:3})
        }
               
        this.props.setExact(true,true);
     

    }
    setIsActiveTabBar=(value)=>{
            this.setState({checkActiveTabBar:value})
        
    }

    render() {
      
        return (
            <div>
                
                <Tabs tabStyle="isBoxed">
                    <TabGroup>
                    {this.state.checkActiveTabBar==1?
                        (
                                <div>
                                    <Tab  isActive>
                                        <Link  to="/editAdmin/product/insert" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(1)}>
                                            เพิ่มสินค้า
                                        </Link>
                                    </Tab>
                                                        
                                </div>
                        ):(
                                <div>
                                    <Tab>
                                        <Link  to="/editAdmin/product/insert" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(1)}>
                                            เพิ่มสินค้า
                                        </Link>
                                    </Tab>
                                </div>
                        )
                    }
                    {this.state.checkActiveTabBar==2?
                        (
                                <div>
                                    <Tab  isActive>
                                        <Link  to="/editAdmin/product/edit" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(2)}>
                                            แก้ไขสินค้า
                                        </Link>
                                    </Tab>
                                                        
                                </div>
                        ):(
                                <div>
                                    <Tab>
                                        <Link  to="/editAdmin/product/edit" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(2)}>
                                            แก้ไขสินค้า
                                        </Link>
                                    </Tab>
                                </div>
                        )
                    }
                    {this.state.checkActiveTabBar==3?
                        (
                                <div>
                                    <Tab  isActive>
                                        <Link  to="/editAdmin/product/delete" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(3)}>
                                            ลบสินค้า
                                        </Link>
                                    </Tab>
                                                        
                                </div>
                        ):(
                                <div>
                                    <Tab>
                                        <Link  to="/editAdmin/product/delete" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(3)}>
                                            ลบสินค้า
                                        </Link>
                                    </Tab>
                                </div>
                        )
                    }
               
                    
                        
                    </TabGroup>
                </Tabs>
               

    </div>
        );
    }
}

export default tapMenuProduct;