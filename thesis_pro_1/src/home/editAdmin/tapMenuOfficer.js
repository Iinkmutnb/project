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
        if(window.location.pathname=="/editAdmin/officer/insert"){
            this.setState({checkActiveTabBar:1})
        }
        else if(window.location.pathname=="/editAdmin/officer/edit"){
                this.setState({checkActiveTabBar:2})
            }
        else if(window.location.pathname=="/editAdmin/officer/delete"){
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
                                        <Link  to="/editAdmin/officer/insertOfficer" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(1)}>
                                            เพิ่มพนักงาน
                                        </Link>
                                    </Tab>
                                                        
                                </div>
                        ):(
                                <div>
                                    <Tab>
                                        <Link  to="/editAdmin/officer/insertOfficer" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(1)}>
                                            เพิ่มพนักงาน
                                        </Link>
                                    </Tab>
                                </div>
                        )
                    }
                    {this.state.checkActiveTabBar==2?
                        (
                                <div>
                                    <Tab  isActive>
                                        <Link  to="/editAdmin/officer/editOfficer" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(2)}>
                                            แก้ไขพนักงาน
                                        </Link>
                                    </Tab>
                                                        
                                </div>
                        ):(
                                <div>
                                    <Tab>
                                        <Link  to="/editAdmin/officer/editOfficer" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(2)}>
                                            แก้ไขพนักงาน
                                        </Link>
                                    </Tab>
                                </div>
                        )
                    }
                    {this.state.checkActiveTabBar==3?
                        (
                                <div>
                                    <Tab  isActive>
                                        <Link  to="/editAdmin/officer/deleteOfficer" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(3)}>
                                            ลบพนักงาน
                                        </Link>
                                    </Tab>
                                                        
                                </div>
                        ):(
                                <div>
                                    <Tab>
                                        <Link  to="/editAdmin/officer/deleteOfficer" style={{outline:'0', textDecoration: 'none',border:'none'}} onClick={() =>this.setIsActiveTabBar(3)}>
                                            ลบพนักงาน
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