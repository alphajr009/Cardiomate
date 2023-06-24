import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import NavBar from '../components/NavBar'
import { Img } from 'react-image'
import { Input, Button } from 'antd'
import SuccessAnim from '../components/SuccessAnim'


export default function Userlogin() {

    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    async function Login() {
        try {
            const response = await axios.post('http://localhost:8000/test/login', {
                username: username,
                password: password
            });

            if (response.data.error) {
                // Set the login error message
                setLoginError(response.data.error);
            } else {
                // Reset the login error message
                setLoginError('');

                // Redirect to the home page or perform any additional actions
                window.location.href = '/userhome';
            }
        } catch (error) {
            console.error(error);
            // Handle error response
        }
    }



    return (
        <div>
            <div className='coverimg'>
                <Img src='https://lh3.googleusercontent.com/pw/AJFCJaWzzZ-P87KWzk-KRjSvcyJcaMLLfI4J_ZRXi8fcnALnIHf1JR_vWVZQhk3spOYu4PBT0TnejlkoQRSryvw5QEFdqKrG26GKiHd3475powSuyARmy9c=w2400'></Img>
            </div>
            <div className='navbar'></div>
            <NavBar />

            <div className='cover'>
                <div className='logo'>
                    <Img style={{ position: "absolute", width: "180px", left: "85px", top: "35px", filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))' }} src="https://lh3.googleusercontent.com/pw/AJFCJaVyWq7poTyx6H-9o8_XSptAfWj0UKW25Cfn9i3U7Jv5IrJh5mkQy6QIuGsIj-st9QahH1-MWscw7EcDCvSVCNTvFnOLE3hmdtAjXLcgUbh-QdNbtyQ=w2400" />
                </div>
                <span className='heading' style={{ marginTop: '125px' }}>Hello! Welcome Back!</span>
                <Input placeholder="Username" style={{ position: "absolute", width: "180px", left: "40px", top: "200px", filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))' }} bordered={false}
                    value={username}
                    onChange={(e) => { setusername(e.target.value) }} />

                <hr style={{ position: "absolute", width: "275px", left: "40px", top: "230px", filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))' }} />
                <Input placeholder="Password" type='password' style={{ position: "absolute", width: "180px", left: "40px", top: "260px", filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))' }} bordered={false}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
                <hr style={{ position: "absolute", width: "275px", left: "40px", top: "290px", filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))' }} />

                <div>
                    <p style={{ color: 'red', marginTop: '320px', marginLeft: '110px' }}>{loginError}</p>
                </div>
                <Button className='Login' type="primary" style={{ background: '#000000', width: '200px', height: '40px', borderRadius: '10px', fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '300', fontSize: '13px', marginTop: '359px', left: '73px' }} onClick={Login}
                >Login</Button>
            </div>
        </div>
    )
}