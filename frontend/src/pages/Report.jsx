import React from 'react'
import './Report.css';
import NavBar from '../components/NavBar';
import { Img } from 'react-image';
import { useLocation } from 'react-router-dom';
import riskimage from '../photos/riskimage.png'

export default function Report(props) {
  const location = useLocation();
  const { result, probability } = location.state || {};
  const getImageSource = () => {
    if (result === 'You Are Safe!') {
      return 'https://lh3.googleusercontent.com/e-HEZVp3sHkVZvAZmvziPCOPlogofdjY3imYwHYhMhFHv04-3F1-9WttJRjuRinho-WVnrkMb89E2_Qmrrv0PoDsA1RC4exoQRcW8hmPBeBOIdH6GXi3OQjVE4cggC9ICOyCR2gutA=w2400'; // Replace with the image source for "You Are Safe!"
    } else if (result === 'You Are In Risk!') {
      return riskimage; // Replace with the image source for "You Are In Risk!"
    }
  };


  return (
    <div>
      <NavBar />
      <div className='navbarrep'>
      </div>

      <div className='bbox'>
        <div className='divide'>
        </div>
        <div className='title'>
          <h1> Report Summary </h1>
        </div>

        <div className='content'>
          <ul>
            <li>Exercise regularly: Engage in aerobic activities for at least 150 minutes per week to strengthen your heart and improve cardiovascular fitness.</li>
            <li>Follow a healthy diet: Consume fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit saturated and trans fats, cholesterol, sodium, and added sugars.</li>
            <li>Maintain a healthy weight: Balance your calorie intake with physical activity to avoid excess weight, which can strain your heart.</li>
            <li>Quit smoking: Seek professional help or join cessation programs to quit smoking and avoid exposure to secondhand smoke, a major risk factor for heart disease.</li>
            <li>Limit alcohol intake: Drink in moderation (up to one drink per day for women and up to two drinks per day for men) to avoid raising blood pressure and contributing to heart problems.</li>
            <li>Manage stress: Find healthy ways to manage stress, such as exercise, meditation, or spending time with loved ones.</li>
            <li>Monitor blood pressure and cholesterol: Get regular check-ups to track your levels. High blood pressure and cholesterol increase the risk of heart disease.</li>
            <li>Control diabetes: If you have diabetes, manage your blood sugar levels carefully to prevent damage to blood vessels and reduce the risk of heart problems.</li>

          </ul>
        </div>
        <div className='repimg'>
          <Img style={{ width: '400px' }} src={getImageSource()}></Img>
        </div>
        <h2 className='percentage' style={{ color: '#ffffff' }}>{probability}%</h2>



        <div className='result'>
          <h2>{result}</h2>
        </div>
      </div>

    </div>
  )
}