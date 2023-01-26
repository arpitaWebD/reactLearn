import React, { useState, useEffect } from 'react';
import './App.css';


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
  console.log('called',new Date().toLocaleTimeString())
    return <h2>It is {new Date().toLocaleTimeString()}.</h2>
  }
  useEffect(() => {
    setInterval(setTime(dateNew()), 1000);
  },[]);
  
  return (
      <div>
        {element}
        <div>{time}</div>
        </div>
  );
}

export default App;
