import React from 'react'
import './About.css'
import { Image } from 'antd';
import NavBar from '../components/NavBar';
import { Img } from 'react-image';

const About = (props) => {
  return (
    <div className='about'>
      <>
      <div className='navbarabout'>
        <NavBar/>
      </div>

      <div className='homepic'>
        <Img src="https://lh3.googleusercontent.com/b8oJhzeEfwlCmKX83M7mjOsJb1VzO8KzyM0EgCoYxDvCWAs3Cn2UoeVMiSF9H737WMT3Juwxjdv5vA9_VHJvIHMnJM0-GqiofU0e1ppxxhEDULr23HX12eMYXiTfNxNPBS9c7EZqpw=w2400"/>
      </div>

      <div className='homelogo'>
        <Image src="./blue.png"/>
      </div>

      <div className='assistanttxt'>
        <span>Your Heart Assistant</span>
      </div>

      <div className='teamtxt'>
        <span>Our Team</span>
      </div>

      <div className='p1'>
        <Image src="./white.png"/>
      </div>

      <div className='p2'>
        <Image src="./white.png"/>
      </div>

      <div className='p3'>
        <Image src="./white.png"/>
      </div>

      <div className='p4'>
        <Image src="./white.png"/>
      </div>

      <div className='para'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate, nisl sed pretium pretium, ante erat
          ullamcorper quam, in fermentum eros quam non massa. Duis diam dui, accumsan non convallis tempus, scelerisque sit amet
          nisl. Maecenas sagittis ultrices facilisis. Nam non pulvinar metus. Nullam ultrices vestibulum libero vel tincidunt.
          Duis sit amet turpis placerat, blandit ex sit amet, euismod tellus. Mauris ante eros, finibus eget blandit ac, blandit
          consequat elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean consequat
          elit a purus viverra ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate, nisl sed
          pretium pretium, ante erat ullamcorper quam, in fermentum eros quam non massa. Duis diam dui, accumsan non convallis
          tempus, scelerisque sit amet nisl. Maecenas sagittis ultrices facilisis. Nam non pulvinar metus. Nullam ultrices
          vestibulum libero vel tincidunt. Duis sit amet turpis placerat, blandit ex sit amet, euismod tellus. Mauris ante eros,
          finibus eget blandit ac, blandit consequat elit. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Aenean consequat elit a purus viverra ultricies.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praese0nt vulputate, nisl sed pretium pretium, ante erat ullamcorper quam,
          in fermentum eros quam non massa. Duis diam dui, accumsan non convallis tempus, scelerisque sit amet nisl.
          Maecenas sagittis ultrices facilisis. Nam non pulvinar metus. Nullam ultrices vestibulum libero vel tincidunt.567890
          Duis sit amet turpis placerat, blandit ex sit amet, euismod tellus. Mauris ante eros, finibus eget blandit ac,
          blandit consequat elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aenean consequat elit a purus viverra ultricies.</p>
      </div>

      {/* <div className='rec'>
        <p>Protect yourself from Cardiovascular diseases. Start your session now.</p>
      </div> */}
      </>

    </div>

    
  )
}

export default About