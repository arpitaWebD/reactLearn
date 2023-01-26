import logo from './logo.svg';
import './App.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Box} from "@mui/material";

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
  return (
      <div>{element}</div>
  );
}

export default App;
