import React from 'react'
import {Img} from 'react-image'
import './Card2.css'


export default function () {
  return (
    <div>
        <article>
    <section class="card">
      <div class="text-content">
        <h3>Detailed Report</h3>
            <p>CardioMate then quickly analyzes your data and generates a detailed report that not only predicts your risk of heart disease, but also provides personalized recommendations on how you can improve your heart health.</p>  
        <a href="https://ant.design/components/overview/" target="_blank">Sign Up Now</a>
      </div>
      <div class="visual">
      <Img style={{ height: 300, right:200 }} src="https://lh3.googleusercontent.com/pw/AJFCJaUuiITKv99sRNxXsnPuoij5USwApzWHa6yLW_pJ5eHuS6VIL0-qlvHSi5XnY044DLUl7tO6tyAkWnoovEJNpNBpXdBW_7T--4pVgucg2CMpsOCeOyw=w2400" alt='img'/>
      </div>
    </section> 
  </article> 
    </div>
  )
}
