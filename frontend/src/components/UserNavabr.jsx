import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Button, Image, Space } from 'antd';
import { Img } from 'react-image';

export default function UserNavabr() {
    return (
        <div>
            <div className='navbar'>

                <div className='navpic'>
                    <Space>
                        <Link Link to="/">
                            <Button type="link" >
                                <Img style={{ width: '200px', marginInline: '50px' }} src="https://lh3.googleusercontent.com/y3KRjymlbDxy0_6j16AlDsFduCX7POhmHitAPJl3xx7nFavJsC7NtnlZiRZgqI88PdusbfDkleQX1pum26UDv6c8VMKO9j5wtezLPvFFOZwd6_4wo6VA1jUkT-jg-SiIF0RWQodtZg=w2400" alt='logo' />
                            </Button>
                        </Link>
                    </Space>
                </div>


                <div className='MyAccount2'>
                    <Space>
                        <Button type="link" style={{ color: "white", fontSize: "17px", fontWeight: "revert" }}>My Account</Button>
                        {/* <Button type="link" disabled> */}
                    </Space>
                </div>

                <div className='About2'>
                    <Space>
                        <Link Link to="/about">
                            <Button type="link" style={{ color: "white", fontSize: "17px", fontWeight: "revert" }}>About</Button>
                            {/* <Button type="link" disabled> */}
                        </Link>
                    </Space>
                </div>

                <div className='Support2'>
                    <Space>
                        <Button type="link" style={{ color: "white", fontSize: "17px", fontWeight: "revert" }}>Support</Button>
                        {/* <Button type="link" disabled> */}
                    </Space>
                </div>



            </div>
        </div>
    )
}