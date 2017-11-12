import React, { Component } from 'react';
import {Menu} from 're-bulma';
import {Textarea,Button,Modal,Content,Columns ,Column} from 're-bulma';
import cookie from 'react-cookies';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
class edits extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl:'',code:'',name:'',price:'',src:'',definition :'',checkSuccess:0,isOpen:true,
                     checkCode:0,checkName:0,checkPrice:0,checkDefinition:0,checkFile:0,
                     codeOld:'',nameOld:'',priceOld:'',srcOld:'',definitionOld :''
    
                        }
       
    }
    componentDidMount() {
    this.props.setExact(true,true);
    fetch('http://localhost:9000/selectOneProduct', {
        headers: {
                  'Content-Type':'application/x-www-form-urlencoded'
      
                 },
     
     
         method: "POST",
         body:  queryString.stringify({'code':this.props.match.params.code})
        
       
     })
     .then((response) => response.json())
     .then((data) => {
     this.setState({codeOld:data.code,nameOld:data.name,priceOld:data.price,srcOld:data.src,definitionOld:data.des})
    
     })
     .catch(function(error) {console.log( error.message);});
     

    }
    setCloserModal=()=>{
       
        window.location.href = '/editAdmin/product/edit';
    }
    setDataInsert=(name,value)=>{
        
        if(name==="code"){
            this.setState({code:value})

        }else if(name==="name"){
            this.setState({name:value})

        }else if(name==="price"){
            this.setState({price:value})
            
        }else if(name==="definition"){
            this.setState({definition:value})
        }
       
   
    }
    setImage=(e)=>{
        var reader = new FileReader();
        var file = e.target.files[0];
   
        reader.onloadend = () => {
            this.setState({
              file: file,
              imagePreviewUrl: reader.result
            });
          }
      
          reader.readAsDataURL(file)
        
        
    }

    editData=(file,imagePreviewUrl)=> {
        if(this.state.code==""){this.setState({checkCode:1})}else{this.setState({checkCode:0})}
        if(this.state.name==""){this.setState({checkName:1});}else{this.setState({checkName:0})}
        if(this.state.price==""){this.setState({checkPrice:1});}else{this.setState({checkPrice:0})}
        if(this.state.definition==""){this.setState({checkDefinition:1});}else{this.setState({checkDefinition:0})}
        if(this.state.file==""){this.setState({checkFile:1});}else{this.setState({checkFile:0})}
       
        if(this.state.code!==""&&this.state.name!==""&&this.state.price!==""&&this.state.definition!==""&&file!==""){
            fetch('http://localhost:9000/checkEditProduct', {
                headers: {
                          'Content-Type':'application/x-www-form-urlencoded'
              
                         },
             
             
                 method: "POST",
                 body:  queryString.stringify({"codeOld":this.state.codeOld,'nameOld':this.state.nameOld,'srcOld':this.state.srcOld,'code':this.state.code,'name':this.state.name,'file':file.name})
                
               
             })
             .then((response) => response.json())
             .then((data) => {
              
             
              //{"checkCode":true,"checkName":true,"checkFile":true}
              var checkCode=false; var checkName=false; var checkFile=false;
               checkCode=data.checkCode;checkName=data.checkName;checkFile=data.checkFile;
               if(checkCode){this.setState({checkCode:0})}else{this.setState({checkCode:2})}
               if(checkName){this.setState({checkName:0})}else{this.setState({checkName:2})}
          
               if(checkFile){this.setState({checkFile:0})}else{this.setState({checkFile:2})}

                if(checkCode&&checkName&&checkFile){
                    fetch('http://localhost:9000/editProduct', {
                        headers: {
                                  'Content-Type':'application/x-www-form-urlencoded'
                      
                                 },
                     
                     
                         method: "POST",                  
                         body:  queryString.stringify({'codeOld':this.state.codeOld,'code':this.state.code,'name':this.state.name,'price':this.state.price,'file':this.state.file.name,'definition':this.state.definition})
                        
                       
                     })
                     .then((response) => response.json())
                     .then((data) => { 
                      if( data.qreury){this.setState({checkSuccess:1,isOpen:true})}
                      else {this.setState({checkSuccess:2,isOpen:true})}
                      if( data.qreury){
                        return new Promise((resolve, reject) => {
                            let imageFormData = new FormData();
                            imageFormData.append('imageOld', this.state.srcOld);
                            imageFormData.append('file', file);
                          
                            imageFormData.append('imagePreviewUrl', imagePreviewUrl);
                            
                            
                            var xhr = new XMLHttpRequest();
                            
                            xhr.open('post','http://localhost:9000/editUploadImageProduct', true);
                            
                            xhr.onload = function () {
                                if (this.status == 200) {
                                resolve(this.response);
                                } else {
                                reject(this.statusText);
                                }
                            };
                            
                            xhr.send(imageFormData);
              
                        });
                    }

                     })
                     .catch(function(error) {console.log( error.message);});
                    
                }
               
              
              })
             .catch(function(error) 
              {
                console.log( error.message);
              });
         
        }
    
    }
    render() {
     
        return (
            <div style={{webkitBorderRadius:' 0% 0% 100% 100% / 0% 0% 8px 8px',webkitBoxShadow: 'rgba(0, 0, 0,.30) 0 2px 3px' }}>
              <div style={{padding:"10px 10px 10px 10px",marginLeft:'25px',background:'white',border: '0px 1px 1px 1px solid #ccc',boxShadow: '1px 1px 2px #fff inset,-1px -1px 2px #fff inset',borderRadius: '3px/6px' }}>
             
                 <br/>
                
                 <Columns>
                 <Column>
                 <h3 style={{color:'grey'}}>แก้ไขสินค้ารหัส :{this.props.match.params.code}</h3>
                 <table style={{marginTop:'50px'}}>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> รหัส: </b>
                        </td>
                        <td>
                        <input onChange={e=>this.setDataInsert("code",e.target.value)} value={this.state.code} color="isSuccess" type="text" placeholder=""  style={{width:'205px',height:'25px',border:'solid 1px',borderColor:'#99ccff',borderRadius:' 5px'}}/>
                        </td>
                        
                    </tr>
                    <tr><td></td><td>{this.state.checkCode==0?(<div></div>):(<div>{this.state.checkCode==1?(<div style={{color:"red"}}>กรุณาใส่รหัส</div>):(<div style={{color:"red"}}>รหัสนี้ใช้แล้ว กรุณาใช้รหัสอื่น</div>)}</div>)}</td></tr>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> ชื่อ: </b>
                        </td>
                        <td>
                        <input onChange={e=>this.setDataInsert("name",e.target.value)} value={this.state.name}  color="isSuccess" type="text" placeholder="" style={{width:'205px',height:'25px',border:'solid 1px',borderColor:'#99ccff',borderRadius:' 5px'}}/>
                        </td>
                       
                    </tr>
                    
                    <tr><td></td> <td>{this.state.checkName==0?(<div></div>):(<div>{this.state.checkName==1?(<div style={{color:"red"}}>กรุณาใส่ชื่อสินค้า</div>):(<div style={{color:"red"}}>ชื่อสินค้านี้ใช้แล้ว กรุณาใช้ชื่ออื่น</div>)}</div>)}</td></tr>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> ราคา: </b>
                        </td>
                        <td>
                            
                        <input onChange={e=>this.setDataInsert("price",e.target.value)} value={this.state.price}   min="0"  type="number" placeholder="" style={{width:'205px',height:'25px',border:'solid 1px',borderColor:'#99ccff',borderRadius:' 5px'}}  />
                        </td>
                       
                    </tr>
                    <tr><td></td> <td>{this.state.checkPrice==0?(<div></div>):(<div style={{color:"red"}}>กรุณาใส่ราคา</div>)}</td></tr>
                    

                </table>
                <table>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> คำอธิบาย: </b>
                        
                            
                        <Textarea  onChange={e=>this.setDataInsert("definition",e.target.value)} color="isInfo" style={{width:'300px'}}/>
                        </td>
                       
                    </tr>
                    <tr>
                    <td>{this.state.checkDefinition==0?(<div></div>):(<div style={{color:"red"}}>กรุณาใส่คำอธิบาย</div>)}</td>
                    </tr>
                  
                    <tr>
                        <td>
                        <input type="file" onChange={(e)=>{this.setImage(e)}} />  <b style={{ color:'grey'}}> รูป: </b>
                        
                        </td>
                    </tr>
                    <tr> 
                         <td>{this.state.checkFile==0?(<div></div>):(<div>{this.state.checkFile==1?(<div style={{color:"red"}}>กรุณาใส่รูป</div>):(<div style={{color:"red"}}>ชื่อรูปซ้ำ กรุณาใช้ชื่อรูปอื่น</div>)}</div>)}</td>
                        
                    </tr>
                    
                    </table>
                    <Button color="isSuccess" onClick={()=>this.editData(this.state.file,this.state.imagePreviewUrl)}><b style={{ color:'white'}}>ยืนยันการเพิ่มสินค้า</b></Button>
                    </Column>
                    <Column>
                    <h3 style={{color:'grey'}}>ข้อมูลก่อนแก้ไขสินค้า</h3>
                    <table style={{marginTop:'50px'}}>
                        <tr><td>รหัส:{this.state.codeOld} </td></tr>
                        <tr><td>ชื่อ:{this.state.nameOld} </td></tr>
                        <tr><td>ราคา:{this.state.priceOld} </td></tr>
                        <tr><td>คำอธิบาย:{this.state.definitionOld} </td></tr>
                        <tr><td>รูป:{this.state.srcOld} </td></tr>
                        <tr><td><br/><br/><br/><br/><br/><br/><br/><br/></td></tr>
                        <tr><td><Button color="isWarning" style={{padding:'0px'}}><Link to={`/editAdmin/product/edit`}  style={{padding:'7px',textDecoration:'none'}}><b style={{ color:'black'}}>กลับไปหน้าตารางแก้ไขสินค้า</b></Link></Button></td></tr>
                        
                    </table>
                    
                     
                  
                    </Column>
                    </Columns>
                </div>  
                {this.state.checkSuccess==0?(<div></div>)
                :(<div>
                    {this.state.checkSuccess==1?
                    (<div>
                        <Modal
                        type="card"
                        headerContent=""
                        footerContent={<div style={{ padding: '20px'}} ></div>}
                        isActive={this.state.isOpen}
                        onCloseRequest={() => this.setCloserModal()}
                        >
                        <Content>
                        แก้ไขสินค้าเรียบร้อย
                        </Content>
                        </Modal>

                    </div>):
                    (<div>
                        <Modal
                        type="card"
                        headerContent=""
                        footerContent={<div style={{ padding: '20px'}} ></div>}
                        isActive={this.state.isOpen}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        >
                        <Content>
                        เกิดข้อผิดพลาด กรุณากดแก้ไขสินค้าใหม่
                        </Content>
                        </Modal>
                    </div>)
                    }
                 </div>)
                }  
                               

            </div>
        );
    }
}

export default edits;