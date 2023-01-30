import React, { useState, useEffect } from 'react';
import './App.css';

import Avatar from './component/avatar.js';
import Clock from './component/class.js';
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
      <div>
        {element}
        <h2>{time}</h2>
        <Avatar size={30}></Avatar>
        <Clock></Clock>
        <ClockUI></ClockUI>
        </div>
  );
}

export default App;
