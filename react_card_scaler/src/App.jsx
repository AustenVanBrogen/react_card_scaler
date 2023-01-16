import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CardBox from './components/CardBox.jsx';
import Card from './components/Card.jsx';
import './App.css';

function App() {
  

  return (
    <div className="App">
        <CardBox> 
          <div>
            <Card cardID='cardStyle1' cardText='Hello'></Card>
            <Card cardID='cardStyle2' cardText='There'></Card>
          </div>
          <div>
            <Card cardID='cardStyle3' cardText='General'></Card>
            <Card cardID='cardStyle4' cardText='Kenobi'></Card>
          </div>
        </CardBox>
    </div>
  )
}

export default App
