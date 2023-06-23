import React, { useState } from 'react';
import axios from 'axios';
import './Regpvt.css'
import { Input, Button, Space } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';
import NavBar from '../components/NavBar';
import DropDown from '../components/DropDown';

export default function Regpvt() {

    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nic, setnic] = useState('');
    const [currentMedicalSituation, setCurrentMedicalSituation] = useState('');
    const [permanetadd, setpermanetadd] = useState('');
    const [dob, setdob] = useState('');
    const [contact, setcontact] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleCurrentMedicalSituationChange = (value) => {
        setCurrentMedicalSituation(value);
    };

    const handleSignUp = () => {
        if (password === confirmPassword) {
            setPasswordError('');
        } else {
            setPasswordError('Password does not match');
            return;
        }

        if (agreed) {
            const data = {
                fullname,
                username,
                password,
                dob,
                nic,
                currentMedicalSituation,
                email,
                permanetadd,
                contact
            };

            // Make a POST request to the signup endpoint
            axios.post('http://localhost:8000/test/signup', {
                fullname: fullname,
                username: username,
                password: password,
                dob: dob,
                nic: nic,
                currentMedicalSituation: currentMedicalSituation,
                email: email,
                permanetadd: permanetadd,
                contact: contact
            })
                .then(response => {
                    // Handle the success response
                    console.log(response.data);
                    window.location.href = '/userlogin';
                })
                .catch(error => {
                    // Handle the error response
                    console.error(error);
                    // Show an error message to the user
                });

            setErrorMessage('');
        } else {
            setErrorMessage('Please agree to the Terms and Conditions and Privacy Policy.');
        }
    };

    return (
        <>
            <div className="UserAccountReg">
                <div className='navbarform'>
                    <NavBar />
                </div>
                <div className='heading'>
                    <h3>
                        User Account Registration
                    </h3>
                </div>
                <div className='regpvtform'>
                    <div className="table">
                        <div className="fullname">
                            <div>
                                <Input
                                    placeholder="Full Name"
                                    bordered={false}
                                    value={fullname}
                                    onChange={(e) => { setfullname(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="Email">
                            <div>
                                <Input
                                    placeholder="E-mail"
                                    bordered={false}
                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="Username">
                            <div>
                                <Input
                                    placeholder="Username"
                                    bordered={false}
                                    value={username}
                                    onChange={(e) => { setusername(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="Password">
                            <div>
                                <Input
                                    placeholder="Password"
                                    bordered={false}
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="Con_Password">
                            <div>
                                <Input
                                    placeholder="Confirm Password"
                                    bordered={false}
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {passwordError && <p style={{ color: 'red', marginTop: '360px', marginLeft: '85px' }}>{passwordError}</p>}
                        <div className="NIC">
                            <div>
                                <Input
                                    placeholder="National Identity Card No"
                                    bordered={false}
                                    value={nic}
                                    onChange={(e) => { setnic(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="Med_sit">
                            <div>
                                <DropDown
                                    onSelect={handleCurrentMedicalSituationChange}
                                    selectedValue={currentMedicalSituation}
                                />
                            </div>
                        </div>
                        <div className="Pay">
                            <div>
                                <Input
                                    placeholder="Permanent Address"
                                    bordered={false}
                                    value={permanetadd}
                                    onChange={(e) => { setpermanetadd(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="DB">
                            <div>
                                <Input
                                    placeholder="Date of Birth"
                                    bordered={false}
                                    value={dob}
                                    onChange={(e) => { setdob(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="Contact">
                            <div>
                                <Input
                                    placeholder="Contact No"
                                    bordered={false}
                                    value={contact}
                                    onChange={(e) => { setcontact(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="Check">
                            <Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                        </div>
                        <div className="Check_sen">
                            <div>
                                <p style={{ color: 'red', marginTop: '35px' }}>{errorMessage}</p>
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
                                    <Button
                                        className="sign"
                                        type="primary"
                                        style={{
                                            background: '#000000',
                                            width: '85px',
                                            height: '35px',
                                            fontFamily: 'Arial',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            fontSize: '13px',
                                        }}
                                        onClick={handleSignUp}
                                    >
                                        Sign Up
                                    </Button>
                                </Space>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
