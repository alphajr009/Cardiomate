import React from 'react'
import './BottomBar.css'
import { Button, Space } from 'antd';
import { Img } from 'react-image';

export default function BottomBar() {
  return (
    <><div className ='Bottombar'>
      <div className='Cardilogo'>
    <Img src = "C:\Users\bhawa\Desktop\white.png" alt = "logo" />
    </div>

    <div className='policies'>
    <h1> Policies </h1>
    </div>
    
    <div className='policiesCo'>
    <div className='MP'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px",  left: "1.00%"}}>Medical Policies</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>

    <div className='PP'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px"}}>Privacy Policies</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>
    
    <div className='TR'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px"}}>Terms of use</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>
    </div>
    

    <div className='Services'>
    <h1> Services </h1>
    </div>

    <div className='ServicesCo'>
    <div className='AU'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px"}}>About Us</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>
    
    <div className='Pl'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px"}}>Plans</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>
    
    <div className='reg'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px"}}>Register</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>
    </div>
    

    <div className='Find_Us'>
    <h1> Find Us </h1>
    </div>

    <div className='Find_UsCo'>
    <div className='ho'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px"}}>Hospitals</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>
    
    <div className='do'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px"}}>Doctors</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>
    
    <div className='sm'>
      <Space>
        <Button type="link" style={{ color: "White", fontSize: "12px"}}>Social Media</Button>
        {/* <Button type="link" disabled> */}
      </Space>
    </div>
    </div>
    

    <div className='copy'>  
    Copyright 2022 © CardioMate. All Rights Reserved.
    </div>
      
    <div className='flogo'>
    <Img src = "C:\Users\bhawa\Desktop\facebook.png" alt = "facebook" />
    </div>

    <div className='tlogo'>
    <Img src = "C:\Users\bhawa\Desktop\twitter" alt = "twitter" />
    </div>

    <div className='ilogo'>
    <Img src = "C:\Users\bhawa\Desktop\insta.png" alt = "instalogo" />
    </div>
    </div>
    </>
  )
}