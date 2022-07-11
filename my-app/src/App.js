import logo from './logo.svg';
import './App.css'; 
import * as React from 'react';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Sadio Diallo 
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <Button variant="bolded" color="secondary">
        
         Pls don't click</Button>
         <Button variant="outlined" color="secondary">
        
        why'd you click</Button>
        <Button variant="outlined" color="secondary">
        
        Shoul've never clicked ma boi</Button>
        <Button variant="outlined" color="secondary">
        
        Pls don't click</Button>

      </header>
    </div>
  )
}

export default App;
