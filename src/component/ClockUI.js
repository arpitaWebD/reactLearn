import React, { useState, useEffect } from 'react';
import '../App.css';

function ClockUI() {
  const [time, setTime] = useState('');

  function dateNew() {
    setTime(new Date().toLocaleTimeString())
  }
  useEffect(() => {
    setInterval(dateNew, 1000);
    document.querySelector('.clock').style.setProperty('--deg', '0deg');
    const element = document.querySelector('.dot');
    element.style.setProperty('--deg', '0deg')
    console.log(element, 'ssss')
  },[]);
  
  return (
      <div>
        <div className='clock'>
                <div className='dot'></div>
                <span className='pos-absolute t1'>1 </span> 
            <span className='pos-absolute t2'>2 </span> 
            <span className='pos-absolute t3'>3 </span> 
            <span className='pos-absolute t4'>4 </span> 
            <span className='pos-absolute t5'>5 </span> 
            <span className='pos-absolute t6'>6 </span> 
            <span className='pos-absolute t7'>7 </span> 
            <span className='pos-absolute t8'>8 </span> 
            <span className='pos-absolute t9'>9 </span> 
            <span className='pos-absolute t10'>10 </span> 
            <span className='pos-absolute t11'>11 </span> 
            <span className="pos-absolute t12">12 </span> 
        </div>
       <div>
           
       </div>
        </div>
  );
}

export default ClockUI;
