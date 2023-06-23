import React from 'react'
import './Report.css';
import NavBar from '../components/NavBar';
import { Img } from 'react-image';

export default function Report() {
  return (
    <div>
      <NavBar/>
      <div className='navbarrep'>
      </div>
      
    <div className='bbox'>
    <div className='divide'>
    </div>
    <div className='title'>
      <h1> Report Summary </h1>
    </div>

    <div className='content'>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui mauris, mattis sit amet cursus sit amet, faucibus ut ligula. Nam rhoncus orci ex, non pellentesque felis sodales quis. Aliquam dignissim, orci vitae tincidunt molestie, nulla erat gravida mauris, quis congue lectus erat ac nisi. Nam in aliquam ante. Curabitur ut tincidunt tellus. Duis felis orci, cursus et libero eget, condimentum pellentesque arcu. Sed laoreet quam nec nisl laoreet pharetra. Integer non mauris ac magna mollis eleifend. Nunc facilisis rutrum nunc, quis sagittis magna porta et. Vivamus lacinia, nibh nec euismod scelerisque, diam leo hendrerit magna, at varius magna purus ut metus.
Duis gravida, lacus sed imperdiet blandit, lacus magna hendrerit augue, id interdum turpis tortor quis libero. Curabitur eget elit tempus risus egestas iaculis. Suspendisse dapibus ligula vitae nulla vestibulum iaculis. Pellentesque a eros diam. Integer eget risus urna. Fusce tempus orci libero, imperdiet tincidunt lectus sagittis ac. Nunc tempor diam id laoreet facilisis. Cras magna ligula, ultricies nec ligula ut, tristique euismod nisl. Phasellus ut felis ac libero efficitur imperdiet. Curabitur lacinia commodo mi eu pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et. </p>
    </div>
    <div className='repimg'>
      <Img style={{width: '400px'}} src='https://lh3.googleusercontent.com/e-HEZVp3sHkVZvAZmvziPCOPlogofdjY3imYwHYhMhFHv04-3F1-9WttJRjuRinho-WVnrkMb89E2_Qmrrv0PoDsA1RC4exoQRcW8hmPBeBOIdH6GXi3OQjVE4cggC9ICOyCR2gutA=w2400'></Img>
    </div>
    <h2 className='percentage' style={{color: '#ffffff'}}>28%</h2>
    

    
    <div className='result'>
      <h2>You Are Safe!</h2>
    </div>
    </div>

    </div>
  )
}