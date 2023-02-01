import React, { useState, useEffect } from 'react';
import './App.css';

import ClockUI from './component/ClockUI.js';

function App() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Patel',
    lastName: 'Arpita'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  )
  const [time, setTime] = useState('');

  function dateNew() {
    setTime(new Date().toLocaleTimeString())
  }
  useEffect(() => {
    setInterval(dateNew, 1000);
  },[]);
  
  return (
      <div className='main'>
        {element}
        <h2>{time}</h2>
        <ClockUI></ClockUI>
        </div>
  );
}

export default App;
