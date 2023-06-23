import React from 'react'
import {Img} from 'react-image'
import './Card.css'


export default function () {
  return (
    <div>
        <article>
    <section class="card">
      <div class="text-content">
        <h3>We always care.</h3>
            <p>you can easily find out if you may be at risk for heart disease by answering a few simple questions through an intuitive Q&A session.</p>  
        <a href="https://ant.design/components/overview/" target="_blank">Sign Up Now</a>
      </div>
      <div class="visual">
      <Img style={{ height: 300, right:200 }} src="https://lh3.googleusercontent.com/pw/AJFCJaVsAnPyU4eSwNPY8ZxlBVBV6NBBEdfz4TNx9Rr8EYUjYoFpXCAmZxvf-QyKJuf1z8t_BC9HndgYt1Ps8l1Dj68NZWeh9h1_f_D5i5X8IuNHnVrQrXQ=w2400" alt='img'/>
      </div>
    </section> 
  </article> 
    </div>
  )
}
