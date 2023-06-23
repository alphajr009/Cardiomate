import React, { useState } from 'react';
import Lottie from 'lottie-react';
import successAnimationData from './loginSuccess.json';

function SuccessAnim() {
  const [isStopped, setIsStopped] = useState(false);


  const handleAnimationComplete = () => {
    setIsStopped(true);
   
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     
        <Lottie
          animationData={successAnimationData}
          style={{ width: '250px', height: '250px' }}
          loop={false}
          isStopped={isStopped}
          onComplete={handleAnimationComplete}
        />
    
    </div>
  );
}

export default SuccessAnim;