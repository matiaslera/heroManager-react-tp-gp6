import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './componentes/toolbar/toolbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"> <Button variant="contained" color="primary">
      Hola Mundo!
    </Button></h1>      
      </header>

      <ButtonAppBar ></ButtonAppBar>
    </div>
  );
}

export default App;
