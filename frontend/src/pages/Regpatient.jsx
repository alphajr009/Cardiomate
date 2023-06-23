import React from 'react'
import './Regpatient.css'
import { Input,Button,Space} from 'antd';
import NavBar from '../components/NavBar';
import DropDown from '../components/DropDown';



export default function Regpatient() {

 

  return (
    <>
      <div className="UserAccountReg">
      <div className='navbarform'>
        <NavBar/>
      </div>
      <div className='heading'>
      <h1>
      Patient Registration
      </h1>

      </div>
        
    <div className='regpvtform'>
    
        <div className="table">
        <div className="fullname">
            <div>
            <Input placeholder="Full Name" bordered={false} /> 
            </div>
        </div>

        <div className="Email">
            <div>
            <Input placeholder="E-mail" bordered={false} /> 
            </div>
        </div>

        <div className="Username">
            <div>
            <Input placeholder="Username" bordered={false} /> 
            </div>
        </div>

        <div className="Password">
            <div>
            <Input placeholder="Password" bordered={false} /> 
            </div>
        </div>

        <div className="Con_Password">
            <div>
            <Input placeholder="Confirm Password" bordered={false} /> 
            </div>
        </div>

        <div className="NIC">
            <div>
            <Input placeholder="National Identity Card No" bordered={false} /> 
            </div>
        </div>

        <div className="Med_sit">
            <div>
            <DropDown/>
            </div>
        </div>


        <div className="Pay">
            <div>
            <Input placeholder="Permanent Address" bordered={false} /> 
            </div>
        </div>

        <div className="DB">
            <div>
            <Input placeholder="Date of Birth" bordered={false} /> 
            </div>
        </div>

        <div className="Contact">
            <div>
            <Input placeholder="Contact No" bordered={false} /> 
            </div>
        </div>


        
          <Space>
            <Button className='sign' type="primary" style={{background: '#000000', width:'150px', height: '35px', fontFamily: 'Arial', fontStyle:'normal', fontWeight: 300, fontSize: "13px", left: '300px', top:'500px'}}>Register Patient</Button>
          </Space>
        
        </div>
        
        </div>

        

    </div>
      </>
    
  )
}