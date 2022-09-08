import logo from './logo.svg';
import './App.css';
import Tesla from './components/Axios/Axios'
import { NextUIProvider } from '@nextui-org/react';
import { Button } from "@nextui-org/react";


function App() {
  return (
    <div className="App">
      <Button.Group size='xl' color='gradient' ghost>
      <Button>Tesla</Button>
      <Button>Apple</Button>
      <Button>WSJ</Button>
      </Button.Group>
      <Tesla />
    </div>
  );
}

export default App;
