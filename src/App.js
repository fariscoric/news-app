import logo from './logo.svg';
import './App.css';
import Axios from './components/Axios'
import { NextUIProvider } from '@nextui-org/react';
import { Button } from "@nextui-org/react";


function App() {
  return (
    <div className="App">
      <Axios />
    </div>
  );
}

export default App;
