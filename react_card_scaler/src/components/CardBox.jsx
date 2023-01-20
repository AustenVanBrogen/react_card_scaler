import './CardBox.css';
import Card from './Card.jsx';
import React, {useState} from 'react';

const CardBox= ({children}) =>{

    const [curCardInCenter, setCurCardInCenter] = useState(0);
    function passedFunction(number){
        if(curCardInCenter === number){
            setCurCardInCenter(0);
        }
        else{
            setCurCardInCenter(number);
        }        
      }

    return <div className='cardBox'>
        <p>
            <div>
            <Card numID={1} cardID='cardStyle1' cardText='Hello' passedFunction={passedFunction} currentCard={curCardInCenter}></Card>
            <Card numID={2} cardID='cardStyle2' cardText='There' passedFunction={passedFunction} currentCard={curCardInCenter}></Card>
          </div>
          <div>
            <Card numID={3} cardID='cardStyle3' cardText='General' passedFunction={passedFunction} currentCard={curCardInCenter}></Card>
            <Card numID={4} cardID='cardStyle4' cardText='Kenobi' passedFunction={passedFunction} currentCard={curCardInCenter}></Card>
          </div>
        </p>
        </div>
}

export default CardBox;