import logo from './logo.svg';
import './App.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Box} from "@mui/material";

function App() {
  
  return (
      <div onClick={rotateStart}>ssss</div>
//     <Box gap={1} display="flex" flexDirection="column" className="App">
//
//       <Box display="flex" flexDirection="column" alignItems="flex-start">
//         <span>Q1:
// React is a ___________</span>
//           <div>
//               <FormGroup>
//                   <FormControlLabel control={<Checkbox />} label="JavaScript framework" />
//                   <FormControlLabel control={<Checkbox defaultChecked/>} label="JavaScript Library" />
//                   <FormControlLabel control={<Checkbox />} label="Both a and b" />
//                   <FormControlLabel control={<Checkbox />} label="None of this" />
//               </FormGroup>
//           </div>
//       </Box>
//         <Box display="flex" flexDirection="column" alignItems="flex-start">
//         <span>Q2:
//
// Which of the following is used to access a function fetch()  from h1 element in JSX?</span>
//             <div>
//                 <FormGroup>
//                     <FormControlLabel control={<Checkbox />} label="<h1>${fetch()}</h1>" />
//                     <FormControlLabel control={<Checkbox />} label="<h1>{fetch}</h1>" />
//                     <FormControlLabel control={<Checkbox />} label="<h1>${fetch}</h1>" />
//                     <FormControlLabel control={<Checkbox defaultChecked />} label="<h1>{fetch()}</h1>" />
//                 </FormGroup>
//             </div>
//         </Box>
//         <Box display="flex" flexDirection="column" alignItems="flex-start">
//         <span>Q2:
//
// Choose the correct data flow sequence of flux concept.</span>
//             <div>
//                 <FormGroup>
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="Action -> Dispatcher -> Store -> View" />
//                     <FormControlLabel control={<Checkbox />} label="Action -> Dispatcher -> View -> Store" />
//                     <FormControlLabel control={<Checkbox />} label="Action -> Store -> View -> Dispatcher" />
//                     <FormControlLabel control={<Checkbox  />} label="Dispatcher -> Action -> Store -> View" />
//                 </FormGroup>
//             </div>
//         </Box>
//         <Box display="flex" flexDirection="column" alignItems="flex-start">
//         <span>Q1:
//  Which is the correct arrow function to add two numbers?</span>
//             <div>
//                 <FormGroup>
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="add = (a,b) => a+b;" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="add = (a,b) => return a+b;" />
//                     <FormControlLabel control={<Checkbox />} label="add = (a,b) => { return a+b;}" />
//                     <FormControlLabel control={<Checkbox />} label="None of this" />
//                 </FormGroup>
//             </div>
//         </Box>
//
//         <Box display="flex" flexDirection="column" alignItems="flex-start">
//         <span>Q1:List some of the cases when you should use Refs.</span>
//             <div>
//                 <FormGroup>
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="When you need to manage focus, select text or media playback" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="To trigger imperative animations" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="Integrate with third-party DOM libraries" />
//                     <FormControlLabel control={<Checkbox />} label="None of this" />
//                 </FormGroup>
//             </div>
//         </Box>
//
//         <Box display="flex" flexDirection="column" alignItems="flex-start">
//         <span>Q1:What do you know about controlled and uncontrolled components?</span>
//             <div>
//                 <FormGroup>
//                     <FormControlLabel control={<Checkbox />} label="Refs are used to get their current values" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="They do not maintain their own state" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="Data is controlled by the parent component" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="They take in the current values through props and then notify the changes via callbacks" />
//                 </FormGroup>
//             </div>
//         </Box>
//         <Box display="flex" flexDirection="column" alignItems="flex-start">
//             <span>Q7:How is React Router different from conventional routing?</span>
//             <div>
//                 <FormGroup>
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="Only single HTML page is involved" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="Only the History attribute is changed" />
//                     <FormControlLabel control={<Checkbox />} label="Data is controlled by the parent component" />
//                     <FormControlLabel control={<Checkbox />} label="User actually navigates across different pages for each view" />
//                 </FormGroup>
//             </div>
//         </Box>
//         <Box display="flex" flexDirection="column" alignItems="flex-start">
//             <span>Q8:What is  react State</span>
//             <div>
//                 <FormGroup>
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="	Owned by its component" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="Writeable/Mutable" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="has setState() method to modify properties" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="Changes to state can be asynchronous" />
//                 </FormGroup>
//             </div>
//         </Box>
//         <Box display="flex" flexDirection="column" alignItems="flex-start">
//             <span>Q9:select write codee</span>
//             <div>
//                 <FormGroup>
//                     <FormControlLabel control={<Checkbox />} label="this.setState({
//   counter: this.state.counter + this.props.increment,
// });" />
//                     <FormControlLabel control={<Checkbox />} label="None of these" />
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="this.setState((state, props) => ({
//   counter: state.counter + props.increment
// }));" />
//                     <FormControlLabel control={<Checkbox />} label="both a and c" />
//                 </FormGroup>
//             </div>
//         </Box>
//     </Box>
  );
}

export default App;
