import React from 'react'
import './Login.css'
import NavBar from '../components/NavBar'
import { Img } from 'react-image'
import { Input, Button } from 'antd'
import SuccessAnim from '../components/SuccessAnim'

function Select() {
    return (
        <div>
            <div className='coverimg'>
                <Img src='https://lh3.googleusercontent.com/pw/AJFCJaWzzZ-P87KWzk-KRjSvcyJcaMLLfI4J_ZRXi8fcnALnIHf1JR_vWVZQhk3spOYu4PBT0TnejlkoQRSryvw5QEFdqKrG26GKiHd3475powSuyARmy9c=w2400'></Img>
            </div>
            <div className='navbar'></div>
            <NavBar />

            <div className='cover1'>
                <div className='logo'>
                    <Img style={{ position: "absolute", width: "180px", left: "185px", top: "35px", filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))' }} src="https://lh3.googleusercontent.com/pw/AJFCJaVyWq7poTyx6H-9o8_XSptAfWj0UKW25Cfn9i3U7Jv5IrJh5mkQy6QIuGsIj-st9QahH1-MWscw7EcDCvSVCNTvFnOLE3hmdtAjXLcgUbh-QdNbtyQ=w2400" />
                </div>
                <span className='heading1' style={{ marginTop: '115px' }}>Select Your Account</span>

                <Button className='Login' type="primary" style={{ background: '#7a9cff', width: '200px', height: '90px', borderRadius: '10px', fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '300', fontSize: '20px', marginTop: '200px', left: '53px' }} onClick={() => window.location.href = "/login"}>Physician</Button>
                <Button className='Login' type="primary" style={{ background: '#7a9cff', width: '200px', height: '90px', borderRadius: '10px', fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '300', fontSize: '20px', marginTop: '200px', left: '300px' }} onClick={() => window.location.href = "/userlogin"}>Daily User</Button>

            </div>
        </div>
    )
}

export default Select