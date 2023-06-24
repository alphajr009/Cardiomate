import React from 'react'
import './Regpvt.css'
import { Input, Button, Space } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useState } from 'react';


export default function Regdoc() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    nic: '',
    docno: '',
    permanent_address: '',
    dob: '',
    contact_no: '',
    agree_to_tos: false,
  });

  const handleChange = (e) => {
    var { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    var val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post('http://127.0.0.1:8000/register', formData);
      console.log(res.data);
      // handle successful registration here
    } catch (err) {
      console.error(err.response.data);
      // handle registration error here
    }
  };

  return (
    <>
      <div className="UserAccountReg">
        <div className='navbarform'>
          <NavBar />
        </div>
        <div className='heading'>
          <h1>
            Physician Account Registration
          </h1>

        </div>


        <div className='regpvtform'>
          <form onSubmit={handleSubmit}>
            <div className="table">
              <div className="fullname">
                <div>
                  <Input placeholder="Full Name" name="name" bordered={false} value={formData.name} onChange={handleChange} />
                </div>
              </div>

              <div className="Email">
                <div>
                  <Input placeholder="E-mail" name="email" bordered={false} value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="Username">
                <div>
                  <Input placeholder="Username" name="username" bordered={false} value={formData.username} onChange={handleChange} />
                </div>
              </div>

              <div className="Password">
                <div>
                  <Input placeholder="Password" name="password" bordered={false} value={formData.password} onChange={handleChange} />
                </div>
              </div>

              <div className="Con_Password">
                <div>
                  <Input placeholder="Confirm Password" name="confirm_password" bordered={false} value={formData.confirm_password} onChange={handleChange} />
                </div>
              </div>

              <div className="NIC">
                <div>
                  <Input placeholder="National Identity Card No" name="nic" bordered={false} value={formData.nic} onChange={handleChange} />
                </div>
              </div>

              <div className="docno" style={{ marginTop: '125px', marginLeft: '416px' }}>
                <div>
                  <Input placeholder="Doctor Registration No." bordered={false} value={formData.docno} onChange={handleChange} />
                </div>
              </div>



              <div className="Pay">
                <div>
                  <Input placeholder="Permanent Address" bordered={false} value={formData.permanent_address} onChange={handleChange} />
                </div>
              </div>

              <div className="DB">
                <div>
                  <Input placeholder="Date of Birth" bordered={false} value={formData.dob} onChange={handleChange} />
                </div>
              </div>

              <div className="Contact">
                <div>
                  <Input placeholder="Contact No" bordered={false} value={formData.contact_no} onChange={handleChange} />
                </div>
              </div>

              <div className="Check">
                <div>
                  <Checkbox value={formData.agree_to_tos} onChange={handleChange} />
                </div>
              </div>

              <div className="Check_sen">
                <div>
                  <p> I agree to Terms and Conditions and Privacy Policy </p>
                </div>
              </div>

              <div className="sign">
                <div>
                  <Space>
                    <Button className='sign' type="primary" htmlType="submit" style={{ background: '#000000', width: '85px', height: '35px', fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 300, fontSize: "13px" }}>Sign Up</Button>
                  </Space>
                </div>
              </div>


            </div>
          </form>
        </div>



      </div>
    </>

  )
}