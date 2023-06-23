import React from 'react'
import './Plans.css'
import NavBar from '../components/NavBar'
import BottomBar from '../components/BottomBar'
import { Img } from 'react-image'
import { Button } from 'antd'

export default function Plans() {
  return (
    <>
    
    <div className="home">

    <div className='rect'>
        <Img style={{filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))'}} src='https://lh3.googleusercontent.com/Ir_ejp3vF2i4Cj0cW3Fu82cea7MFk9CM_mGdFUd_6YXE7eBlRD4ZERbNLAvFnuwMSKDMsNdHuMjALYmcaigXBKV6LX2hQm71XLR8v2AmZ8fNVUwqhd7VAuPvH2FdNsoXdfGrKtgfZw=w2400'/>
    </div>
        <NavBar />
        
      </div>
    <div className='logo'>
      <Img style={{position: "absolute", width: "431px", left: "750px", top: "160px", filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))'}} src="https://lh3.googleusercontent.com/y3KRjymlbDxy0_6j16AlDsFduCX7POhmHitAPJl3xx7nFavJsC7NtnlZiRZgqI88PdusbfDkleQX1pum26UDv6c8VMKO9j5wtezLPvFFOZwd6_4wo6VA1jUkT-jg-SiIF0RWQodtZg=w2400"/>
    </div>
    <div className='rect01'>
    </div>
    <div className='rect11'/>
    <div className='rect02'>
    </div>
    <div className='rect12'/>
    <div className='price1'>
    $29.99/month
    </div>
    <div className='price2'>
    $129.99/month
    </div>
    
    <div className='bottombar'>
      <BottomBar/>
    </div>


  </>
    
  )
}
