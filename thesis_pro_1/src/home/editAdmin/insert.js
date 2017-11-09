import React, { Component } from 'react';
import {Menu} from 're-bulma';
import {Textarea,Button} from 're-bulma';
import cookie from 'react-cookies';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import queryString from 'query-string';
class insert extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl:''
    
                        }
       
    }
    componentDidMount() {
      
               
        this.props.setExact(true,true);
     

    }
    setImage=(e)=>{
        var reader = new FileReader();
        var file = e.target.files[0];
        //this.setState({file:file})
        reader.onloadend = () => {
            this.setState({
              file: file,
              imagePreviewUrl: reader.result
            });
          }
      
          reader.readAsDataURL(file)
        
        
    }

    uploadImage=(file,imagePreviewUrl)=> {
        console.log(imagePreviewUrl)
        return new Promise((resolve, reject) => {
          let imageFormData = new FormData();
      
          imageFormData.append('file', file);
          imageFormData.append('imagePreviewUrl', imagePreviewUrl);
          
          var xhr = new XMLHttpRequest();
          
          xhr.open('post','http://localhost:9000/uploadImage', true);
          
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
    render() {
      
        return (
            <div style={{webkitBorderRadius:' 0% 0% 100% 100% / 0% 0% 8px 8px',webkitBoxShadow: 'rgba(0, 0, 0,.30) 0 2px 3px' }}>
              <div style={{padding:"10px 10px 10px 10px",marginLeft:'25px',background:'white',border: '0px 1px 1px 1px solid #ccc',boxShadow: '1px 1px 2px #fff inset,-1px -1px 2px #fff inset',borderRadius: '3px/6px' }}>
                 <br/>
                 <table style={{marginTop:'50px'}}>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> รหัส: </b>
                        </td>
                        <td>
                        <input color="isSuccess" type="text" placeholder="" style={{width:'205px',height:'25px',border:'solid 1px',borderColor:'#99ccff',borderRadius:' 5px'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> ชื่อ: </b>
                        </td>
                        <td>
                        <input color="isSuccess" type="text" placeholder="" style={{width:'205px',height:'25px',border:'solid 1px',borderColor:'#99ccff',borderRadius:' 5px'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> ชื่อ: </b>
                        </td>
                        <td>
                        <input  type="text" placeholder="" style={{width:'205px',height:'25px',border:'solid 1px',borderColor:'#99ccff',borderRadius:' 5px'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> ราคา: </b>
                        </td>
                        <td>
                            
                        <input  min="1"  type="number" placeholder="" style={{width:'205px',height:'25px',border:'solid 1px',borderColor:'#99ccff',borderRadius:' 5px'}}  />
                        </td>
                    </tr>
                   

                </table>
                <table>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> คำอธิบาย: </b>
                        
                            
                        <Textarea  color="isInfo" style={{width:'300px'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b style={{ color:'grey'}}> รูป: </b>
                        
                        </td>
                        <td>

                            <input type="file" onChange={(e)=>{this.setImage(e)}} />
                            
                        </td>
                    </tr>
                    </table>
                    <Button color="isSuccess" onClick={()=>this.uploadImage(this.state.file,this.state.imagePreviewUrl)}><b style={{ color:'white'}}>ยืนยันการเพิ่มสินค้า</b></Button>
                        
                </div>

            </div>
        );
    }
}

export default insert;