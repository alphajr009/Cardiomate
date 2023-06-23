import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import React from 'react'

export default function Popup() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <Button type="primary" onClick={showModal} style={{background: '#8CAAFF', width: '122px', height: '46px', fontStyle:'normal', fontWeight: 600, fontSize: "13px"}}>
        Sign Up
      </Button>
      
      <Modal title="Are You a" open={isModalOpen} footer={[null]} onCancel={handleCancel}>
      <div className='popup'  style={{display: 'grid', justifyContent: 'center'}}>
        <Link to='/registerphy'><Button type='primary' style={{backgroundColor:'#6990FF'}}>Physician</Button></Link>
        <h2 style={{display: 'grid', justifyContent: 'center'}}>Or a</h2>
        <Link to='/registerusr'><Button type='primary' style={{backgroundColor:'#6990FF'}}>Daily User</Button></Link>
        </div>
      </Modal>
      
    </div>
  )
}

