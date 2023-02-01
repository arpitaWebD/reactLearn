import React, { useEffect } from 'react';
import '../App.css';

function ClockUI() {
  // const [time, setTime] = useState('');

  function dateNew() {
    // setTime(new Date().toLocaleTimeString())
  
    function dateHour(){
      if(new Date().getHours()) {
        console.log('new Date().getHours()',new Date().getHours())
        document.querySelector('.short').style.setProperty('--hr', `${new Date().getHours()* 30}deg`);
      }
    }
    function dateMin(){
      if(new Date().getMinutes()) {
        console.log('new Date().getMinutes()',new Date().getMinutes())
        document.querySelector('.long').style.setProperty('--min', `${new Date().getMinutes()* 6}deg`);
      }
    }
   
    function dateSec(){
      if(new Date().getSeconds()) {
        console.log('new Date().getSeconds()',new Date().getSeconds())
        document.querySelector('.sec').style.setProperty('--sec', `${new Date().getSeconds() * 6}deg`);
      }
    }
    setInterval(dateHour, 1000)
    setInterval(dateMin, 1000)
    setInterval(dateSec, 1000)
  }
 
  useEffect(() => {
     setInterval(dateNew, 1000);
  },[]);
  
  return (
      <div>
        <div className='clock'>
                <div className='dot'>
                  <div className='short'></div> 
                  <div className='long'></div>  
                  <div className='sec'></div> 
                </div>
                <div className='clock-wrapper'>
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
        </div>
      
        </div>
  );
}

export default ClockUI;
