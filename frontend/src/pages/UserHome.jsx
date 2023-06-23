import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import UserNavabr from '../components/UserNavabr'
import BottomBar from '../components/BottomBar'
import { Img } from 'react-image'
import { Button } from 'antd'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Popup from '../components/Popup'
import Plans from './Plans';




export default function UserHome() {
    return (
        <>

            <div className='rect' />

            <div className="home">
                <UserNavabr />

            </div>
            <div className='logo'>
                <Img style={{ position: "absolute", width: "500px", left: "350px", top: "223px", filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))' }} src="https://lh3.googleusercontent.com/y3KRjymlbDxy0_6j16AlDsFduCX7POhmHitAPJl3xx7nFavJsC7NtnlZiRZgqI88PdusbfDkleQX1pum26UDv6c8VMKO9j5wtezLPvFFOZwd6_4wo6VA1jUkT-jg-SiIF0RWQodtZg=w2400" />
            </div>

            <div className='text1'>
                <h1>Your Heart Assistant.</h1>
                <p className='text2'>
                    Start your journey towards a healthier, stronger heart!
                </p>
            </div>


            <div className='viewplans2'>

                <Button type='primary' style={{ background: '#FFA842', width: '142px', height: '49px', fontStyle: 'normal', fontWeight: 700, fontSize: "16px" }} >
                    Check Up
                </Button>

            </div>

            <div className='homeimg'>
                <Img style={{ position: 'absolute', width: '400px', left: '1222px', top: '66px', filter: 'drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25))' }} src="https://lh3.googleusercontent.com/OShEfTrBXv6eeQ3joxHK-5z7n8UKASQLhCcaWesE2BcVN_-kub9-nJqB4_l8pEpkcQkRnVwvSn9YXlD1YcsL7fMnrwriA9V9FB2LFPFT6KrRRd86RLBmmKrgt5EhbDE0BoGY_y3ZKA=w2400" />
            </div>

            <div className='welcome'>
                Welcome to CardioMate!
            </div>
            <div className='text4'>
                an advanced heart disease analyzer that helps you stay on top of your heart health.
            </div>
            <div className='care'>
            </div>
            <div className='care2'>
            </div>
            <p className='text5'>We Care</p>
            <p className='text6'>About You</p>
            <p className='text7'>It is estimated that dietary risk factors are associated with 53% of CVD deaths. -Wikipedia</p>

            <div className='moreinfo'>
                <Button type='link' style={{ color: '#FFFFFF', left: '15px', top: '15px' }}>More Information</Button>
            </div>

            <div className='card1'>
                <Card />
            </div>

            <div className='card2'>
                <Card2 />
            </div>

            <div className='bottombar'>
                <BottomBar />
            </div>


        </>

    )
}
